/* Sukurti funkcijas, kurios atiliktu paprastus matematinius veiksmus su duotaisiais parametrais(du parametrai). (4 funkcijos) (optional 7 funkcijos.)*/

function sudetis(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2 === "number") {
    let atsakymas = skaicius1 + skaicius2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

function atimtis(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2) {
    let atsakymas = skaicius1 - skaicius2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

function daugyba(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2) {
    let atsakymas = skaicius1 * skaicius2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

function dalyba(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2) {
    let atsakymas = skaicius1 / skaicius2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

function kelimasLaipsniu(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2 === "number") {
    let atsakymas = skaicius1 ** skaicius2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

//  return Math.pow(skaicius1, skaicius2) kelimas laispniu variantas
function sakniesTraukimas(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2 === "number") {
    let atsakymas = skaicius1 ** (1 / skaicius2);
    return atsakymas;
  } else {
    return "Error 404";
  }
}
// galima ir per console rasyti, tik tada reikia apisrasyti kas per skaicius gaunamas
console.log(" is 25 traukiame 2 laisonio sakni", sakniesTraukimas(25, 2));

function liekanosRadimas(skaicius1, skaicius2) {
  if (typeof skaicius1 === "number" && typeof skaicius2 === "number") {
    let atsakymas = skaicius1 % skaicius2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

// uzduotis 2 
//  Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.

function firstToLast(array) {
  for (let element of array) {
    console.log(element);
  }
}
/* ARBA LENSGEVSNIS TINKAMAS VARIANTAS UZDUOTIS 2
function firstToLast(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
*/
// uzduotis 3
// Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo paskutinio iki pirmojo.


function lastToFirst(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  /* KITAS TINKAMAS VARIANTAS UZDUOTIS 3
   array.reverse();
  for (let element of array) {
    console.log(element);
  } */
}

//4) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.

let wordArray = [
  "Galaktika",
  "Žemė",
  "Sala",
  "Miškas",
  "Kalnas",
  "Aukštikalnis",
];

function sortWords(wordArray) {
  wordArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(wordArray);
}

//5) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais))) nuo didžiausio iki mažiausio ir ją išvestų į konsolę.

let numberArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, -1, 1, 3, 3, 6];

function sortNumbers(numberArray) {
  numberArray.sort(function (a, b) {
    return a - b;
  });
  console.log(numberArray);
}

//6) Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro (imtinai) iki antrojo (imtinai). (paduodu 5,9 => grąžina 5,6,7,8,9)

// paduodu 5,9

function numeriai(nr1, nr2) {
  for (i = nr1; i <= nr2; i++) console.log(i);
}

/*   NE GERAS VARIANTAS
let skaiciuSkale = [5, 9];
skaiciuSkale.splice(1, 0, 6, 7, 8);*/

//7) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo parametro (imtinai). (paduodu 2,5,9 => grąžina 5,7,9)

// paduodu 2,5,9

function skaiciai(a, b, c) {
  for (i = b; i <= c; i += a) {
    // a cia kaip step
    console.log(i);
  }
}

/*
 */

/*let skSkale = [2, 5, 9];
skSkale.splice(0, 2, 5, 7);*/

//8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).

// giedre deveikyte => 15

function fullName(a, b) {
  let c = a + b;
  return c.length;
}

function zodziuIlgiai(zodis1, zodis2) {
  let pirmoZodzioIlgis = zodis1.length;
  console.log(pirmoZodzioIlgis);
  let antroZodzioIlgis = zodis2.length;
  console.log(antroZodzioIlgis);
  let atsakymas = pirmoZodzioIlgis + antroZodzioIlgis;
  return atsakymas;
  //return zodis1.length + zodis2.length;  kitas variantas
  //return (zodis1+zodis2).length;  dar kitas variantas
}

//9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

//function KokiaRaide();
let abecele = [
  "A",
  "Ą",
  "B",
  "C",
  "Č",
  "D",
  "E",
  "Ę",
  "Ė",
  "F",
  "G",
  "H",
  "I",
  "Į",
  "Y",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "Š",
  "T",
  "U",
  "Ų",
  "Ū",
  "V",
  "Z",
  "Ž",
];

//return abecele(2);

///extra1) Sukurti funkciją, kuri atlieka Fizz Buzz testą nuo-iki duotųjų parametrų.

//extra2) Sukurti funkciją, kuri randa visus pirminius skaičius iki nurodyto parametro.

// ROKO ATSAKYMAI

// 1
function sudetis(nr1, nr2) {
  if (typeof nr1 === "number" && typeof nr2 === "number") {
    let atsakymas = nr1 + nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function atimtis(nr1, nr2) {
  if (typeof nr1 === "number" && typeof nr2 === "number") {
    let atsakymas = nr1 - nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function dalyba(nr1, nr2) {
  if (typeof nr1 === "number" && typeof nr2 === "number") {
    let atsakymas = nr1 / nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function daugyba(nr1, nr2) {
  if (typeof nr1 === "number" && typeof nr2 === "number") {
    let atsakymas = nr1 * nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

// 2
function firstToLast(array) {
  for (let element of array) {
    console.log(element);
  }
}
// 3
function lastToFirst(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  // array.reverse();
  // for(let element of array){
  //   console.log(element);
  // }
}

// 4
let zodziuMasyvas = ["labas", "ate", "zodis", "kaliause"];
// function zodziuRikiavimas (a, b) { return a.localeCompare(b); }
// function rikiuojameZodiuMasyva(masyvas){
//   return masyvas.sort(zodziuRikiavimas);
// }
function rikiuojameZodiuMasyva(masyvas) {
  return masyvas.sort((a, b) => a.localeCompare(b));
}

// 5
let task2 = [1, 5, 6, 7, 8, 1, 4, 6, 1, 6, -4, 654, -1, 46541, -441, 1];
function rikiuojameSkaiciusMasyva(arr1) {
  return arr1.sort(function (a, b) {
    return a - b;
  });
}

// 6
function nuoIki(nr1, nr2) {
  let arrayToReturn = [];
  for (let i = nr1; i <= nr2; i++) {
    arrayToReturn.push(i);
  }
  return arrayToReturn;
}

// 7
function nuoIkiZingsniu(step, nr1, nr2) {
  let arrayToReturn = [];
  for (let i = nr1; i <= nr2; i += step) {
    // i = i + step
    arrayToReturn.push(i);
  }
  return arrayToReturn;
}
