//          lamba/arrow function

// senuoju

function daugyba0(par1,par2){
    return par1*par2;
}

// naujuoju (lamba/arrow)
let daugyba1 = (par1, par2) => par1*par2; // jei uzdedu skliaustelius, tai jau reikia zodzio return

// lambda syntax
/*
    parametras => veiksmas

    (parametras1, parametras2) => veiksmas

    (parametras1, parametras2) => { return veiksmas }

    (parametras1, parametras2) => {
        veiskmas1
        veiksmas2

        return ats;
    }

    Jeigu norime suteikti pavadinima bevardei f-ijai:
    let pavadinimas =  (parametras1, parametras2) => { return veiksmas }
*/
// Lambda yra standartizuotas f-iju uzrasymo budas nuo ESMA 6versijos (2015 metu). Jis yra trumpesnis, patogenis, greitesnis.

// UZDUOTYS - Lambda

//1) Parašykite lambda, kuri grąžina tekstą "Labas!".

let pasisveikinimas = () => "Labas rytas, geros dienos!"
//2) Parašykite lambda, kuri grąžina dviejų kintamųjų sudėtį.

let skaiciavimas = (sk1,sk2) => sk1+sk2;

//3) Parašykite lambda, kuri grąžina jai paduoto teksto ilgį.
let tekstas = (a) => a.length;

//4) Parašykite lambda, kuri grąžina jai paduoto teksto pirmąją raidę.

let grazinkPirmajaRaide = (b) => (b).charAt(0);

//5) Parašykite lambda, kuri grąžina jai paduoto teksto paskutinę raidę.

let grazinkPaskutineRaide = (c) => (c).charAt(c.length-1);

//6) Parašykite lambda, kuri grąžina jai paduoto skaičiaus kvadratą.

let skaiciusKvadratu = (skaicius) => (skaicius)**2;

//7+) Parašykite lambda, kuri iš jai paduoto masyvo išveda visus kintamuosius į konsolę.

let masyvas12 = ["sausis", "vasaris", "kovas", "balandis", "geguze", "birzelis", "liepa", "rugpjutis", " rugsejis", "spalis", "lapkritis", "gruodis"];
let kintamieji = () => console.log(masyvas12)


//8+) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas antrą kintamąjį į konsolę.

let uzd8 = (masyvas) => {
    for(let i = 0; i < masyvas.length; i+=2){
      console.log(masyvas[i]);
    }
}

//9++) Parašykite lambda, kuri iš jai paduoto masyvo išveda kas kažkelintą (nurodytą) kintamąjį į konsolę.


let uzduotis9 = (masyvas1, n) => {
    for(let element of masyvas1){
      console.log(element);
    }
}

//10+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik lyginius skaičius.

let task10 = (masyvas) => {
    for (let i = 0; i <= masyvas.length - 1; i++) {
      if (masyvas[i] % 2 == 0) {
        console.log(masyvas[i] + ' lyginis')
      } else {
      }
    }
  }

//11+) Parašykite lambda, kuri iš jai paduoto skaičių masyvo į konsolę išveda tik nelyginius skaičius. 

let task11 = (masyvas) =>{
    for(let i= 0; i < masyvas.length;i++){
      if(masyvas[i] % 2 === 1){
        console.log(masyvas[i]);
      }
    }
   }

// nelyginio iesko kai % 2 !==0

//12+) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius ilgesnius nei 3 simbolių. 


let zodzMas = ['labas','ate','ąžuolas','ąsotis', 'žodis', 'kanarėlė'];
for ( let i=0; i < zodzMas.length; i++){
    if (zodzMas[i].length > 3){
        console.log(zodzMas[i]);
    }
}

//13++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie prasideda kažkokia (nurodyta) raide.

let task13 = (masyvas, raide) => {
    for ( let i=0; i < masyvas.length; i++){
        if (masyvas[i][0].includes(raide)){
            console.log(masyvas[i])
        }
    }
}


//14+++) Parašykite lambda, kuri iš jai paduoto string masyvo į konsolę išveda tik žodžius, kurie yra ilgesni nei A, bet trumpesni nei B ir prasideda mažąja raide. (A - trumpiausias galimas žodžio ilgis, B - ilgiausias galimas žodžio ilgis).

// nesigavo kazkodel
ivairusMasyvas = ["Lukas", "Igle", "Ula", "Nijole","giedre","Greta","Kristijonas","benediktas"]

let task14 = (ivairusMasyvas, a, b) => {
    for ( i = 0 ; i < ivairusMasyvas.length; i++ ){
         if (ivairusMasyvas[i].length > a && ivairusMasyvas[i].length < b && ivairusMasyvas[i].charAt(0) == ivairusMasyvas.toLowerCase()){
            console.log(ivairusMasyvas[i])
        } else {}
    }
}


//15+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais.

let task15 = (masyvas) =>{
    let masyvasTuscias = [];
    for (let element of masyvas){
        typeof (element) === 'string'?
        masyvasTuscias.push(element): null; // i sita nauja masyva sumeta visus atitinkancius salyga.
    }
    return masyvasTuscias;
}


//16++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie yra ilgesni nei A. (A - trumpiausias galimas žodžio ilgis).

let A = 3;
let mixedArray = ["Hallo", 42, true,[1,2,3], "world"];

let misrusMasyvas = (data, A) => {
  return data.filter(item => {
    if (typeof item === "string"){
      if (item.length >= A){
        return true;
      }
    }
  })
};
console.log(misrusMasyvas(mixedArray, A));

//17++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su string kintamaisiais, kurie prasideda didžiąja raide.

let mixedArray2 = ["Hallo", 42, true,"labas", "world", "Penktadienis"];

let stringasPrasidedaDidziaja = (mixedArray2, didziojiRaide) => {
  for ( i = 0; i < masyvas.length; i ++){
    if (typeof(mixedArray2[i]) === 'string' && mixedArray2.charAt(0) === mixedArray2.toLowerCase);{
      stringasPrasidedaDidziaja.push(masyvas[i]);
       } 
    console.log(stringasPrasidedaDidziaja)
  }
}
//18+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais.

//19+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A. (A - mažiausias galimas skaičius).

//20+) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra mažesni negu A. (A - didžiausias galimas skaičius).

//21++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B. (A - mažiausias galimas skaičius, B - didžiausias galimas skaičius).

//22+++) Parašykite lambda, kuri iš jai paduoto mišraus masyvo grąžina masyvą tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides, tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)



//          Konspektas
/*Math
  Math.properties
    Math.E          -   Euler's number              -   approximately 2.718
    Math.LN10       -   natural logarithm of 10     -   approximately 2.302
    Math.LN2        -   natural logarithm of 2      -   approximately 0.693
    Math.LOG10E     -   base 10 logarithm of e      -   approximately 0.434
    Math.PI         -   PI                          -   approximately 3.14159
    Math.SQRT1_2    -   square root of 1/2          -   approximately 0.707
    Math.SQRT2      -   square root of 2            -   approximately 1.414
  Math.methods()
*/
/*Number
  Number.properties
    Number.EPSILON            -   difference between 1 and the smallest floating point number greater than 1
    Number.MAX_SAFE_INTEGER   -   maximum safe integer in JavaScript (253 – 1)
    Number.MAX_VALUE          -   maximum numeric value representable in JavaScript
    Number.MIN_SAFE_INTEGER   -   minimum safe integer in JavaScript, or -(253 - 1)
    Number.MIN_VALUE          -   smallest positive numeric value representable in JavaScript
    Number.NaN                -   Not-A-Number, which is equivalent to NaN
    Number.NEGATIVE_INFINITY  -   negative Infinity value
    Number.POSITIVE_INFINITY  -   positive Infinity value
  Number.methods()
*/
/*String
  String.properties
    String.length - length of the string in UTF-16 code units
  String.methods()
    
*/


//            Masyvų metodai

// populiarus rikiavimo metodas - bubble sort


/*forEach()   -   Iteruoja per masyvo elementus.
  map()       - grazina nauja kazkaip modifikuota masyva.
  filter()    - grazina nauja masyva, kuris atitinka nurodyta salyga.
  reduce()   - grazina reiksme, kuri susideda is viso masyvo modifikuotu elmentu judnat nuo pradzios iki galo.

  reduceRight() - grazina reiksme, kuri susideda is viso masyvo modifikuotu elmentu judnat nuo galo iki pradzios.
  
  some()   - tikrina ar bent vienas masyvo elementas atitinka kazkokia salyga ir grazina true/false
  every()  -   tikrina ar kiekvienas masyvo elementas atitinka kazkokia salyga ir grazina true/false
  find() . - iesko masyve, salyga atitinkancio pirmojo elemento, ir ji grazina(jeigu neranda - grazina "undefined")
  findIndex()
  findLast() - iesko masyve, salyga atitinkancio paskutinio elemento, ir ji grazina(jeigu neranda - grazina "undefined")
  findLastIndex() - iesko masyve salyga atitinkancio paskutino elemento ir grazina jo indeksa(jeigu neranda - grazina '-1").
  flatMap() - grazina nauja masyva, kuriame visi elementai yra vienu lygmeniu zemiau ir kazkaip galbut papildomai modifikuoti.
*/

// Iteraciniai masyvų metodai
/*
  Iteraciniai masyvų metodai - iteruoja per masyvą ir leidžia atlikti kažkokį veiksmą su kiekviena iteracija.
  Naudinga tose situacijose, kuriose neleidžiamas paprastas for'as arba for of'as.
*/
/*Iteraciniai masyvų metodai

/* syntax for every iteration method except reduce, reduceRight, sort
  someArray.method(element => veiksmai)
  someArray.method((element, iteration) => veiksmai)
  someArray.method((element, iteration, array) => veiksmai)
*/
let mokinimuisiSkirtasMasyvas = [4,6,1,"zodziu",false,false,4,'naujas'];

// forEach - neatlieka kažko extra
/* minusai
  Negali būti sustabdytas (break)
  Negrąžina jokios reikšmės (return)
*/
console.groupCollapsed("forEach");
mokinimuisiSkirtasMasyvas.forEach(elementas => console.log("Masyvo elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija) => console.log("Masyvo "+ iteracija +" elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija, masyvas) => console.log("Masyvo "+ iteracija +" elementas: ", elementas, ';  Sekantis elementas yra: ', masyvas[iteracija+1]));
console.groupEnd();

// map - grąžina naują kažkaip modifikuotą masyvą.
console.groupCollapsed("--map--")
let naujasMasyvas = mokinimuisiSkirtasMasyvas.map(element => element+5);
console.log(naujasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);
console.groupEnd();

// filter - grąžina naują masyvą, kuris atitinka nurodytą sąlygą
console.groupCollapsed("---filter--")
let naujasFiltruotasMasyvas = mokinimuisiSkirtasMasyvas.filter(element => typeof(element) === "string");
console.log(naujasFiltruotasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);
console.groupEnd();
// reduce - grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų judant nuo pradzios iki galo.
// reduceRight - grazina reiksme, kuri susideda is viso masyvo modifikuotu elementu judant nuo galo link pradzios.

/* syntax:
    someArray.reduce((accumulator, element) => veiskmai)
    someArray.reduce((accumulator, element) => veiskmai, initialValue) 
    // cia initialValue, tai reiksme nuo kurios pozicijos pradeti veiksma)pvz. nuo 0. 
*/

console.groupCollapsed("---reduce--")

let reduceintasMasyvas = mokinimuisiSkirtasMasyvas.reduce((bendras, elementas) => {
  console.log(bendras);
  return bendras + ' ' + elementas;
}, 'pradžia');
console.log(reduceintasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);
console.groupEnd();
