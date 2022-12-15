//      KLASĖS

/*
    Klase yra objektu kurimo sablonas.
    Klase privalo buti aprasyta pries i ja kreipiantis.
    Klasiu pavadinimai rasomi is DIDZIUJU raidziu.
    Klases konstruktoriuje "this" yra privalomas.
*/

/*      syntax

    class KlasesPav{
        constructor(par1, par2){
            this.par1 = par1;
            this.par2 = par2;
        }
        methods...
    }

*/

// kuriame objektu masyva be klasiu:
let asmenysBeKlasiu = [
    {
        vardas: "Rokas",
        amzius: 26,
        turiVaiku: false
    },{
        vardas: "Benas",
        amzius: 31,
        turiVaiku: true
    }
]

// kuriame objektu masyva su klasemis
{
class Asmuo{
    constructor(a, b, c){
        //this.vardas = a.split(' ')[0];
        //this.pavarde = a.split(' ')[1];
        // jeigu butu pvz "Vardenis Pavardenis" ir man reikia tik vardo ar pavardes.
        this.vardas = a;  // this nusako, kad butent sios klases
        this.amzius = b;
        this.turiVaiku = c;
} 
    pasisveikinaSu(vardas) {
        return this.vardas + ' pasisveikina su ' + vardas;
    }
}
let asmenysSuKlasemis = [
    new Asmuo("Rokas Banaitis", 26, false),
    new Asmuo("Petras Petrauskas", 50, true)
]
console.log(asmenysSuKlasemis);
console.log(asmenysSuKlasemis[0].pasisveikinaSu('Jonas')); //.pasisveikinaSu(yra metodas)
}

class Ledai{
    constructor(pavadinimas,skonis, kaina){
        this.pavadinimas = pavadinimas;
        this.skonis = skonis;
        this.kaina = kaina;
    }
    kainosKeitimas(keitimasProcentais){ //neigiamas % - kaina mazinama
    return this.kaina + this.kaina * keitimasProcentais/100;
    //pvz:  0.60 + 0.60 * -37/100
}
}

const leduMasyvas = [
    new Ledai("Dadu", "Karamelinis", 1.2),
    new Ledai("Tirpuko", "avietinis", 0.49),
    new Ledai("Nykstukas", "vanilinis", 1.5)
];

console.log(leduMasyvas);

console.groupCollapsed('Ledu pavadinimai');
    leduMasyvas.forEach(ledas => console.log(ledas.pavadinimas));


console.groupEnd();


console.groupCollapsed('Ledu skoniai');
leduMasyvas.forEach(ledas => console.log(ledas.skonis));
console.groupEnd();


console.groupCollapsed('Ledu kainos');
leduMasyvas.forEach(ledas => console.log(ledas.kaina.toFixed(2)));

console.groupEnd();

console.groupCollapsed('Ledu kainos su 37% nuolaida');
leduMasyvas.forEach(ledas => console.log(ledas.kainosKeitimas(-37).toFixed(2)));

console.groupEnd();


