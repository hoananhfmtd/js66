import { ConversationItem } from "./conversationItem.js";
import { CreateConversationForm } from "./createConversationForm.js";

class ConversationList {
    $container = document.createElement("div");
    $btnCreateConversation = document.createElement("button");
    $createConversationForm = new CreateConversationForm();

    onConversationItemClick;

    constructor() {
        this.$btnCreateConversation.innerHTML = "+ Create Conversation";
        this.$btnCreateConversation.addEventListener(
            "click",
            this.handleCreateConversationClick
        );

        this.$container.appendChild(this.$btnCreateConversation);
        this.$container.appendChild(this.$createConversationForm.$container);
    }

    setOnConversationItemClick = (listener) => {
        this.onConversationItemClick = listener;
    };

    handleCreateConversationClick = () => {
        this.$createConversationForm.setVisible(true);
    };

    handleConversationAdded = (id, name, users) => {
        const item = new ConversationItem(id, name, users);
        item.setOnclick((id, name, users) => {
            this.onConversationItemClick({
                id: id,
                name: name,
                users: users,
            });
        });
        this.$container.appendChild(item.$container);
    };
}

export {ConversationList};