import sheepyURL from "./images/sheepy-at-grill.png";

export default function renderAbout () {
    let content = document.querySelector("div#content");

    let sheepy = document.createElement("img");
    sheepy.src = sheepyURL;
    sheepy.classList.add("main-image");

    let story = document.createElement("p");
    story.textContent = "I grew up in the Falkland Islands with many of my friends. But the Falklands have been in decline ever since the war with Argentina. So I decided to strike out for the land of opportunity: America! Here I use my expertise to make the very best lamb dishes possible, prepared on a Weber charcoal grill. Please support me and my fluffy friends.";

    content.replaceChildren();
    content.append(sheepy, story);
}