function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "poem"
    new Typewriter(poemElement, {
    strings: "Demain, dès l’aube, à l’heure où blanchit la campagne Je partirai. Vois-tu, je sais que tu m’attends.",
    autoStart: true,
    });
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem)