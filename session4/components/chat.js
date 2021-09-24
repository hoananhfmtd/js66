class Chat {
    $container = document.createElement("div");
    $btnLogout = document.createElement("button");
    
    constructor() {
        this.$container.innerHTML = "Chat";
        
        this.$btnLogout.innerHTML = "Log out";
        this.$btnLogout.addEventListener("click", this.handleLogout);
        
        this.$container.appendChild(this.$btnLogout);
    }
    
    handleLogout = () => {
        firebase.auth().signOut();
    };
}

export {Chat}