// CHECK
console.log('JS OK');

//! SCALETTA CICLO WHILE
/*
    1 Prendo gli elementi 
    2 Variabili di base 
    3 Creiamo ciclo while
    4 Stampo
 */

    /* 
const recipeListElement = document.getElementById('recipe-list');

console.log(recipeListElement);

const arrayList = ['Banana', 'Pesca', 'Patate', 'Pane', 'Manderino', 'Nutella'];

let list = `<ul>`;

let i = 0 

while (i < arrayList.length) {

    list += `<li> ${arrayList[i]} </li>`

    i++
}

list += `</ul>`


recipeListElement.innerHTML += list;

*/

//! SCALETTA CICLO FOR
/*
    1 Prendo gli elementi 
    2 Variabili di base 
    3 Creiamo ciclo for
    4 Stampo
 */

const recipeListElement = document.getElementById('recipe-list');

console.log(recipeListElement);
    
const arrayList = ['Banana', 'Pesca', 'Patate', 'Pane', 'Manderino', 'Nutella'];
    
const list = document.createElement("ul");

for (let i = 0; i < arrayList.length; i++) {
    const items = document.createElement("li");
    items.append(`${arrayList[i]}`);
    list.appendChild(items);
}

recipeListElement.appendChild(list);
