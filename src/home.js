import logoURL from "./images/logo.png";

export default function renderHome () {
    let content = document.querySelector("div#content");

    let logo = document.createElement("img");
    logo.src = logoURL;
    logo.classList.add("logo");

    let welcome = document.createElement("p");
    welcome.classList.add("greeting")
    welcome.textContent = "Welcome to Sheepy's Lamb Stand! Serving the best rack of lamb south of Colorado.";

    content.append(logo, welcome);
}