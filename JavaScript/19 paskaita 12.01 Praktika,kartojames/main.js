//8) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petrauskas" => 16).

// giedre deveikyte => 15

function fullName(a, b) {
  let c = a + b;
  return c.length;
}

/*function nameNumber(vardas,pavarde) {
    let numberOfLetters = ((vardas+pavarde).length);
    return numberOfLetters;
    }
  */

//9) Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

/*function getLetter(abecele) {
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

  return abecele.string(number);
}
*/
function abecelesRaide(kelinta) {
  const alphabet = [
    //nusistatome kaip konstanta - const
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
  return alphabet[kelinta - 1];
}
//10) Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

function trysParametrai(sk1, sk2, operator) {
  switch (operator) {
    case "sum":
      console.log(sk1 + sk2);
      break;
    case "sub":
      console.log(sk1 - sk2);
      break;
    case "div":
      console.log(sk1 / sk2);
      break;
    case "multi":
      console.log(sk1 * sk2);
  }
}

//11) Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function randomNumber_1_To_10() {
  return Math.ceil(Math.random() * 10); // nes skaicius iki 10 todel *10
}

function squareNumber() {
  // tusti parametrai, reisia nepriima jokio parametro ir kreipiasi i kita funkcija
  return randomNumber_1_To_10() ** 2;
  //return Math.pow(sk,2);
}

console.log(squareNumber());

//extra0) Sukurti funkciją, kuri pirmojo parametro (masyvo) elementus sudėtų į kito parametro (masyvo irgi) vidų toje vietoje, kokio ilgio yra antrasis parametras (tuo momentu) tol kol antrasis parametras liks tuščias. (a=[1,2,3,4,5,6,7]b=[a,b,c]; a=[1,2,3,a,4,5,6,7]b=[b,c]; a=[1,2,b,3,a,4,5,6,7]b=[c]; a=[1,c,2,b,3,a,4,5,6,7]b=[])

let pirminisMasyvas = [1, 2, 3, 4, 5, 6, 7];
let antrinisMasyvas = ["a", "b", "c"];
do {
  pirminisMasyvas.splice(antrinisMasyvas.length, 0, antrinisMasyvas.pop());
  console.log(pirminisMasyvas);
} while (antrinisMasyvas.length > 0);

// Roko variantas zemiau

let masyvas1 = [1, 2, 3, 4, 5, 6, 7];
let masyvas2 = ["a", "b", "c"];
function fancyMasyvuJungimas(arr1, arr2) {
  while (arr2.length) {
    //arr2 nes mes funkcijos viduje
    arr1.splice(arr2.length, 0, arr2.shift()); //idesime kokio ilgio yra arr2
    // 0 reiskia nieko netrindamas, pagal splice funcija
  }
  return arr1;
}
console.log(fancyMasyvuJungimas(masyvas1, masyvas2));

// kitas variantas zemiau
while (arr2.length) {
  let koksSiuoMetuIlgis = arr2.length;
  let kaiIdeti = arr2.shift();
  arr1.splice(koksSiuoMetuIlgis, 0, kaiIdeti);
}
return arr1;
