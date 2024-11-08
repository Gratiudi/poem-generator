function writePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let poemTitle = document.querySelector("#poem-title");
  let apiKey = "fb05o0ab323256cef37t4ba2f5c3a9ed";
  let prompt = `Generate a 4 line poem about ${poemTitle.value}.`;
  let context =
    "You are an expert poem writer.Generate a 4 line poem in basic Html format and write each line separately using <br> and return only the poem and donot write other words like html or name of the html element";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(writePoem);
  let poem = document.querySelector("#poem");
  poem.innerHTML = `Generating a poem about ${poemTitle.value} for you ☺️✍🏻`;
}
let form = document.querySelector(".input-form");
form.addEventListener("submit", generatePoem);
