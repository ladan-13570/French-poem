function generatePoem(event) {
  event.preventDefault();

new Typewriter('#poem', {
  strings: ['ern ABAB. Demain, dès l’aube, à l’heure où blanchit la campagne'],
  autoStart: true,
  Delay:1,
  curser:"",
});}

let poemFormElement = document.querySelector("#poem-generated-form");
poemFormElement.addEventListener("submit", generatePoem);
