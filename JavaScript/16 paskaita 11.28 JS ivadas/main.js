/*console.log("Labas rytas JS'e"); */

//   Kintamieji

/* 
    string          -  zodinis kintamasis rasomas kabutese ''/ "" / ``;
    number          -  skaitinis kintamasis
    boolean/bool    -  loginis kintamasis (true/false)


    null            - tuscias(kai yra paimama reiksme ir jis jos nebeturi)
    undefined      - neapibreztas(neaisku kas turi buti)
    NaN             - Not a Number


    array           - masyvas
    object          - objektas

----------------------------------------------------------------------

    var/let/const   - kintamuju ribu nurodymai
    nameOrSmth      - kintamojo vardas
    value           - kintamojo reiksme

*/

let manoVardas0 = "Rokas";
let manoVardas1 = "Rokas";
let manoVardas2 = `Rokas`;

let manoAmzius0 = 26;
let manoAmzius1 = 26.2; //jeigu norime skaiciaus su kabeleliu, tai rasome taska vietoje kablelio//
let manoAmzius2 = 26 + 0.2;

let vedesIrTuriVaiku = false;
let neVedesIrNeTuriVaiku = true;

// -------- task1 ----------

let string1 = "Giedre";
let string2 = "Ruta";
let string3 = "Laurynas";
let string4 = "Justina";
let string5 = "Agne";

let number1 = 5;
let number2 = 4;
let number3 = 3;
let number4 = 2;
let number5 = 1;

let bool1 = true;
let bool2 = false;

// ----------------------

//          Operatoriai
/*
            BASIC ONES:

    + --- sudetis
    - --- atimtis
    * --- daugyba
    / --- dalyba
    ** --- kelimas laipsniu(saknies traukimas)
    % --- liekanos radimas

            Assignment:

    = --- lygybe


            Shortcuts:

    ++ --- didejimas vienetu(kazkas = kazkas + 1)
    -- --- mazejimas vienetu(kazkas = kazkas - 1)
    += --- pridejimas (kazkas = kazkas + kazkiek)
    -= --- atemimas (kazkas = kazkas - kazkiek)
    *= --- dauginimas (kazkas = kazkas *= kazkiek)
    /= --- dalinimas (kazkas = kazkas /= kazkiek)
    %= --- liekanos radimas (kazkas = kazkas %= kazkiek)
    **= --- laipsnio kelimas / saknies traukimas

            Palyginimo(comparison) operatoriai:

    ==    --- ar lygu duomenys?
    ===   --- ar lygu duomenys ir tipas?
    !==   --- daugiau negu
    >     --- daugiau negu
    <     --- maziau negu
    >=    --- daugiau arba lygu
    <=    --- maziau arba lygu

            Loginiai(logical) operatoriai:

    !  --- ne(apvercia reiksme) (NOT)
    && --- ir                   (AND)
    || --- arba                 (OR)

            Tipo(Type) operatoriai:

    typeof     --- tikrina tipa
*/

//-------- TASK 2 --------
{
  console.log("number1+number2", number1 + number2);
  console.log(number1 - number2);
  console.log(number1 * number2);
  console.log(number1 / number2);
  console.log(number1 ** number2);
  console.log(number1 % number2);
  console.log("number5++", ++number5);
  console.log(--number4);

  console.log("string1+string2", string1 + string2); // tik sitas yra viable
  console.log("string1-string2", string1 - string2);

  // Naudojant matematinius operatorius su boolean tipo kintamaisiais, boolean tipo kintamieji yra verciami i 0 ir 1. Falsse -> 0; True -> 1;
  console.log("bool1+bool2", bool1 + bool2);
  console.log("bool1-bool2", bool1 - bool2);
  console.log("bool1*bool2", bool1 * bool2);
  console.log("bool1/bool2", bool1 / bool2);
  console.log("bool1++, ++bool1");

  console.log("string3+number1", string3 + number1); // tik sitas galimas
  console.log("string3-number1", string3 - number1);
  console.log("sting3*number1", string3 * number1);
  console.log(string3 / number1);
  console.log(string3 ** number1);
  console.log(string3 % number1);

  console.log("number3+bool1", number3 + bool1);
  console.log("string4+bool1", string4 + bool1);
}

//-------- TASK 3 --------

{
  console.log(++number2);
  console.log(--number2);
  console.log((number1 += number2));
  console.log((number1 -= number2));
  console.log((number1 *= number2));
  console.log((number1 /= number2));
  console.log((number1 %= number2));
  console.log((number1 **= number2));
}

//-------- TASK 4 -----
//Panaudoti visus palyginimo operatorius su number tipo kintamaisiais
{
  /*let number1 = 5;
let number2 = 4;
let number3 = 3;
let number4 = 2;
let number5 = 1;
*/

  console.log(number4 == number5);
  console.log(number4 === number5);
  console.log(number1 === number1);
  console.log(number5 !== number3);
  console.log(number4 > number5);
  console.log(number4 < number5);
  console.log(number2 >= number2);
  console.log(number3 <= number4);
}

//         SALYGOS

/* 
                    If Else

    if - pradine salyga
    else if - papildoma salyga, kuri tikrinama jeigu anksciau esanti/cios salyga/os grazino false.
    else if...
    else - vykdomas jeigu visos auksciau esancios salygos grazino false.

                    Nesting

    Salygos viduje, rasoma kita salyga.

*/

let amzius = 15;
if (amzius >= 18) {
  console.log("Esi pilnametis.");
  if (amzius < 90) {
    console.log("Esi pensininkas");
  } else {
    console.log("Esi darbingo amziaus pilietis");
  }
}

//--------- TASK 5 -------

let ArturiTeises = 25;
let ArTuriAutomobili = false;
if (ArturiTeises > 18) {
  console.log("Tu turi vairuotojo teises");
}
if (ArTuriAutomobili === true) {
  console.log("Gali vazineti");
} else {
  console.log("Neturi auto, neturi ko vairuoti");
}

if (ArturiTeises < 18) {
  console.log("Tu neturi vairuotojo teisiu");
}

// ARBA VARIANTAS

/*let arTuriVairuotojoTeises = true;
let arTuriAutomobili = true;
let ArEsiBlaivas = true;
if (arTuriVairuotojoTeises === true) {
  console.log("Vairuotojo teises turi.");
  if (arTuriAutomobili === true && arEsiBlaivas === true) {
    console.log("Gali sesti ir vairuoti.");
  } else if (arTuriAutomobili === false) {
    console.log("Neturi auto - neturi ko vairuoti");
  } else {
    console.log("Nesi blaivas - nera ko vairuoti.");
  } /*else {
    console.log('Vairuotojo teisiu neturi.');
  }*/

//        AND ir OR
/* 
    Naudojant &&(and) tikrinama ar abejose pusese yra tiesa. Jeigu bent vienoje piseje yra melas - grazina mela. Jeigu kaireje puseje yra melas - desines puses net netikirna/nevykdo.
    Naudojant ||(or) tikrinama ar bent vienoje puseje yra tiesa. Jeigu bent vienoje puseje yra tiesa - grazina tiesa. Jeigu kaireje puseje yra tiesa - desines puses net netikrina/nevykdo.
*/

let amziuss = 91;
if (amziuss >= 18) {
  console.log("Esi pilnametis.");
  if (amziuss > 90 && amziuss < 130) {
    console.log("Esi darbingo amziaus pilietis.");
  } else {
    console.log("Kaip tu dar gyvs?");
  }
}

/*if (5 == "5" && typeof "5" == typeof "5") {
  console.log("lygu");
} else {
  console.log("nelygu");
}
if (true || true) {
  console.log("tiesa");
} else {
  console.log("melas");
}
*/

//              Truthy ir Falsy
/*
    truthy -  true   | not 0 number | 'string'          | array/masyvas| objektas | funkcija
    falsy -    false | 0            | '' (empty string) | undefined | null | Nan
*/
/*
if (0) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//          Switch

let switchKintamasis = "apelsinas";
switch (switchKintamasis) {
  case "apelsinas":
    console.log("apelsinai yra vaisiai");
    break;
  case "bulve":
    console.log("Bulve yra darzove...");
}

let mesgtamiausiaSpalva = "geltona";
switch (mesgtamiausiaSpalva) {
  case "geltona":
  case "raudona":
    console.log("Tu megsti ryskias spalva.");
    break;
  case "melyna":
  case "ruda":
    console.log("Tu megsti tamsias spalvas");
    break;
}

let miestas = prompt("Is kurio miesto esate?");
switch (miestas) {
  case "Kaunas":
    console.log("Kaunas yra Lietuvos sirdis, jei Vilnieciai neuzpyks");
    break;
  case "Vilnius":
    console.log(
      "Vilnius yra Lietuvos sostine, shh Kaunieciai su savo laikinaja"
    );
    break;
  case "Klaipeda":
    console.log("Klaipeda vienintelis miestas, kuris turi uosta");
  default:
    window.alert("Nera tokio miesto!");
}
*/

// 8 uzduotis
let miestas = prompt("Labas, is kokio miesto esate?");
if (miestas) {
  console.log("Vilnius");
  window.alert("Vilnius turi labai grazu operos ir baleto teatra");
} else {
  console.log("Klaipeda");
  window.alert("Turite nuostabu papludimi");
}

// 9 uzduotis

let menesis = prompt("Koks dabar menuo?");
switch (menesis) {
  case "Sausis":
    window.alert("Tai dabar ziema pas jus!");
    break;
  case "Vasaris":
    window.alert("Tai dabar ziema pas jus!");
    break;
  case "Kovas":
    window.alert("O jau pavasaris pas jus!");
    break;
  case "Balandis":
    window.alert("O pavasaris pas jus!");
    break;
  case "Geguze":
    window.alert("Dar pavasaris pas Jus");
    break;
  case "Birzelis":
    window.alert("O vasara jau pas jus!");
    break;
  case "Liepa":
    window.alert("O tai dar vasara pas jus!");
    break;
  case "Rugpjutis":
    window.alert("Paskutinis vasaros menuo!");
    break;
  case "Rugsejis":
    window.alert("O jau ruduo atejo!");
    break;
  case "Spalis":
    window.alert("Rudenelis");
    break;
  case "Lapkritis":
    window.alert("Dar ruduo pas jus");
    break;
  case "Gruodis":
    window.alert("O jau ziema! Kaledos!");
    break;
}
