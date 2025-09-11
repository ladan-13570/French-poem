function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    Delay: 1,
    curser: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o78b4041ct8e052b8e0418f8ffea31bf";

  let context =
    "you are a romantic poem expert and love to write short poems.you mission is to generate a 4 line poem and separate each line with a <br/>.Make sure to follow the user instructions. Sign the poem with 'Shecodes AI' inside a <strong> element at the end of the poem";
  let prompt = `user instructions: Generate a French poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generated-form");
poemFormElement.addEventListener("submit", generatePoem);
