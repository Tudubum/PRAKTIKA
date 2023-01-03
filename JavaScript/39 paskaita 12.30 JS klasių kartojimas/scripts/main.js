/*      syntax

    class KlasesPav{
        constructor(par1, par2){
            this.par1 = par1;
            this.par2 = par2;
        }
        methods...
    }

*/


//1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" atributus.
//1.1) Sukurkite papildomą atributą "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
        this.helloCar = `Labas, čia ${this.name}, kurios pagaminimo metai ${this.year}`;
    }
    //metodas

    kiekMasinaiMetu () {
        let date = new Date().getFullYear();
        return "Mašinai yra " + (date - this.year) + " metai";
    }
}

let masinos = [
    new Car("Audi", 2015),
    new Car("Volkswagen", 2020),
    new Car("Subaru", 2018)
]
console.log(masinos)

//1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').



//2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" atributus.
//2.1) Sukurkite papildomą atributą "color" ir priskirkite jam randomly parinktą spalvą.
//2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
//2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

//3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" atributus.
//3.1) Sukurkite papildomą atributą "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
//3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

//4) Sukurkite klasę vardu "3D_Rectangle" ir duokite jai "width", "height" ir "depth" atributus.
//4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.