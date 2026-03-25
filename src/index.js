
function displayPoem() {
    new Typewriter("#poem", {
    strings: response.data.answer ,
    autoStart: true,
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "707b228tfod34a6602695b296fa44bb3";
    let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
    let context = "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log(prompt);
    console.log(context);
    axios.get(apiUrl).then(displayPoem);
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener('submit', generatePoem)