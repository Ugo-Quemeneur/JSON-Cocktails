// let uRl = "https://www.thecocktaildb.com/api/json/v1/1/"
let searchInput = document.getElementById("searchbar");
let searchByName = document.getElementById("coname");
let searchButton = document.getElementById("searchbut");

let cockailsList = new Array();

const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  const searchType = searchByName.checked ? 'name' : 'ingredient';
  if (!query) return alert("Veuillez entrer un terme de recherche.");
  const endpoint =
    searchType === 'name'
      ? `${API_BASE}search.php?s=${query}`
      : `${API_BASE}filter.php?i=${query}`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => displayResults(data.drinks))
    .catch(console.error);
});

// function appel(uRl) {
//     fetch(uRl)
//         .then((response) => { /*Réponse*/
//             return response.json(); /*en json*/
//         })
//         .then((data) => {
//             createCocktails(data);
//             //  console.log(data); /* contrôle de data arrivant ou non */
//         });
// }

function displayResults(_cocktails) {
    for (let cocktail of _cocktails) {
        cockailsList.push(cocktail);
    }

    showCocktails(cocktailsList);
}

function createCoktail(_cocktails) {
    cocktailList.innerHTML = '';
    if (!_cocktails || _cocktails.length === 0) {
        cocktailList.innerHTML = 'Aucun cocktail correspondant à votre demande';
        return;
    }
    _cocktails.forEach(cocktail => {
        let cocktailElement = document.createElement('div');
        cocktailElement.classList.add('card');
        cocktailElement.innerHTML = `
            <h3>${cocktail.strDrink}</h3>
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <p>${cocktail.strInstructions || 'Pas d\'instructions disponibles'}</p>`;
        cocktailList.appendChild(cocktailElement);
    });
  }

  function showCocktails(_cocktails){
  }

function showCocktails(_cocktails) {
    cocktail.innerHTML = '<img src="' + _cocktails[y].strDrinkThumb + '" >' + '<h2 class="cocktailstitle">' + _cocktails[y].strDrink + '</h2>';
}

// let butSearch = document.getElementById('searchbut');
// let eventButSearch = butSearch.addEventListener("click", searchBy);

// function searchBy() {
//     let valeur;
//     let radios = document.getElementsByName('drone');
//     for (let i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             valeur = radios[i].value;
//             break;
//         }
//         console.log(valeur);
//     }
//     if (valeur == "Ingredients") { /* En fonction de ce que l'utilisateur choisit */
//     searchByIngredients(searching) /* On prends cette fonction */
//     }
//     if (valeur == "cocktailname") {
//         searchByName(searching) /* ou l'autre */
//     }
// }




function infoCocktails() {

}



function searchByIngredients(_searching) {

}
