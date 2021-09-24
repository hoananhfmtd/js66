import { ConversationList } from "./chat/conversationList.js";

class Chat {
    $container = document.createElement("div");
    $conversationList = new ConversationList();
    
    constructor() {
        this.$container.appendChild(this.$conversationList.$container);
    }
}

export {Chat} ;