//import Heading from './Heading.js';
//              KOMPONENTAI

//      UL/OL - task1
{
    class List{             //sukuriame List klase
      constructor(props){
        this.props = props; // props - properties
        return this.render();  //render gali buti bet kas, bet iprasta naudoti render. Atvaizduoti atsakyma
      }
  
      render = () => {
        this.htmlElement = document.createElement(this.props.type);
  
        Object.keys(this.props.attributes).forEach (attribute => {      // The keys of an object is the list of property names
          this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
        });
  
        this.props.listItems.forEach(listItem => {
          this.li = document.createElement('li');
          this.liTextNode = document.createTextNode(listItem.text);
          this.li.append(this.liTextNode);
          Object.keys(listItem.attributes).forEach(attribute => {
            this.li.setAttribute(attribute, listItem.attributes[attribute]);
          });
          this.htmlElement.append(this.li);
        });
  
        return this.htmlElement;
      }
    }
  
    let list = new List({
      type: 'ul',
      attributes: {
        class: 'lightThemeList',
        id: 'superUnorderedList'
      },
      listItems: [
        {
          text: 'list item tekstas1',
          attributes: {
            class: 'listItem',
            style: 'color: yellow'
          }
        },{
          text: 'list item tekstas2',
          attributes: {
            class: 'listItem',
            style: 'color: green'
          }
        },{
          text: 'list item tekstas3',
          attributes: {
            class: 'listItem',
            style: 'color: red'
          }
        }
      ]
    });
  
    document.querySelector("body").append(list);
  }
  
  //      SELECT  - task 2
{
          class Select{
            constructor(props){
              this.props = props;
              return this.render();
            }
        
            render = () => {
              this.htmlElement = document.createElement(this.props.type);
        
              Object.keys(this.props.attributes).forEach(attribute => {
                this.htmlElement.setAttribute(attribute, this.props.attributes[attribute]);
              });
        
              this.props.options.forEach(option => {
                this.option = document.createElement('option');
                this.optionTextNode = document.createTextNode(option.text);
                this.option.append(this.optionTextNode);
                Object.keys(option.attributes).forEach(attribute => {
                  this.option.setAttribute(attribute, option.attributes[attribute]);
                });
                this.htmlElement.append(this.option);
              });
        
              return this.htmlElement;
            }
          }
        
          let select = new Select({
            type: 'select',
            attributes: {
              class: 'FavoriteSelect',
              id: 'selection',
            },
            options: [
              {
                text: 'option tekstas1',
                attributes: {
                  class: 'option',
                  style: 'color: pink;'
                }
              },
              {
                text: 'option tekstas2',
                attributes: {
                  class: 'option',
                  style: 'color: red;'

                }
              },
              {
                text: 'option tekstas3',
                attributes: {
                  class: 'option',
                  style: 'color: violet;'

                }},
            ]
          });
          document.querySelector("body").append(select);
        }

///
  
  
  

//          TASK3 - table
{
//3) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori). THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).  (kas be ko, galimybė suteikti tekstus ir atributus). P.S. Stilizuoti :)

class Table {               // sukuriame klase Table
    constructor(props) {
      this.props = props;
      return this.render();
    }
  
    render() {
      this.htmlElement = document.createElement(this.props.type);
      Object.keys(this.props.attributes).forEach(attributes => {
        this.htmlElement.setAttribute(attributes, this.props.attributes[attributes])
      });

  // thead lipdom

      this.thead = document.createElement('thead'); //sukuriame thead elementa
      this.tr = document.createElement('tr');       // i thead sukuriam tr elementa
      Object.keys(this.props.thead).forEach(th => {  // ir pritaikom kiekvienam objektui
        this.th = document.createElement('th'); // sukuriam th
        this.thTextNode = document.createTextNode(this.props.thead[th]); //th elemente sukuriam textnoda
        this.th.append(this.thTextNode); //apend - after the last child of the Element.
        this.tr.append(this.th); //i tr idedamas th
  
      });
  
      this.thead.append(this.tr); // i thead iterpiamas tr
      this.htmlElement.append(this.thead); // ir galiausiia visas pries tai sukurtas thead keliauja i html

      /////tbody dabar lipdom
      this.tbody = document.createElement('tbody'); //sukuriam tbody
      this.props.tbody.forEach(tr => { 
        this.tr = document.createElement('tr');// kuris sukurs tr
        Object.keys(tr).forEach(td => {// pritaikom kieknam objektui
          this.td = document.createElement('td'); //tuomet sukuriam td
          this.tdTextNode = document.createTextNode(tr[td]);// bei td elemente vel sukuriam text node
          this.td.append(this.tdTextNode); //i td prijungiam text node
          this.tr.append(this.td); // i tr pridedam visus td
        });

        this.tbody.append(this.tr); // i body idedam visa sukurta tr
      });
      this.htmlElement.append(this.tbody);// i html pridedam visa sukurta tbody
      return this.htmlElement; // ir grazinam visa sukurta elementa
    } }
  
  let table = new Table({ ///kuriam table contenta
    type: 'table',
    attributes: {
      class: 'table',
      id: 'table',
      style: 'color: black;'
    },
    thead: {
      th1: 'Vardas',
      th2: 'Pavarde',
      th3: 'Amžius',
      th4: 'Ar turi vaikų?'
    },
    tbody: [{
        td1: 'Rokas',
        td2: 'Banaitis',
        td3: '26',
        td4: 'Ne'
      }, {
        td1: 'Barbora',
        td2: 'Maximyte',
        td3: '18',
        td4: 'Ne'
      }, {
        td1: 'Petras',
        td2: 'Petrauskas',
        td3: '62',
        td4: 'Taip'
      }, {
        td1: 'Valentinas',
        td2: 'Du',
        td3: '33',
        td4: 'Ne'
  }]
});
  
  document.querySelector('body').append(table);
}

//              MODULIAI
{
/*
  Kitų JS failų importavimas ir naudojimas
    import ka from 'isKur'; - faile kuriame norime naudoti importus (main.js)
    type="module" - nusirodyti atributą "type" su nustatymu "module" JS failo prijungime HTML'e.
    export default something(){}; 'isKur' faile reikia nurodyti ką jis eksportuoja.
  Galima rašyti tiek export default, tiek export;
    export default - numatytasis eksportas, kurį priimsi rašydamas - import anyNameIWant from 'exportFile.js'. Vardas, kurį nurodai neprivalo sutapti su export default vardu esančiu exportFile.js. Visviena bus eksportuojamas vienas vienintelis elementas, kuris turi default prierašą.
    export - paprastas eksporas, kurį'iuos priimsi rašydamas - import { exportedName, exportedName2 } from 'exportFile.js'. Priimsi būtent tuos elementus, kurių vardus parašei ir kurie yra paprasti export'ai. Priimti paprastus eksportus galima kokiais tik nori pavadinimais naudojant "as" prierašą: import { exportedName as pirmas, exportedName2 as antras } from 'exportFile.js'.
*/
let antraste = new H({
    dydis:'5',
    tekstas:'Labas rytas',
    atributai: {
      style: 'font-size: 50px'
    }
  });
  console.log(antraste);
  
  helloWorld();
  noMorning();
  }
  //              Duomenų saugojimas vartotojo dalyje
  {
  //  cookie
  document.cookie = `vardas=kazkoks; expires=${new Date('2022 12 17')}`;
  document.cookie = `kitas=kazkoks; expires=${new Date('2022 12 17')}`;
  document.cookie = `vardas=kitoks; expires=${new Date('2022 12 17')}`;
  
  // session storage
  document.querySelector('body').addEventListener('click', () => {
    sessionStorage.setItem('vardas', 'Rokas');
    sessionStorage.setItem('pavarde', 'Banaitis');
    sessionStorage.setItem('lvlOfTired', '30');
  });
  // local storage
  document.querySelector('body').addEventListener('click', () => {
    localStorage.setItem('vardas', 'Rokas');
    localStorage.setItem('pavarde', 'Banaitis');
  
    // localStorage.clear(); // išvalo visą storage
    console.log(localStorage.key(0));
    console.log(localStorage.getItem(localStorage.key(0)));
    localStorage.removeItem(localStorage.key(0));
  });
}