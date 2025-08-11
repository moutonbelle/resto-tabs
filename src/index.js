import "./styles.css";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

renderHome();

document.querySelector("button#home").addEventListener("click", renderHome);
document.querySelector("button#menu").addEventListener("click", renderMenu);
document.querySelector("button#about").addEventListener("click", renderAbout);