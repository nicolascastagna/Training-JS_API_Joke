// https://api.blablagues.net/?rub=blagues

// Pour afficher la data de l'API :
// console.log(data.data.content.text_head));

const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);

      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}
getJoke();

// getJoke pour changer de blague au click
document.body.addEventListener("click", getJoke);

// Pour eviter les répétitions de "data", on créé une variable data.data.content
// Et permet de destructurer, en remplaçant data.data.content par joke
