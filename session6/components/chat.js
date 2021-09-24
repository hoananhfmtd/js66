import { ConversationList } from "./chat/conversationList.js";
import { TitleBar } from "./chat/titleBar.js";

class Chat {
    activeConversation;

    $container = document.createElement("div");
    $conversationList = new ConversationList();
    $titleBar = new TitleBar();

    constructor() {
        this.$conversationList.setOnConversationItemClick(
            this.setActiveConversation
        );
        this.$container.appendChild(this.$conversationList.$container);
        this.$container.appendChild(this.$titleBar.$container);
        this.subcribeConversations();
    }

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$titleBar.setName(conversation.name);
        this.$conversationList.setActiveConversation(this.activeConversation);
    };

    subcribeConversations = () => {
        db.collection("conversations").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    this.$conversationList.handleConversationAdded(
                        change.doc.id,
                        change.doc.data().name,
                        change.doc.data().users
                    );
                }
            });
        });
    };
}

export { Chat };