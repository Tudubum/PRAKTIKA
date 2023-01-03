//1) Pasirašyti / susikurti string kintamąjį.

let manoSunsVardas = "Trepsius";

//2) Pasirašyti / susikurti number kintmąjį.

let manoSunsAmzius = 7;

//3) Pasirašyti / susikurti masyvą tik su string kintamaisiais.

let names = [
    "Agne",
   "Justina",
   "Ruta",
   "Konstantina"
]

//4) Pasirašyti / susikurti masyvą tik su number kintamaisiais.

let skaiciuMasyvas = [
    1,
    2,
    3
]

//5) Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.

let mixedArray = [
    "Agne",
    1,
    "Justina",
    2,
    "Ruta",
    3,
    
]
//6) Išvesti pirmąją 1'os užduoties kintamojo raidę.

console.log(manoSunsVardas[0])

//7) Išvesti paskutinę 1'os užduoties kintamojo raidę.

console.log(manoSunsVardas.charAt(manoSunsVardas.length-1));

//8) Išvesti viduriniąją 1'os užduoties kintamojo raidę.




//9) Pasirašyti funkciją, kuri iš jai pateikto string kintamojo išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").

function grazinkRaide(zodis, index){
    return zodis[index -1]; 
}

//10) Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.

if (manoSunsAmzius % 2 == 0){
    console.log('Skaicius lyginis')
} else {
    console.log('Skaicius nelyginis')
}


//11) Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.

/// 10 padariau

//12) Patikrinti ar 2'os užduoties kintamasis yra sveikasis skaičius.

console.log(Number.isInteger(manoSunsAmzius));


//13) Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);

function checkEven(num) {
    if (num % 2 === 0) {
      return "lyginis";
    } else {
      return "nelyginis";
    }
  }
  
  console.log(checkEven(5)); // "nelyginis"
  console.log(checkEven(6)); // "lyginis"

//14) Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.



for ( let i = 0; i < names.length; i++ ){
    if ( names[i].length > 5){
         console.log([names[i]]);
    }
}


//15) Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.

for ( let i = 0; i < names.length; i++ ){
    if ( names[i].length < 8){
         console.log([names[i]]);
    }
}

//16+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.
 console.groupCollapsed("task 16")

function first_letter (names){
for ( let i = 0; i < names.length; i++ ){
    return first_letter(names.charAt(0));
}}

console.groupEnd()
//17+) Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.

//18++) Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")

//19) Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.

//20) Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.

//21+) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.

//22++) Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8], 3, false) => 3)

//23) Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.