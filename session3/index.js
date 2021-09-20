import {Login} from "./components/login.js";

const app = document.getElementById("app");
const loginScreen = new Login();

app.appendChild(loginScreen.$container);

const setScreen = ($container) => {
    app.innerHTML = "";
    app.appendChild($container);

}

setScreen(loginScreen.$container);

export  {setScreen};