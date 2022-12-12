//      DESTRUKTURIZAVIMAS
/*
    Destrukturizavimas - kazkokio elemento/u isskirstymas dalimis.

    array dest... syntax
    let [a, b] = masyvas; (priskirimas paeiliui)
    let [a, , b] = masyvas; (elemento praleidimas)
    let [a, , , , b, ...c] = masyvas;(likusiu elementu priskirimas)
    let [a = 'default value', , b, ...c] = masyvas;(galima priskirti numatytas reiksmes, kurios bus priskirtos tokiu atveju, kai destrukturizuojamame elemente ta reiksme bus undefined)

    object destrukturizavimo syntax - 
    let {a, b} = objektas; (priskyrimas pagal raktinius zodzius).
    let {a, b : kitasB} = objektas; (priskyrimas pagal pervadinta raktini zodi).
    let {a, b :kitasB, ...like} = objektas;(priskyrimas neparinktu elementu).
    let {a, b :kitasB, c = " c default",...like} = objektas;(nerastu raktiniu zodziu default reiksmes nustatymas).

  Video:
    https://youtu.be/UgEaJBz3bjY
    https://youtu.be/NIq3qLaHCIs
    https://youtu.be/-vR3a11Wzt0



*/

// array be destrukturizavimo:
console.groupCollapsed("----destrukturazavimo pavyzdziai")
let masyvas = ['labas',1,2,true,'zodis'];
let a = masyvas[0];
let b = masyvas [1];
console.log(a,b);

// array su destrukturizavimu:
let [z, x] = masyvas;
console.log(z,x);

// function example:
let destrF = (arg1, arg2, ... args) => {
    console.log(arg1, arg2, args);
}
destrF(1,2,3,4,5,6,7,8,9);

// objektas be destrukturizavimo
let objektas = {
    vardas: "Rokas",
    amzius: 26,
    gyvenamojiVieta: {
        salis: "Lietuva",
        miestas: "Kaunas"
    }
}

//let vardas = objektas.vardas;
//let amzius = objektas.amzius;
//console.log(vardas, amzius);

let {vardas, amzius} = objektas;
console.log(vardas, amzius);

let { amzius1, vardas: pilnasVardas, pavarde = 'Pavardenis', ...kitkas} = objektas;
console.log(pilnasVardas, amzius, pavarde, kitkas);

console.groupEnd();

//     Destruktūrizavimo uzduotys:

//1) Naudodami destructuring priskirkite 2 kintamiesiems 2 reikšmes.
console.groupCollapsed('----DESTRUKTURIZAVIMAS TASK 1 ----');
let belekoksMasyvas = [1,2];
let [pirmas, antras] = belekoksMasyvas;
console.log(pirmas, antras);

console.groupEnd();
//2) Naudodami destructuring priskirkite 10 kintamųjų 10 reikšmių.
console.groupCollapsed('----DESTRUKTURIZAVIMAS TASK 2 ----');

let belekoksMasyvas2 = ["As", "atidarau", "duris", "ir", "sninga",1,2,3, false, true];

console.log(belekoksMasyvas2)
console.groupEnd();
//3) Naudodami destructuring priskirkite 3 kintamiesiems 5 reikšmes.

console.groupCollapsed('----DESTRUKTURIZAVIMAS TASK 3 ----');
let belekoksMasyvas3 = ["as","tu", "jis", "ji","mes"];
let [vienas, kitas, ...visas] = belekoksMasyvas3;
console.log(vienas, kitas, visas);
console.groupEnd();

//4) Naudodami destructuring priskirkite 1 kintamajam visas reikšmes išskyrus pirmas 3.

console.groupCollapsed('----DESTRUKTURIZAVIMAS TASK 4 ---- ok');

 let [ , , , ...katasunis] = [1,"lape",2,3,4,5]
console.log( katasunis);

  console.groupEnd();
//5) Naudodami destructuring priskirkite 3 kintamiesiems 3 reikšmes paimtas iš objekto.

console.groupCollapsed('----DESTRUKTURIZAVIMAS TASK 5 ----');

let object = {
    vardas1: 'Gytis',
    amzius01: 30,
    vieta1: 'UK'
  }
  let {vardas1, amzius01, vieta1} = object;
  console.log(vardas1, amzius01, vieta1);

  console.groupEnd();
//6) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
console.groupCollapsed('----DESTRUKTURIZAVIMAS TASK 6 ----');
let katinas = "katinas";
  let suo = "suo";
  [katinas, suo] = [suo, katinas];
  
  console.log("katinas:", katinas);
  console.log("suo:", suo);

  console.groupEnd();


// 2 kintamuju reiksmiu sukeitimas (darem su ROKU)
let a1 = 5;
let b1 = 10;

let saugykla = a1;
a1 = b1;
b1 = saugykla;
console.log(a1,b1);

let a2 = 5; //sitas variantas geras
let b2 = 10;
[a2. b2] = [b2, a2];
console.log(a2, b2);

let a3 = 5;
let b3 = 10;
a3 = a3 + b3; // 15
b3 = a3 - b3; // 5
a3 = a3 - b3; // 10

console.log(a3, b3);


//      Uzduotys SU ROKU be ir su iteraciniais metodais

let zodziuMasyvas = ['labas', 'ate', 'pirmadienis', 'kempiniukas', 'kadaraidarykgerai']
let skaiciuMasyvas = [5,4,56,-8,65,-8,-15,-876,1087]
let misrusMasyvas = ['labas', 'ate', 5,4,-45,-136,34,"pipiriukas", "pasaulis", false]

// TASK1: Parasykite funcija, kuri i konsole isspausdinti pateikto masyvo duomenis (atskirose eilutese)

console.groupCollapsed('---- 1 SU ROKU ----');
let uzd_1_be = (masyvas) => {
  for(let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
  }
}
console.log(uzd_1_be(misrusMasyvas));
console.log('---------------');

let uzd_1_su = (masyvas) => masyvas.forEach(element => console.log(element));
console.log(uzd_1_su(misrusMasyvas));
console.groupEnd();

// TASK2: Parasykite funcija, kuri grazintu masyva, kuriame yra tik skaiciai didesni uz 10 is jai pateikto masyvo.
console.groupCollapsed('-----2 SU ROKU-----');
let uzd_2_be = (masyvas) => {
    let grazinamasMasyvas = [];
    for(let i = 0; i < masyvas.lenghth; i++){
        if(masyvas[i] > 10){
            grazinamasMasyvas.push(masyvas[i]);
        }
    }
    return grazinamasMasyvas;
}
console.log(uzd_2_be(skaiciuMasyvas));
console.log('------------');
let uzd_2_su = (masyvas) => masyvas.filter(element => element > 10);
console.log(uzd_2_su(skaiciuMasyvas));

console.groupEnd();


// TASK3: Parasykite funkcija, kuri patikrintu ar jai paduotame string masyve bent vienas elementas yra zodis yra ilgenis nei 5 raidziu zodis ir grazintu true arba false.
console.groupCollapsed('-----3 SU ROKU----')
let uzd_3_be = (masyvas) => {
    for (let i = 0; i < masyvas.length; i++){
        if(masyvas[i].length > 50){
            return true;
        }
    } return false;
}
console.log(uzd_3_be(zodziuMasyvas));

console.log('---------');

let uzd_3_su = (masyvas) => {
    return masyvas.some(element =>{
        return element.length > 50
    })
}
console.log(uzd_3_su(zodziuMasyvas));
console.groupEnd();

// TASK4: Parasykite funkcija, kuri jai paduotame misriame masyve, rastu ir grazintu kintamaji, kuris yra skaicius.

console.groupCollapsed('-----4 SU ROKU------');
let uzd_4_be = (masyvas) => {
    for (let i = 0; i < masyvas.length; i++){
        if(typeof(masyvas[i]) === 'number'){
            return masyvas[i];

        }
    }
}
console.log(uzd_4_be(misrusMasyvas));

console.log('------------')

let uzd_4_su = (masyvas) =>  masyvas.find(element => typeof(element) === 'number')

console.log(uzd_4_su(misrusMasyvas));
console.groupEnd();



// UZDUOTYS SAVARANKISKAI

// Neiteracinių masyvų metodų užduotys:

// 1) Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
console.groupCollapsed("NEiteraciniai_task1");
let array = ["mama","tetis","sese"];
let task1 = (array) => {
    console.log(array.toString());
  }
  console.log(array.toString());
console.groupEnd();

//2) Parašykite funkciją, kuri atliktų tą patį, ką daro .reverse() metodas. (žinoma nenaudokite reverse)
console.groupCollapsed("NEiteraciniai_task2");

let answerArray =[]

  let task2 = (array) => {
    for (let i = array.length - 1; i >= 0; i--){
       answerArray.push(array[i]);
    }return answerArray([]);
}

console.groupEnd();
//3) Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius. (galima su forEach arba paprastu for)

/*console.groupCollapsed("NEiteraciniai_task3 NESAGAVO");

let numberArray = [1,5,7,-3,99,-20,1001];
let sorted = numberArray.slice().sort(function(a,b){
    return a - b;
})

console.groupEnd();  */

// 4) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.

let mas4_1 = [1,2,3,4,5,6];
let mas4_2 = [4,9,5,8,7,6,1];
let vienodi = (arr1, arr2) => {
    for(let i = 0; i < arr2.length; i++){
        arr1.includes(arr2[i]) ? console.log(arr2[i]): null;
    }
}
vienodi(mas4_1,mas4_2);

//5) Parašykite funkciją, kuriai padavus du masyvus (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose. (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])



//        Iteracinių masyvų metodų užduotys:

//1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę).

console.groupCollapsed("Iteraciniai_1");

const cars = ["BMW", "VW", "Audi"];
let task01 = (masyvas) => masyvas.forEach(element => console.log // atspausina sarasa stulpepiu
(element));
console.log(task01(cars));

console.groupEnd();


//2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

console.groupCollapsed("Iteraciniai_2");

let task02 = (masyvas) => masyvas.forEach((element,i) => console.log(i + ": " + element)); // atspausdina sarasa stulpeliu su eiles tvarka
console.log(task02(cars));

console.groupEnd();


//3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

console.groupCollapsed("Iteraciniai_3");

const vardai = ["Giedre", "GreTa", "inGa","Ineta", "MIgle", "RUTA"];

let NaujasArray = vardai.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());

console.log(NaujasArray);

console.groupEnd();

////4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

console.groupCollapsed("Iteraciniai_4");

const drauguAmzius = [10,12,28,27,26,29,30,35,42,18,2,88];

let naujasMasyvas = drauguAmzius.filter (element => element >= 18 );
console.log(naujasMasyvas);

console.groupEnd();

//5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

console.groupCollapsed("Iteraciniai_5");

const miestaiLietuvos = ["Vilnius", "Panevezys", "Kupiskis", "Alytus", "Kaunas"];
let suraskK = (masyvas) => masyvas.find(element => element.charAt(0) === "K");    
console.log(suraskK(miestaiLietuvos));

console.groupEnd();


//6) Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

console.groupCollapsed("Iteraciniai_6");

let arTurimeMazaja = (masyvas) => masyvas.some(element => element.charAt(0) === element.toLowerCase());
console.log(arTurimeMazaja(miestaiLietuvos));

console.groupEnd();

//7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda iš mažosios, bet ar visi iš didžiosios.

// NESIGAUNA ATSAKYMAS

console.groupCollapsed("Iteraciniai_7-nesigauna");

let arTurimeVisasDidziasas = (masyvas) => masyvas.every(element => element.charAt(0) === element.toUpperCase());
console.log(arTurimeVisasDidziasas(miestaiLietuvos));

console.groupEnd();


