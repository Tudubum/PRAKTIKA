/*
  Po CRUD pristatymų
  Tęsiame kartojimą
  Masyvų iteracinių metodų kartojimas
*/

/*
  JS array filter_reduce.txt
  JS findIndex, find, some, every, includes.txt
*/


//3) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

function createArray(A, B, C) {
    let array = []; // sukuriame tuscia masyva
  
    for (let i = 0; i < A; i++) { // sukam cikla tol kol masyvas bus norimo ilgio
      array.push(Math.floor(Math.random() * (C - B + 1)) + B); // math naudojame gauti random skaicius
      // push naudojame, kad gauta random skaiciu pridetume i array masyva
    }
  
    return array;
  }
  
  let array = createArray(8, 1, 30);
  console.log(array)

//4) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).

function createWordArray(stringArray) { //split() naudojama string'ui padalinti į dalis pagal nurodytą separatorių (čia separatorių naudosime tarpą).
    return stringArray.split(' ').map(word => word.trim());
    // map naudojama masyvui peržiūrėti ir kiekvienam jo elementui atlikti nurodytą veiksmą.
    // trim trina white space(tarpus uz/pries stringa)
  }
  let stringArray = createWordArray('Vilnius yra Lietuvos sostinė');
  console.log(stringArray); 

//5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.

let result = array.filter(array => array % 2 === 0);//filter() funkcija sukuria naują masyvą, kurį sudaro tik tie elementai, kurie patenka į sąlygą, nurodytą funkcijos viduje.

//% operatorius nustato, ar skaičius yra lyginis, tai yra, ar lieka liekana po jo dalybos iš 2. Jei liekana yra 0, tai skaičius yra lyginis.

console.log(result)

//6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.

let result2 = array.filter(array => array % 2 === 1);

console.log(result2)

//7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.

let positiveIntegers = array.filter(number => number > 0 && Math.floor(number) === number);

// Math.floor() funkcija ima skaičių ir grąžina jį į žemesnį sveikąjį skaičių.

console.log(positiveIntegers);

//8) Sukurti funkciją, kuri 3'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).

//A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius.

function filterArray(array, A, B) {
    return array.filter(number => number >= A && number <= B);
    // tikrinam ar skaicius yra didesnis arba lygus A ir ar skaicius yra mazesnis arb lygus B.
  }
  
  console.log(filterArray(array, 14, 24));

//9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.

let filtruokDidziasias = stringArray.filter(stringArray => stringArray.charAt(0) === stringArray[0].toUpperCase());

console.log(filtruokDidziasias)

//10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.

let filtruokMazasias = stringArray.filter(stringArray => stringArray.charAt(0) === stringArray[0].toLowerCase());

console.log(filtruokMazasias);

//11) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.

let filtruokPagalRaide = (stringArray, raide) => // pateikiam du parametrus, vienas tai masyvas per kuri eis funckija, o kitas raide, kurios ieskos tame masyve
{
    return stringArray.filter(stringArray => stringArray.charAt(0) === raide);
}

console.log(filtruokPagalRaide(stringArray, "L"));

//12) Sukurti funkciją, kuri iš 4'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.

let filtruokPaskutineRaide = (stringArray, raide) => // pateikiam du parametrus, vienas tai masyvas per kuri eis funckija, o kitas raide, kurios ieskos tame masyve
{
    return stringArray.filter(stringArray => stringArray.charAt(stringArray.length -1) === raide); 
}

console.log(filtruokPaskutineRaide(stringArray, "ė"));

//13) Naudojant reduce metodą suskaičiuoti 5'tos užduoties masyvo bendrą sumą.
// let result

let bendraSuma = result.reduce((sum, number) =>
     sum + number);
console.log(bendraSuma)

//14) Naudojant reduce metodą suskaičiuoti 6'tos užduoties masyvo bendrą sandaugą.
 
let bendraSandauga = result.reduce((sum, number) =>
     sum * number);
console.log(bendraSandauga)


// task1 - B U R G E R I N E
//1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

let meniu = [
    {id:0, name:"Burgeris", inStock:false, primeCost:2, cost:5},
    {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
    {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
    {id:3, name:"Burgeris_4", inStock:false, primeCost:2, cost:5},
    {id:4, name:"Burgeris_5", inStock:true, primeCost:2, cost:5},
    {id:5, name:"Pzza", inStock:false, primeCost:3, cost:7},
    {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
    {id:7, name:"Pizza_3", inStock:false, primeCost:0.3, cost:7},
    {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
    {id:9, name:"Drink_2", inStock:false, primeCost:0.3, cost:2}
  ];

//2) Naudojant 1 užduoties masyvą:
//  2.1) Naudojant filter - išfiltruoti tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje.

let inStockMasyvas = meniu.filter(item => item.inStock === true);

console.log(inStockMasyvas)

//  2.2) Naudojant map ir 2.1 masyvą - sukurti naują masyvą, kuriame būtų suskaičiuotas ir išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje.

let profitArray = inStockMasyvas.map(item => {
    return {
        profit: item.cost - item.primeCost
    }
})

console.log(profitArray)

//  2.3) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje. (galima sukurti kelis užsakymus)

// nepadarytas 
let meniuWithQuantity = meniu.map(item => {
  return {
    name: item.name,
    quantity: item.quantity || 0
  }
});

console.log(meniuWithQuantity)

//  2.4) Naudojant reduce - suskaičiuoti kiek pelno suteiks 2.3 masyvo užsakymas ir tai atvaizduoti konsolėje. (arba užsakymai, jei 2.3 dalyje sukūrėte keletą užsakymų)
//  2.5) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje.


//        findIndex, find, some, every, includes


//1) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didenis už A (A - funkcijos parametras skaičius).

function SuraskDidesni(array, A) {
  return array.findIndex(item => item > A);
}

let arraySurask = [1, 2, 3, 4, 5];
let A = 3;
console.log(SuraskDidesni(arraySurask, A));


//2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

function SuraskMazesni(array,A){
  return array.findIndex(item => item < A);
}

console.log(SuraskMazesni(arraySurask, A))

//3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.


let suraskMazaja = arraySurask => arraySurask.findIndex(element => element[0].isLowerCase())

console.log(suraskMazaja(arraySurask))

//4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.

//5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

//6++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

//7) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didenis už A (A - funkcijos parametras skaičius).

//8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

//9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.

//10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.

//11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

//12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

//13) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didenis už A (A - funkcijos parametras skaičius).

//14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).

//15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.

//16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.

//17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

//18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).

//19) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didenis už A (A - funkcijos parametras skaičius).

//20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).

//21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.

//22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.

//23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).

//24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).   

//25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.

//26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.
 