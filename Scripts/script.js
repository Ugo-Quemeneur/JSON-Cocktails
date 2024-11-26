let uRl = "https://www.thecocktaildb.com/api/json/v1/1/"
let searching = doument.getElementById("searchbar")
// let 
let cockailsList = new Array();

function appel(uRl) {
    fetch(uRl)
        .then((response) => { /*Réponse*/
            return response.json(); /*en json*/
        })
        .then((data) => {
            createCocktails(data);
            //  console.log(data); /* contrôle de data arrivant ou non */
        });
}

function createCocktails(_cocktails) {
    for (let cocktail of _cocktails) {
        cockailsList.push(cocktail)
    }
}

function infoCocktails() {

}

if (radio == Ingredients) { /* En fonction de ce que l'utilisateur choisit */
    searchByIngredients(searching) /* On prends cette fonction */
}
if (radio == cocktailname) {
    searchByIngredients(searching) /* ou l'autre */
}

function searchByIngredients(_searching) {

}

function searchByName(_searching) {

}