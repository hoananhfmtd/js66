import { InputGroup } from "./shared/inputGroup.js";

class Register {
    $container = document.createElement("div");
    $txtTitle = document.createElement("h3");

    $form = document.createElement("form");
    $inputGroupEmail = new InputGroup("Email", "email");
    $inputGroupDisplayName = new InputGroup("Display Name", "text");
    $inputGroupPassword = new InputGroup("Password", "password");
    $intputGroupConfirmPassword = new InputGroup("Confirm Password", "password");

    $actions = document.createElement("div");
    $btnRegister = document.createElement("button");
    $btnGoToLogin = document.createElement("button");

    constructor() {
        this.$container.appendChild(this.$form);

        this.$txtTitle.innerHTML = "Register";

        this.$form.appendChild(this.$txtTitle)
        this.$form.appendChild(this.$inputGroupEmail.$container);
        this.$form.appendChild(this.$inputGroupDisplayName.$container);
        this.$form.appendChild(this.$inputGroupPassword.$container);
        this.$form.appendChild(this.$intputGroupConfirmPassword.$container);
        this.$form.appendChild(this.$actions);
        this.$form.addEventListener("submit", this.handleSubmit);

        this.$btnRegister.innerHTML = "Register";
        this.$btnRegister.type = "submit";
        this.$btnGoToLogin.innerHTML = "Go to Login";
        this.$btnGoToLogin.innerHTML = "button";

        this.$actions.appendChild(this.$btnRegister);
        this.$actions.appendChild(this.$btnGoToLogin);
    }
    handleSubmit = (evnent) => {
        event.preventDefault();
        const email =  this.$inputGroupEmail.getValue();
        const displayName = this.$inputGroupPassword.getValue();
        const password = this.$inputGroupPassword.getValue();
        const confirmPassword = this.$intputGroupConfirmPassword.getValue();
        if (!email) {
            this.$inputGroupEmail.setErrorMessage("Email cannot be empty!");
        } else {
            this.$inputGroupEmail.setErrorMessage("");
        }
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebase
            .auth()
            .currentUser.sendEmailVerification()
            .then(() => {
                alert("Please check your inbox!")
            });
        });
    };

}
export {Register}