//          Ciklai
/*
    do while - bent viena syki butu paleistas ciklas
    for of - suka cikla per masyva
    for in - suka cikla per objekta

    array iterations
*/
// do while(pirma daro paskui galvoja)
{
  console.groupCollapsed("while");
  let i = 1;
  /*while (i < 10) {
  console.log("veiksmai");
  i++;
}
*/

  do {
    console.log("veiksmai");
    i++;
  } while (i > 10);
  console.groupEnd();
}

// for in
{
  console.groupCollapsed("forIn");
  let objektas = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  for (let raktas in objektas) {
    console.log(raktas, objektas[raktas]);
  }
  console.groupEnd();
}

// for of

/*(tikrina nuo pradzios iki galo visa masyva. Negali tikrinti tik nuo galo pvz)*/
{
  let masyvas = [5, 8, 9, 4, 1, false, false, true, "hallo", 46, 1, 5, 4];
  /*for(let i=0, i < masyvas.length; i ++){
  }
  */
  for (let element of masyvas) {
    console.log(element);
    typeof element === "number" ? console.log(element) : null;
    /* if(typeof(element) === "number"){
        console.log(element);
    }*/
  }
}

// forEach
{
  let masyvas = [5, 8, 9, 4, 1, false, false, true, "hallo", 46, 1, 5, 4];
  masyvas.forEach((element) => {
    console.log(element);
  });
}

//              FUNKCIJOS
/*
    Funkcija - veiksmu seka, kuri yra vykdoma tik tuomet, kai i ta funkcija yra kreipiamasi.
    Parametrai/Argumentai - duomenys, perduodami funkcijai jos iskvietimo metu, su kuriais funkcijos viduje bus atliekami kazkokie veiksmai.
    Return - funkcija
*/

function hello(vardas) {
  console.log("Hello" + vardas);
}

function sudetis(nr1, nr2) {
  console.log("why not");
  if (typeof nr1 === "number" && typeof nr2 === "number") {
    let atsakymas = nr1 + nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
  console.log("not happening");
}

function kiekStringuMasyve(array) {
  let kiek = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      kiek++;
    }
  }
  return kiek++;
}

//      MASYVU METODAI
/*
    pop()       -  isima is masyvo galo, modifikuoja
    shift()     - isima is masyvo pradzios, modifikuoja
    push()      - prideda prie masyvo galo, modifikuoja
    unshift()   - prideda prie masyvo pradzios, modifikuoja

    reverse()   - apsuka masyva. Ji modifikuoja.
    slice(nr1,nr2)  - paima nuo nr1(imtinai) iki(neimtinai) nr2 masyvo elementus. NE MODIFIKUODAMAS MASYVO.
    splice(nr1, nr2, nr3, nr4, nr5...) - nuo nr1 trina nr2 kieki elementu ir nr1 vietoje iterpia nr3, nr4, n5 ir t.t.. elementus. MODIFOKUOJA MASYVA.
    arr1.concat(arr2.arr3.arr4...) - prie array1 masyvo prijungia arr2,arr3,arr4... masyvus. NEMODIFIKUOJA.
    sort() - isrikiuoja masyva abeceles tvarka.
    skaiciu problema sprendziame su function(a,b)(return a-b) ikelta i sort skliaustelius. Zodziu problema sprendziama su function (a,b) {return a.localComapre(b)} ikelta i sort skliaustelius.
*/

let masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gabaliukas = masyvas.slice(3, 6);
let iskirptas = masyvas[3];
masyvas.splice(3, 1, 9, 8, 7);
let sujungtas = masyvas.concat(
  ["labas", "aš", "esu", "naujas", "masyvas"],
  [false, 0, "undeeeef", "null", 90, 1110, 654]
);
sujungtas.sort(function (a, b) {
  return a - b;
});
let zodziuMasyvas = ["labas", "aš", "esu", "naujas", "masyvas"];
/*sujungtas.sort(function (a, b) {
  return a.localeCompare(b);
});*/
