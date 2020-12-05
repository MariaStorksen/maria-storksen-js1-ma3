const url = "https://api.rawg.io/api/games?dates=2019-01-01%2C2019-12-31&ordering=-rating&page=2";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    const response = await fetch(url);

    const data = await response.json();

    const games = data.results;



 resultsContainer.innerHTML = "";

for (let i = 0; i < games.length; i++)  {
       console.log(games[i].name);
       console.log(games[i].rating);
       console.log(games[i].tags.length);

    if (i === 7) {
       break;
        }  

resultsContainer.innerHTML += `<div class="data">${games[i].name}</div>`+`<div class="data">${games[i].rating}</div>`+`<div class="data">${games[i].tags.length}</div>`;
    
    }
}

getGames(resultsContainer);
