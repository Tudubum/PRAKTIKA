// TASK 1
//1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus.

//1.1) Sukurkite papildomą parametrą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").

//1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').

console.groupCollapsed("--task1---CARS--")

class Car{
    constructor(name,year){
        this.name = name,
        this.year = year; 
        this.helloCar = `Labas, čia ${this.name}, kurios pagaminimo metai ${this.year}`;
    }
//mettodas
    kiekMasinaiMetu(){
        let date = new Date().getFullYear();
        return "Mašinai yra " + (date - this.year) + " metai";
    }

}

let masinos = [
    new Car("Audi", 2015),
    new Car("Volkswagen", 2020),
    new Car("Subaru", 2018)
]

console.log(masinos);
//console.log(masinos[1].kiekMasinaiMetu());

masinos.forEach(masina => console.log(masina.kiekMasinaiMetu()));


console.groupEnd();

//TASK 2

//2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus.
 // 2.1) Sukurkite papildomą parametrą "color" ir priskirkite jam randomly parinktą spalvą.
  //2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
 // 2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

 console.groupCollapsed("--task2---RECTANGLE--");

 class Rectangle {
    constructor (width, height){
        this.width = width,
        this.height = height;
        this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})` ;
    }
//metodas
area () {
    let plotas = this.width*this.height;
    return plotas;
}
//metodas
perimeter(){
    let perimetras = this.width*2 + this.height*2;
    return perimetras;

}};

let ismatavymuMasyvas = [
    new Rectangle(4,12),
    new Rectangle(2,8),
    new Rectangle(3,9)
];

console.log(this.color);

//pasitikinam 2.2

ismatavymuMasyvas.forEach(staciakampis => console.log(staciakampis.area()));
console.log("-----")

//pasitikrinam 2.3
ismatavymuMasyvas.forEach(staciakampis => console.log(staciakampis.perimeter()));

 console.groupEnd();
 
 // TASK 3

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus.
// 3.1) Sukurkite metodą "coordinates", kuris grąžina "x" ir "y" reikšmes.(x;y)
// 3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

 console.groupCollapsed("--task3---POINT--");

  class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.coordinates = `(${this.x}, ${this.y})`;
    } 

    atstumas(taskas){
        return `Atstumas tarp dviejų taškų yra: ${Math.hypot(this.x-taskas.x,this.y-taskas.y)}`
        // math hypot, tai paima paima du skaicius ir abu atskirai pakelia kvadratu, tuomet juos sudeda. Is sios skaiciu sumos istraukia sakni
      
    }
  }

  let taskas1 = new Point(4,8);
  let taskas2 = new Point(2,8);
  let taskas3 = new Point(6,6);
  let taskas4 = new Point(2,12);

  console.log(taskas1.atstumas(taskas2));
  console.log(taskas3.atstumas(taskas4));

 console.groupEnd();

 // TASK4
 //4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus.
  //4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
  //4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
  //4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.


  console.groupCollapsed("--task4---3D-rectangle--");

  class Rectangle3D{
    constructor(width,height,depth){
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
    //metodas task 4.1 stac.turis = abc;
    volume(){
        let staciakampioTuris = this.width * this.height * this.depth;
        return staciakampioTuris;
    }

    //metodas task 4.2 stac.pavirsiaus plotas = 2*(ab+bc+ac)
    surfaceArea(){
        let pavirsiausPlotas = 2*(this.width*this.height + this.height*this.depth + this.depth*this.width);
        return pavirsiausPlotas
    }
    //metodas 4.3 stac.perimetras = 4*(a + b + c)
    perimeter(){
        let perimetras = 4*(this.width + this.height + this.depth);
        return perimetras;
    }
      //Perimeter of a Square, (P) = 4 × Side units.
  }

  let staciakampioKrastines = [
    new Rectangle3D(2,2,3),
    new Rectangle3D(4,4,6),
    new Rectangle3D(2,4,10),
  ];
//pasitikrinam atsakyma 4.1
  staciakampioKrastines.forEach(staciakampis => console.log(staciakampis.volume()));

  console.log("-------")
  //pasitikrinam atsakyma 4.2
  staciakampioKrastines.forEach(staciakampis => console.log(staciakampis.surfaceArea()));
console.log("--------")
  //pasitikinam atsakyma 4.3
  staciakampioKrastines.forEach(staciakampis => console.log(staciakampis.perimeter()));

  console.groupEnd();

  // TASK 5
  //5+) Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 1-4 užduotims ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))

  console.groupCollapsed("--task5---User Interface-TUSCIA-");

  document.querySelector('#Task_cars')
  .addEventListener("submit", e => {
    e.preventDefault();
  })






  console.groupCollapsed();