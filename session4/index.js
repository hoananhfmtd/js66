import {Login} from "./components/login.js";
import {Chat} from "./components/chat.js";

const app = document.getElementById("app");
const loginScreen = new Login();

app.appendChild(loginScreen.$container);

const setScreen = ($container) => {
    app.innerHTML = "";
    app.appendChild($container);

}


// setScreen(loginScreen.$container);

firebase.auth().onAuthStateChanged((user) => {
    console.log("hello", user);
    if (user !== null) {
        const chatScreen = new Chat();
        setScreen(chatScreen.$container);
    } else {
        const loginScreen = new Login();
        setScreen(loginScreen.$container);
    }
});

export  {setScreen};