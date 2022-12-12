//2) Sukurti formą, į kurią įvedus stulpelių ir eilučių skaičių - būtų sukurta tokio dydžio lentelė.

const form = document.querySelector('form');               // Selektinam form
const table = document.createElement('table');             // sukuriam table, nes neturim
const tbody = document.createElement('tbody');             // tuomet sukuriam table body
table.appendChild(tbody);                                  // prie table pridedame tbody
document.body.appendChild(table);                          // i DOM body pridedam elementa table

form.addEventListener('submit', (e) => {                   // paspaudus form dalyje submit 
  e.preventDefault();                           // atsaukiam submit(jei butu koks url)
  const rows = form.elements.rows.value;           // paimam ivesta reiksme row inpute
  const columns = form.elements.columns.value;     // paimam ivesta reiksme columns inpute
  //tbody.innerHTML = '';                            
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      const td = document.createElement('td');
      //td.textContent = `${'turinys'+ i} - ${j + 'hello'}`;    // cia su td.textContent gali  pateikti turini, kiekviename langelyje
      tr.appendChild(td);
    }
    tbody.appendChild(tr); // SUSIGENERUOJA NAUJA LENTELE. tbody kaip naujas elementas
  }
});
