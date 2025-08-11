export default function renderMenu () {
    let content = document.querySelector("div#content");

    let menu = document.createElement("ul");
    menu.classList.add("menu");

    let lambChops = document.createElement("li");
    lambChops.textContent = "Lamb chops ($45)"
    
    let lambSausage = document.createElement("li");
    lambSausage.textContent = "Merguez sausage ($12)";

    let lambHash = document.createElement("li");
    lambHash.textContent = "Merguez hash topped with fried egg ($16)";

    menu.append(lambChops, lambSausage, lambHash);
    content.replaceChildren();
    content.append(menu);

}