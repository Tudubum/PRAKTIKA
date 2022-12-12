/*Number:
  1) Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
  2) Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).
  3) Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trimis skaičias po kablelio, antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).
String:
  1) Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.
  2) Sukurk input, kur vartotojas įves savo vardą. Įvedus - console'ink kokio ilgio yra vardas. Tačiau užtikrink, kad priekyje ir gale nebūtų įskaičiuoti tarpeliai.
  3) Sukurk input, kur vartotojas įves savo pilną vardą (t.y. vardą ir pavardę). Padaryk, kad JS pridėtų du h1 tag'us, viename - vardas, kitame - pavardė.
  4) Pakoreguok trečią pratimą, kad įskaičiuotų, jei pavardė ilgesnė nei vienas žodis. Jeigu žodžių daugiau negu du, tuomet antrąjį, trečiąjį ir visus likusius išvesti į antrąjį h1 laukelį.

Konspektai:
  1) Pasikonspektuoti VISUS Number metodus ir savybes.
  2) Pasikonspektuoti VISUS Math metodus ir savybes.
  3) Pasikonspektuoti VISUS String metodus ir savybes.


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

*/

// TASK 1
//Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją console() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).

let milkPrice = 2.37;
if (Number.isInteger(milkPrice)) {
  console.log("Jums nereikės centų");
} else {
  console.log("Jums prireiks centų");
}

// TASK 2
// Pakoreguok pirmą pratimą, kad console taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).

let milkPrice2 = 3;
if (Number.isInteger(milkPrice2)) {
  console.log("Jums nereikės centų");
} else {
  console.log("Jums prireiks centų");
}
console.log(milkPrice2.toFixed(2));

// TASK 3

document.querySelector('#task3').addEventListener("submit", (e) => {
e.preventDefault();
let kaina = Number(document.getElementById('kaina').value);
let kiekis = Number(document.getElementById('kiekis').value);

let total = kaina * kiekis;

const suma = document.createElement("h1");
suma.textContent = total.toFixed(2);
document.querySelector("#task3").append(suma);

 });

// TASK STRING
// TASK 1
//Sukurk du input'us - vieną, kur vartotojas įves savo vardą; kitą - skaičių. Pirma, patikrink ar skaičius sveikas (jei ne - console). Jei sveikas, po apačia sukurk h1 elementą, kur vardas bus atkartotas tiek kartų, kiek skaičius nurodo.

document.querySelector('#String_task1').addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let number = Number(document.getElementById("number").value);
  if (Number.isInteger(number)) {
    let h1 = document.createElement("h1");
    h1.textContent = name.repeat(number);
    document.querySelector("#String_task1").append(h1);
  } else {
    console.log("Ivestas skaicius yra ne sveikas skaitmuo");
  }
});



// string task 4

function fullNameSplit(fullName){
  console.log(fullName.indexOf(' '));
  let firstSpace = fullName.indexOf(' ');
  let name1 = fullName.slice(0, firstSpace);
  let name2 = fullName.slice(firstSpace+1);
  console.log(name1+'-----'+name2);
}

let kaGaunam = fullNameSplit("Rokas Banaitis treciasis")