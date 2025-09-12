function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o78b4041ct8e052b8e0418f8ffea31bf";

  let context =
    "you are a romantic poem expert and love to write short poems.you mission is to generate a 4 line poem and separate each line with a <br/>.Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem";
  let prompt = `user instructions: Generate a French poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove ("hidden"); 
  poemElement.innerHTML = `<div class="generating">⏳Generating a French poem about ${instructionsInput.value}</div>`;
  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
