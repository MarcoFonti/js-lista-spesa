// CHECK
console.log('JS OK');


//! SCALETTA CICLO WHILE
/*
1 Prendo gli elementi 
2 Variabili di base 
3 Creiamo ciclo while
4 Stampo
*/


/* RECUPERO ELEMENTO ID */
const recipeListElements= document.getElementById('recipe-list');


/* CONTROLLO RISPOSTA */
console.log(recipeListElements);


/* CREO ARRAY */
const arrayLists = ['Banana', 'Pesca', 'Patate', 'Pane', 'Manderino', 'Nutella'];


/* APERTUTA TEMPLETE LITERALS */
let lists = `<ul>`;


/* CREO VARIBILE PER INCREMENTARE DENTRO LA CONDIZIONE */
let i = 0


/* FINCHE' LA I E MINORE DELLA LUNGEZZA DELLA'ARRAY */
while (i < arrayLists.length) {


    /* AGGIUNGO AL TEMPLTE LITERALS I VARI NOME DENTRO L'ARRAY */
    lists += `<li> ${arrayLists[i]} </li>`


/* INCREMENTO */
    i++
}


/* CHIUSURA TEMPLATE LITERALS */
lists += `</ul>`


/* STAMPO IN PAGINA */
recipeListElements.innerHTML += lists;


/* --------------------------------------------------------------------------------------------------------------- */


//! SCALETTA CICLO FOR
/*
1 Prendo gli elementi 
2 Variabili di base 
3 Creiamo ciclo for
4 Stampo
*/


/* RECUPERO ELEMENTO ID */
const recipeListElement = document.getElementById('recipe-list');


/* CONTROLLO RISPOSTA */
console.log(recipeListElement);


/* CREO ARRAY */
const arrayList = ['Banana', 'Pesca', 'Patate', 'Pane', 'Manderino', 'Nutella'];


/* CREO UN ELEMENTO UL GRAZIE ALLA MANIPOLAXZIONE DEL DOM */
const list = document.createElement("ul");


/* CICLO FOR DELLA LUNGHEZZA DELL'ARRAY INCREMENTO DI 1 */
for (let i = 0; i < arrayList.length; i++) {


    /* CREO UN ELEMENTO LI */
    const items = document.createElement("li");


    /* AGGGIUNO ALLA VARIBILE ITEMS OVVERO DENTRO LI LA LISTA DEI NOMI DELL'ARRAY */
    items.append(`${arrayList[i]}`);


    /* AGGIUNGO ALLA VARIBILE LIST LA VARIBILE ITEMS (CHIAMATO = NODO) */
    list.appendChild(items);
}

/* STAMPO IN PAGINA */
recipeListElement.appendChild(list);
