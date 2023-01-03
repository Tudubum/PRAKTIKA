//          Kintamieji
/*

    Objektas - Object - {raktas:reiksme, raktas1:reiksme1...}
    Masyvas  - Array - (reiskme, reiksme, reiksme...)

    Tiek objektas, tiek masyvas yra konteineriniai kintamieji. tai reiskia, kad ju viduje galima talpinti keleta reiksmiu(gali buti skirtingu kintamuju tipu).

*/

//          Objektai
{
  console.groupCollapsed("Objektai");
  let vardas = "Rokas";
  let pavarde = "Banaitis";
  let amzius = 26;
  let vedes = false;
  console.log(vardas);
  console.log(pavarde);
  console.log(amzius);
  console.log(vedes);

  let vardas1 = "Petras";
  let pavarde1 = "Petrauskas";
  let amzius1 = 55;
  let vedes1 = true;

  let zmogus = {
    vardas: "Rokas",
    pavarde: "Banaitis",
    amzius: 26,
    vedes: false,
    gyvenamojiVieta: {
      miestas: "Kaunas",
      salis: "Lietuva",
      zemynas: "Europa",
      planeta: "Zeme",
    },
  };
  console.log(zmogus.vardas);
  console.log(zmogus.pavarde);
  console.log(zmogus.amzius);
  console.log(zmogus.vedes);

  let zmogus1 = {
    vardas: "Petras",
    pavarde: "Petrauskas",
    amzius: 55,
    vedes: false,
  };
  console.log(zmogus1.vardas);
  console.log(zmogus1.pavarde);
  console.log(zmogus1.amzius);
  console.log(zmogus1.vedes);

  console.log(zmogus1);
  zmogus1.vardas = "Jonas";
  zmogus1.ugis = 180;
  console.log(zmogus1);

  console.log(zmogus.gyvenamojiVieta.miestas);

  console.groupEnd("objektai");
}
//          Masyvai
{
  console.groupCollapsed("Masyvai");
  let menesis1 = "Sausis";
  let menesis2 = "Vasaris";
  let menesis3 = "Kovas";
  let menesis4 = "Balandis";
  let menesis5 = "Geguze";
  //....
  /*let menesiai = {
    pirmas: "sausis",
    antras: "Vasaris",
    trecias: "Kovas",
  }; */
  let menesiai = [
    "Sausis",
    "Vasaris",
    "Kovas",
    "Balandis",
    "Geguze",
    "Birzelis",
    "Liepa",
    "Rugpjutis",
    "Rugsejis",
    "Spalis",
    "Lapkritis",
    "Gruodis",
  ];
  console.log(menesiai[10]);

  let masyvas = [
    654,
    12,
    555.555,
    [1, 2, 3, 4, "5", false],
    false,
    true,
    "zodziai",
    "haha",
  ];
  console.log(masyvas);
  console.log(masyvas[3][0]);
  masyvas[1] = "pakeistas";
  masyvas.push("push?"); // push - prie masyvo galo prideda nauja reiksme.
  masyvas.unshift("unshift?"); // unshift - prie masyvo pradzios prideda nauja reiksme.
  console.log(masyvas);
  var masyvoMetoduBnadymai = masyvas.pop(); // pop -  isima paskutini duomeni/elementa is masyvo galo (ir laiko savyje).
  console.log(masyvas);
  masyvas.shift(); // shift - issima pirma masyvo elementa.(ir laiko/talpina savyje)
  masyvoMetoduBnadymai = masyvas.shift();
  masyvoMetoduBnadymai = masyvas.length; // length - masyvo ilgio duomuo(number).
  console.log(masyvas);
  console.log(masyvas[0]);
  console.log(masyvas);
  console.log(masyvas[masyvas.length - 1]);

  console.groupEnd("Masyvai");
}

//          Masyvai ir Objektai

{
  console.groupCollapsed("Objektai ir Masyvai");
  let mixed1 = {
    vardas: "Rokas",
    amzius: 26,
    vedes: false,
    gyvenamojiVieta: {
      miestas: "Kaunas",
      salis: "Lietuva",
      zemynas: "Europa",
    },
    pomegiai: ["Sportas", "Zaidimai", "Technologijos", "Gitara"],
    //            0           1          2               3
  };
  console.log(
    mixed1.vardas + " turi " + mixed1.pomegiai.length + " pomegiai. "
  );
  console.log(
    "Vienas is " +
      mixed1.vardas +
      " pomegiu yra " +
      mixed1.pomegiai[Math.floor(Math.random() * mixed1.pomegiai.length)] +
      "."
  );

  let mixed2 = [
    {
      vardas: "Rokas",
      amzius: 26,
    },
    {
      vardas: "Petras",
      amzius: 50,
    },
    {
      vardas: "Leonas",
      amzius: 15,
    },
  ];
  console.groupEnd("Objektai ir Masyvai");
}

//          Salygos
{
  /*
If Else
Switch
Ternary(max trumpintas if else)
    salyga ? jeiguTiesa : jeiguMelas - paprastas if else
OR /  AND - galimas if salygu trumpinimas
*/
}
//          Ciklai

/*
    for
    while

    do while
    for in
    for of

    Ciklai - yra kartojami nurodyti veiksmai, tol kol yra tekinama pateikta salyga.
*/

//      for

/*for(iteratorius,salyga(suIteratoriumi),iteratoriausKitimas){
    //veiksmai

    For naudojamas tuomet, kada gali apskaiciuoti/zinai kiek sykiu kartosis ciklas.

}*/
let masyvas = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(masyvas);
for (let i = 0; i < masyvas.length; i++) {
  console.log(masyvas[i]);
}

/*  for (let i = 1; i <= 10; i++) {
      console.log(i);
    }*/

///     While
/*
    while(salyga){
    //veiksmai

    while ciklas naudojamas tuomet, kai negali apskaiciuoti, kiek kartu reikes vykdyti cikla.
} 
*/
{
  let masyvas = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  while (masyvas.length) {
    console.log(masyvas.shift());
  }
  console.log(masyvas);
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
///////////////----------------------------////////////
{
  if (10 > 5) {
    console.log("tiesa");
  } else {
    console.log("melas");
  }
  10 > 5 ? console.log("tiesa") : console.log("melas");

  /*let number = prompt("Iveskite skaiciu");*/
  let number = 10;
  if (number > 20) {
    console.log("20 -> infinity");
  } else if (number <= 0) {
    console.log(" -infinity -> 0");
  } else {
    console.log("0 -> 20");
  }
  number > 20
    ? console.log("20 -> infinity")
    : number <= 0
    ? console.log("-infinity -> 0")
    : console.log("0 -> 20");
}

// 1 uzduotis 1.1
// 1) Susikurti kintamuosius su reikšmingais pavadinimais ir informacija.
// 1.1) 5 string.
// 1.2) 5 int.
// 1.3) 3 bool.

let vardas = "Agne";
let amzius = 35;
let vedes = true;
let ArTuriAugintini = false;

let vardas1 = "Juste";
let amzius1 = 34;
let vedes1 = true;
let ArTuriAugintini1 = false;

let vardas2 = "Laurynas";
let amzius2 = 32;
let vedes2 = false;
let ArTuriAugintini2 = false;

let vardas3 = "Ruta";
let amzius3 = 30;
let vedes3 = true;
let ArTuriAugintini3 = false;

let vardas4 = "Giedre";
let amzius4 = 27;
let vedes4 = false;
let ArTuriAugintini4 = true;

console.log("Agne");

// 2 uzduotis
// 2) Susikurti konteinerius ir juos užpildyti reikšmėmis (bent po 1 kiekvieno tipo).
  // 2.1) Masyvas bent 6 ilgio. []
  // 2.2) Objektas bent 6 ilgio. {}
// objektas
let seimosNarys3 = {
  vardas: "Ruta",
  amzius: 30,
  vedes: true,
  ArTuriAugintini: false,
  miestas: "Panevezys",
  profesija: "Asmenine trenere",
};

console.log(seimosNarys3);

//masyvas
let miestai = ["Panevezys", "Vilnius", "Kaunas", "Londonas", "Trakai"];
console.log(miestai);

// 3 uzduotis
//masyvas-masyvas
let miestai1 = [
  "Panevezys",
  [
    "Rozyno seniunija",
    "Parko seniunija",
    "Kniaudiskiu seniunija",
    "Sodu seniunija",
  ],
  "Vilnius",
  "Kaunas",
  "Londonas",
  "Trakai",
];
console.log(miestai1[0]);
console.log(miestai1[1][1]);

// masyvas-objektas

let seimosNarysX = {
  vardas: "Ruta",
  amzius: 30,
  vedes: true,
  ArTuriAugintini: false,
  miestas: "Panevezys",
  profesija: [
    "asmenine trenere",
    "dizainere",
    "finansai",
    "architektas",
    "Xxx",
  ],
};

/*// 3.2
console.log(masyvas2_3[0], masyvas2_3[1], masyvas2_3[3][1]);*/

// 5 uzduotis
// 5) Parašyti if'ą, kuris tikrintų kokia tavo lytis (tikrinimas turi vykti iš object kintamojo (object kintamasis turi turėti bent 4 kintamuosiuos savo viduje)).
//Naudoti:
  //1) let/const - kurti kintamuosius (objektą/us)
  //optional) prompt - vartotojas priskirtų objektui reikšmes
  //2) alert/console.log - grąžintų atsakymus.
  //3) if/elseIf/else - kas be ko... (arrrrrrrrrba ternary)

let apieMane = {
  manoVardas: "Giedre",
  manoPavarde: "Deveikyte",
  manoAmzius: "27",
  manoLytis: prompt("kokia tavo lytis - moteris ar vyras?"),
};

if (apieMane.manoLytis == "moteris") {
  console.log("Tu esi moteris");
} else if (apieMane.manoLytis == "vyras") {
  console.log("Tu esi vyras");
}

// 6) Parašyti ciklą, kuris sukurtų 50 random skaičių (nuo 0 iki 100) masyvą.

{
  let masyvas = [];
  for (let i = 0; i < 50; i++) {
    masyvas.push(Math.floor(Math.random() * 101));
  }
  console.log(masyvas);

  // 7) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.

  for (let i = 0; i <= masyvas.length - 1; i += 3) {
    console.log(masyvas[i]);
  }

  // 8) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.

  for (let i = masyvas.length - 1; i >= 0; i -= 2) {
    console.log(masyvas[i]);
  }

  // 9) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė didesnė negu 54.

  console.groupCollapsed('Task 9')

for (let i = 0; i <= skaiciuMasyvas - 1; i++) {
  if (skaiciuMasyvas[i] > 54){
    console.log(skaiciuMasyvas[i]);
  }
}
console.groupEnd();

  // 10) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2ciklai)

  console.groupCollapsed('task10 Lyginiai')

  let skaiciuMasyvas5 = [];
  let i = 0;
  while ( i <= 100 ) {
    skaiciuMasyvas5.push(Math.floor(Math.random()*101));
   console.log(i);
   i = i + 2;
  }
  console.groupEnd();

  // Nelyginiai
console.groupCollapsed('task10 Nelyginiai')
for (let i = 1; i < 100; i += 1) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.groupEnd();


}
