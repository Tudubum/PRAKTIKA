/*
Youtube kanalai:
  Mosh - https://www.youtube.com/@programmingwithmosh (gera info)
  TraversyMedia - https://www.youtube.com/@TraversyMedia (gera info)
  Net Ninja - https://www.youtube.com/@NetNinja (geri tutorials)
  WebDev - https://www.youtube.com/@WebDevSimplified (ne tik JS)
  FreeCodeCamp - https://www.youtube.com/@freecodecamp (apie labai daug ką)
  DaveGray - https://www.youtube.com/@DaveGrayTeachesCode ()
  DevDreamer - https://www.youtube.com/@DevDreamer ( trumpi video - nesunku dėmesį išlaikyti)
  CodingTrain - https://www.youtube.com/@TheCodingTrain (sekamos naujienos ir labai faini projektai, minusas - not beginners friendly)
  FireShip - https://www.youtube.com/@Fireship (fun stuff :) )
  CodeBullet - https://www.youtube.com/@CodeBullet (purely for fun)
  KevinPowell - https://www.youtube.com/@KevinPowell (HTML/CSS)

*/

//          OOP Principai
/*
    Inkapsuliacija - objekto vidiniai duomenys yra slepiami ir jais galima manipuliuoti tik naudojant objekto viesus metodus.

    Abstrakcija - objekto nepriklausomumas nuo isoriniu sudedamuju daliu.

    Paveldejimas - viena klase gali buti kitos klases konkretizacija.

    Polimorfizmas - galimybe dirbti su objektu nezinant jo tiklaus tipo ir strukturos.
*/

class Gyvunas{   // # padaro privatu ir tiesiogiai negalima kreiptis
    #pavadinimas;
    #kojuKiekis;
    constructor(pavadinimas, kojuKiekis){
        this.#pavadinimas = pavadinimas;
        this.#kojuKiekis = kojuKiekis;
    }
    getPavadinimas(){ // naudoti get pradzioje
        return this.#pavadinimas;
    }
    setPavadinimas(naujasPavadinimas){ //naudoti set pradzioje bendrai priimtina
        this.#pavadinimas = naujasPavadinimas
    }
    getKojuKiekis(){
        return this.#kojuKiekis;
    }
    setKojuKiekis(naujasKojuKiekis){
        this.#kojuKiekis = naujasKojuKiekis;
    }
}

class Kate extends Gyvunas {
    constructor(kojuKiekis){
        super('Kate', kojuKiekis); // kreipiuosi i extends elemento konstruktoriu su siais nustatymais.
    }

    #balsoVariantai = ['Miauuu...', 'Psshhtt...', 'MurMur...', 'Rawr..']
    #balsoVariantas(){
        return this.#balsoVariantai[Math.floor(Math.random()*this.#balsoVariantai.length)]
    }
    balsas(){
        return this.#balsoVariantas();
    }
    valgo (){
        return 'Valgo kaciu maista, peles..'
    }
}

class Voras extends Gyvunas{
    constructor(kojuKiekis){
        super('Voras', kojuKiekis);

    }
    gasdina (){
        return "Buu MUHAHAHAH";
    }
    valgo(){
        return 'Valgo muses...';
    }
}


let gyvunas = [
    new Gyvunas('Suo', 4),
    new Kate(4),
    new Voras(8)
];



// Susikurti (h1-h6) Antraštės Klasę su tekstu, atributais
class Heading{
    constructor(props){
      this.props = props;
      return this.render();
    }
  
    render = () =>{
      this.htmlElement = document.createElement(`h${this.props.dydis}`);
      this.textElement = document.createTextNode(this.props.tekstas);   
      this.htmlElement.append(this.textElement);
  
      if(this.props.atributai){
        // jeigu atributai yra objektas
        Object.keys(this.props.atributai).forEach(raktas => {
          this.htmlElement.setAttribute(raktas, this.props.atributai[raktas]);
        });
  
        // jeigu atributai yra masyvai masyve
        // this.props.atributai.forEach(atributas => {
        //   this.htmlElement.setAttribute(atributas[0], atributas[1]);
        // });
      }
  
      return this.htmlElement;
    }
  }
  
  let antraste1 = new Heading({
    dydis: '1',
    tekstas: 'DARBAS SU ROKU',
    atributai: {
      class: 'klasesVardas darVienaKlase',
      id: 'kazkoksId',
      style: 'color:red'
    }
    // atributai: [ 
    //   ['class', 'klasesVardas darVienaKlase'],
    //   ['id', 'kazkoksId'],
    //   ['style', 'color:red']
    // ]
  });
  document.querySelector("body").append(antraste1);
  document.querySelector("body").append(new Heading({
    dydis:'5',
    tekstas:'Labas rytas',
    // atributai: [
    //   ['style', 'font-size: 50px']
    // ]
    atributai: {
      style: 'font-size:50px'
    }
  }));
  document.querySelector("body").append(new Heading({
    dydis:'6',
    tekstas:'mažiukas'
  }));