import { InputGroup } from "./shared/inputGroup.js";
import {setScreen} from "../index.js";
import {Register} from "./register.js";

class Login {
    $container = document.createElement("div");
    $txtTitle = document.createElement("h3");
    
    $form = document.createElement("form");
    $inputGroupEmail = new InputGroup("Email", "email");
    $inputGroupPassword = new InputGroup("Password", "password");

    $actions = document.createElement("div");
    $btnLogin = document.createElement("button");
    $btnGoToRegister = document.createElement("button");

    constructor() {
        this.$txtTitle.innerHTML = "Login";
        this.$btnLogin.innerHTML = "Login";
        this.$btnGoToRegister.innerHTML = "Go to Register";
        this.$btnGoToRegister.type = "button";
        this.$btnGoToRegister.addEventListener('click', this.handleGoToRegister)

        this.$container.appendChild(this.$form);

        this.$form.appendChild(this.$txtTitle);
        this.$form.appendChild(this.$inputGroupEmail.$container);
        this.$form.appendChild(this.$inputGroupPassword.$container);
        this.$form.appendChild(this.$actions);
        this.$form.addEventListener("submit", this.handleSubmit);

        this.$actions.appendChild(this.$btnLogin);
        this.$actions.appendChild(this.$btnGoToRegister);
    }

    handleGoToRegister = () => {
        const registerScreen = new Register();
        setScreen(registerScreen.$container);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.$inputGroupEmail.getValue();
        const password = this.$inputGroupPassword.getValue();

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential);
        });
    };
}

export {Login};