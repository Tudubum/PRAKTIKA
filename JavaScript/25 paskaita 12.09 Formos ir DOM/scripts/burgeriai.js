// ForEach, Filter, Reduce ir Map:
  // 1) Susikurti bent 10 ilgio masyvą kaip nurodyta ir tolimesnėse užduotyse naudoti šitą masyvą. ( 1 ilgio pavyzdys: [{id:0, name:"Burgeris", inStock:true, primeCost:0.3, cost:1}]

  let meniu = [
    {id:0, name:"Burgeris", inStock:true, primeCost:2, cost:5},
    {id:1, name:"Burgeris_2", inStock:true, primeCost:2, cost:5},
    {id:2, name:"Burgeris_3", inStock:true, primeCost:2, cost:5},
    {id:3, name:"Burgeris_4", inStock:true, primeCost:2, cost:5},
    {id:4, name:"Burgeris_5", inStock:true, primeCost:2, cost:5},
    {id:5, name:"Pzza", inStock:true, primeCost:3, cost:7},
    {id:6, name:"Pizza_2", inStock:true, primeCost:0.3, cost:7},
    {id:7, name:"Pizza_3", inStock:true, primeCost:0.3, cost:7},
    {id:8, name:"Drink", inStock:true, primeCost:0.3, cost:2},
    {id:9, name:"Drink_2", inStock:false, primeCost:0.3, cost:2}
];

  // 2) Naudojant forEach - išvesti masyvą į konsolę.
console.groupCollapsed("--TASK2-- su forEach - išvesti masyvą į konsolę--")

  let extra2 = (meniu) => meniu.forEach(element => console.log(element));
  console.log(extra2(meniu))

  console.groupEnd();

  // 3) Naudojant forEach - išvesti tik masyvo vardus ir kainas į konsolę.
  console.groupCollapsed("--TASK3-- su forEach isvesti tik vardus ir kainas--")
  
  let extra3 = (meniu) => meniu.forEach(element=>console.log(element.name + ": " + element.cost));
  console.log(extra3(meniu));

  console.groupEnd();

  // 4) Išfiltruoti (for{if{}}) tuos masyvo elementus, kurie yra inStock (inStock yra true) ir išsaugoti prafiltruotą masyvą naujame kintamajame ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).

console.groupCollapsed("--TASK4--true masyvas--")
  let extra4 = (meniu) => {
    let trueMasyvas = [];
    for (let i = 0; i < meniu.length; i++){
      if(meniu[2][0] === true){
        trueMasyvas.push(meniu[i])
      }  
    }console.log(trueMasyvas);
  }
console.groupEnd();

  //   4.1) Naudojant map ir 4'tos užduoties masyvą - sukurti naują masyvą, kuriame būtų name ir suskaičiuotas bei išsaugotas profit (cost-primeCost) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).
  //   4.2) Susikurti masyvą, kuriame būtų išrašyti masyvo (1'ojo) vardai ir jų kiekiai (sukurti užsakymo masyvą) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (galima sukurti kelis užsakymus)
  //   4.3) Suskaičiuoti kiek pelno suteiks 4.2 masyvo užsakymas ir tai atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)). (arba užsakymai, jei 4.2 dalyje sukūrėte keletą užsakymų)
  //   4.4) Naudojant map - padaryti naują masyvą, kuriame būtų atvaizduotas užsakymas (kiek kokių dalykų buvo užsakyta) ir jo kaina (prie kiekvieno dalyko jo kaina(jei buvo keli, tai jų suma) ir pačiame gale bendra kaina) ir jį atvaizduoti konsolėje (nereik iteruoti nieko (tiesiog įdėti patį masyvą į konsolę)).



