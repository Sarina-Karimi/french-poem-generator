function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "poem"
    new Typewriter(poemElement, {
    strings: "Sous le ciel doux du matin",
    autoStart: true,
    });
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem)