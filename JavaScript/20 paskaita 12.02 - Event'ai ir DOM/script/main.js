let renkames1 = document.querySelectorAll("p");
console.log(renkames1);
console.dir(renkames1);
// dir ir log:
// dir - grazina interaktyvu savybiu sarasa.
// log - grazina zinute.

for (let i = 0; i < renkames1.length; i++) {
  renkames1[i].addEventListener("click", function () {
    console.log("Paspaudei ant " + i + " ojo, paragrafo.");
  });
}
let renkames2 = document.querySelector("html");
renkames2.addEventListener("keydown", function () {
  console.log("Paspaudei klaviatura.");
});

//let renkames2 = document.querySelector("html");
renkames2.addEventListener("keydown", function (event) {
  console.dir(event);
  console.log("Paspaudei " + event.key + " mygtuka.");
});

let visiH1 = document.querySelectorAll("h1");
for (let i = 0; i < visiH1.length; i++) {
  console.dir(visiH1[i]);
  visiH1[i].textContent += " :)";
  visiH1[i].style.color = "red";
}

// UZDUOTYS

/*

1) Pasikonspektuoti Event'us ir DOM.
2) Iš JS'o selektinti elementus 10 naudojant skirtingų selektorių.
3) Išbandyti 5 skirtingus event'ų listener'ius.
4) Uždėti vienodą event'ą, 5'iems vienu metu selektintiems elementams.

*/

// 1

let kaledos = document.querySelector("h2");
console.log(kaledos);

let kaledos1 = document.querySelector("img");
console.log(kaledos1);

let kaledos2 = document.querySelector("p");
console.log("p");

let kaledos3 = document.querySelector("#id");
console.log("#id");

// 2

let sventes = document.querySelector("h2");
sventes.addEventListener("keydown", function () {
  // console.log("Paspaudei klaviatura.");
});

let sventes1 = document.querySelector("img");
sventes1.addEventListener("click", function () {
  console.log("jau prispaudinejai ant" + i);
});

/*let paveiksliukasTaskuose = document.querySelector("#tasks > img");
paveiksliukasTaskuose.addEventListener("mouseover", function () {
  paveiksliukasTaskuose.style.opasity = 0.5;
});*/
//for (let i = 0; i < sventes2.length; i++) {
//let sventes2 = document.querySelector("buttton");
//sventes2.addEventListener("click", function () {
//.log("pasiimti dovanas");
//});

//3

let linkejimai = document.querySelectorAll("h2");
for (let i = 0; i < linkejimai.length; i++) {
  console.dir(linkejimai[i]);
  linkejimai[i].style.color = "white";
  linkejimai[i].style.background = "red";
}

let linkejimai1 = document.querySelectorAll("button");
for (let i = 0; i < linkejimai1.length; i++) {
  console.dir(linkejimai1[i]);
  linkejimai1[i].style.color = "white";
  linkejimai1[i].style.background = "green";
}

// EVENT ROKO

/*//        Event
for (let i = 0; i < renkames1.length; i++) {
  renkames1[i].addEventListener("click", function (event) {
    console.dir(event);
    console.log("Paspaudei ant " + i + "'ojo, paragrafo.");
  });
}

let paveiksliukasTaskuose = document.querySelector("#tasks > img");
paveiksliukasTaskuose.addEventListener("mouseenter", function () {
  paveiksliukasTaskuose.style.opacity = 0.5;
});

paveiksliukasTaskuose.addEventListener("mouseleave", function () {
  paveiksliukasTaskuose.style.opacity = 1;
});
*/

//          DOM kurimas is JS'o

let DOM_is_JS = document.querySelector("#DOM_is_JS");
DOM_is_JS.innerHTML += "<p> Labas</p>";
let paragrafas = document.createElement("p");
let tekstas = document.createTextNode("Text node");

paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas); // appedend kaip i gala kazka prideti
console.log(paragrafas);

//        DOM stilizavimas iŠ JS'o
paragrafas.style.color = "#f00";
// paragrafas.className = 'tekstas';
// paragrafas.setAttribute('class', 'tekstas');
paragrafas.classList.add("tekstas");

// task 5

/*5.1) HTML'e vartotojas:
įveda skaičių;
pasirenka veiksmą;
įveda skaičių;
paspaudžia mygtuką "skaičiuoti"
5.2) Vartotojo įvesti duomenys, keliauja į JS
5.3) JS patikrina duomenis ir atlieka atitinkamus veiksmus
5.4) HTML'e per JS'ą grąžinamas atsakymas
*/

let calculator = document.querySelector("#calc");

calculator.children.skaic.addEventListener("submit", function (e) {
  e.preventDefault();
  let skaicius1 = e.target.elements.skaicius1.valueAsNumber;
  let skaicius2 = e.target.elements.skaicius2.valueAsNumber;
  let veiksmas = e.target.elements.veiksmas.value;
  let atsakymas = 0;
  switch (veiksmas) {
    case "sudetis":
      atsakymas = skaicius1 + skaicius2;
      break;
    case "atimtis":
      atsakymas = skaicius1 - skaicius2;
      break;
    case "dauginimas":
      atsakymas = skaicius1 * skaicius2;
      break;
    case "dalinimas":
      atsakymas = skaicius1 / skaicius2;
      break;
    case "laipsnis":
      atsakymas = skaicius1 ** skaicius2;
      break;
    case "saknis":
      atsakymas = skaicius1 ** (1 / skaicius2);
      break;
    case "liekana":
      atsakymas = skaicius1 % skaicius2;
      break;
  }
  calculator.children.output.innerHTML = atsakymas;
});
