// ************************** SELETTORI *****************************
/* const primoDiv = document.getElementById("primo-div")
primoDiv.innerText = "Contenutoooooooooooooooooooooo"
primoDiv.style.background = "red"
const contenitori = document.getElementsByClassName("contenitore")
contenitori[0].style.background = "blue"
contenitori[0].style.background = "green"
const arrayDiH1 = document.getElementsByTagName("h1")
const primoDiv2 = document.querySelector("#primo-div") // primoDiv === primoDiv2
const contenitori2 = document.querySelectorAll(".contenitore") // contenitori === contenitori2
 */

const cambiaTestoH1 = (nuovoTesto) => {
  // Dato il nuovoTesto voglio sostituirlo al testo attuale dell'h1

  // 1. Seleziono con js l'h1
  /*   const listaDiH1 = document.getElementsByTagName("h1")
      const h1 = listaDiH1[0] */

  const h1 = document.getElementsByTagName("h1")[0];
  // alternativa const h1 = document.querySelector("h1")

  h1.innerText = nuovoTesto; // Sovrascrivo il testo attuale con il testo passato come parametro
};

const cambiaH1InBaseAValoreInput = () => {
  const h1 = document.getElementsByTagName("h1")[0];
  const inputField = document.getElementById("nuovo-testo-h1");

  const nuovoContenuto = inputField.value; // Leggo il valore attuale dell'input
  h1.innerText = nuovoContenuto;
};

const cambiaH2InArancione = () => {
  // Seleziono tutti gli h2
  const tuttiH2 = document.getElementsByTagName("h2"); // Ottengo una HTML COLLECTION (simile agli array)
  // Il forEach non funziona sulle html collection
  // NON FUNZIONA --> tuttiH2.forEach(e => console.log(e))
  const tuttiH2Array = Array.from(tuttiH2);
  // Per ogni h2 vado ad aggiungere la classe scritte-arancioni
  tuttiH2Array.forEach((h2) => h2.classList.toggle("scritte-arancioni"));

  /*
    
    - .add("nomeClasse") aggiunge una classe
    - .remove("nomeClasse") rimuove una classe
    - .toggle("nomeClasse") aggiunge classe se non c'era, rimuove classe se c'era
    */

  /*   const tuttiH2 = document.querySelectorAll("h2")
    tuttiH2.forEach(e => console.log(e))  Se seleziono col querySelectorAll posso usare forEach
    */
};

const aggiungiElementoADiv = () => {
  // Quando chiamata, crea un nuovo elemento ("div") da aggiungere come figlio al div preesistente

  // 1. Creo il nuovo elemento/nodo
  const nuovoDiv = document.createElement("div");

  // 2. Modifico il nuovo elemento (aggiungo il testo, aggiungo una o più classi)
  nuovoDiv.innerText = document.getElementById("nuovo-testo-h1").value;

  // 3. Devo ricordarmi di "agganciare" il nuovo elemento creato al DOM, selezionando un elemento padre al quale attaccarlo

  // 3.1 Seleziono prima il padre
  const padre = document.getElementById("lista-elementi");

  // 3.2 Appendo il nuovoDiv al padre
  padre.appendChild(nuovoDiv);
};

window.onload = () => {
  alert("Pagina caricata con successo!");
};
