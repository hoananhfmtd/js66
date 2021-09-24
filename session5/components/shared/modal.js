class Modal {
    $container = document.createElement("div");
    $modalContainer = document.createElement("div");

    $header = document.createElement("div");
    $body = document.createElement("div");
    $footer = document.createElement("div");
    
    $btnConfirm = document.createElement("button");
    $btnCancel = document.createElement("button");

    constructor() {
        this.$container.appendChild(this.$modalContainer);

        this.$modalContainer.appendChild(this.$header);
        this.$modalContainer.appendChild(this.$body);
        this.$modalContainer.appendChild(this.$footer);

        this.$btnConfirm.innerHTML = "OK";
        this.$btnCancel.innerHTML = "Cancel";
        this.$footer.appendChild(this.$btnCancel);
        this.$footer.appendChild(this.$btnConfirm);    
    }

    setBody = (component) => {
        this.$body.innerHTML="";
        this.$body.appendChild(component);
    };

    setHeader = (title) => {
        this.$header.innerHTML = title;
    };

    setOnCancelClick = (listener) => {
        this.$btnCancel.onclick = listener;
    };

    setOnConfirmClick = (listener) => {
        this.$btnConfirm.onclick = listener ;
    };
}

export {Modal};