let quote = document.getElementById("quote");
let author = document.getElementById("author");
let button = document.getElementById("btn");

const url = "https://api.quotable.io/random";


let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
  };

  window.addEventListener("load", getQuote);
  button.addEventListener("click", getQuote);
  