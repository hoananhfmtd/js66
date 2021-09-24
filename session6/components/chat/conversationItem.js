class ConversationItem {
    id;
    name;
    users;
    
    $container = document.createElement("div");
    $txtName = document.createElement("span");
    $txtNoOfUsers = document.createElement("span");

    constructor(id, name, users) {
        this.id = id;
        this.name = name;
        this.users = users;

        this.$txtName.innerHTML = name;
        this.$txtNoOfUsers.innerHTML = users.length;

        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtNoOfUsers);
    }

    setOnclick = (listener) => {
        this.$container.onclick = () => {
            listener(this.id, this.name, this.users)
        };
    };

    setHighLight = (isHighLighted) => {
        if (isHighLighted) {
            this.$container.style.background = 'blue'
            this.$container.style.color = 'white';
        } else {    
            this.$container.style.background = 'white';
            this.$container.style.color = 'black';
        }
    }
}

export {ConversationItem}