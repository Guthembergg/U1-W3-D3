/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (testo) {
  const title = document.getElementsByTagName("h1")[0];
  title.innerText = testo;
};
//changeTitle("ciao");

/* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
       */

const addClassToTitle = function (nomeClasse) {
  const title = document.getElementsByTagName("h1")[0];
  title.classList.add(nomeClasse);
};
//addClassToTitle("newclass");

/* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */

const changePcontent = function (testo) {
  const divP = document.querySelectorAll("div p");
  divP.forEach((p) => (p.innerText = testo));
};
//changePcontent("ciaociao");

/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const changeUrls = function (l) {
  const link = document.querySelectorAll("a:not(:last-child) ");
  link.forEach((a) => a.setAttribute("href", l));
};
//changeUrls("http://www.google.com");

/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const addToTheSecond = function () {
  const nuovoUl = document.createElement("li");
  const padre = document.querySelector("#secondList");
  padre.appendChild(nuovoUl);
};
//addToTheSecond();

/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */

const addParagraph = function () {
  const nuovoP = document.createElement("p");
  const padre = document.getElementsByTagName("div")[0];
  padre.appendChild(nuovoP);
};
//addParagraph();

/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const hideFirstUl = function () {
  const Ul = document.getElementsByTagName("ul")[0];
  Ul.remove();
};
//hideFirstUl();

/* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const paintItGreen = function () {
  const Ul = document.querySelectorAll("ul");
  Ul.forEach((element) => (element.style.background = "green"));
};

//paintItGreen();

/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

const makeItClickable = function () {
  const h1 = document.getElementsByTagName("h1")[0];
  h1.setAttribute("onclick", "innerText = innerText.slice(0,-1)");
};
//makeItClickable();

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

const revealFooterLink = function () {
  const footer = document.getElementsByTagName("footer")[0];
  const a = document.querySelector("footer a");
  footer.setAttribute(
    "onclick",
    "alert(document.querySelector('footer a').href)"
  );
};
//revealFooterLink();

/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

const generateTable = function () {
  const table = document.createElement("table");
  const tr1 = document.createElement("tr");
  const nuovo1 = document.createElement("th");
  nuovo1.innerText = "immagine";
  const nuovo2 = document.createElement("th");
  nuovo2.innerText = "nome";
  const nuovo3 = document.createElement("th");
  nuovo3.innerText = "prodotto";
  const nuovo4 = document.createElement("th");
  nuovo4.innerText = "quantita'";
  const nuovo5 = document.createElement("th");
  nuovo5.innerText = "prezzo";
  const Padre = document.getElementById("tableArea");
  Padre.appendChild(table);
  table.appendChild(tr1);
  tr1.appendChild(nuovo1);
  tr1.appendChild(nuovo2);
  tr1.appendChild(nuovo3);
  tr1.appendChild(nuovo4);
  tr1.appendChild(nuovo5);
  document.querySelector("table").style.border = "1px solid #000";
  arrth = document.querySelectorAll("th");
  arrth.forEach((element) => {
    element.style.border = "1px solid #000";
  });
};
//generateTable();
/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */

const addRow = function () {
  const tr2 = document.createElement("tr");
  const Padre = document.getElementsByTagName("table")[0];
  Padre.appendChild(tr2);
  for (let i = 0; i < 5; i++) {
    const td = document.createElement("td");
    tr2.appendChild(td);
  }
  arrth = document.querySelectorAll("td");
  arrth.forEach((element) => {
    element.style.border = "1px solid #000";
  });
};
//addRow();
/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {
  document.getElementById("element").style.display = "none";
};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

const changeColorWithRandom = function () {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const h2 = document.getElementsByTagName("h2")[0];
  h2.addEventListener("click", function () {
    h2.style.background = getRandomColor();
  });
};
//changeColorWithRandom();

/* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */

const deleteVowels = function () {
  const elements = document.getElementsByTagName("*");
  console.log(elements);
  for (let i; i < elements.length; i++) {
    elements[i].innerText = elements[i].innerText.replace(/[aeiou]/gi, "");
  }
};
deleteVowels();
