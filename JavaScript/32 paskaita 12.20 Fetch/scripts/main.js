//          JSON
/*
    JSON - Java Script Object Notation 
    JSON skiriasi nuo Object tuo, kad: 
        JSON raktiniai zodziai kabutese.
        JSON ignoruoja funkcijas.
*/

const object = {
    raktas: 'reiksme',
    tiesa: true,
    skaicius: 543,
    masyvas: ['labas','ate'],
    objektas: {hi: 'ha', du:2},
    funkcija(zodis) {
        return `Pasakei ${zodis}`
    }
}

const objectAsJSON = JSON.stringify(object)


//          Fetch
/*syntax
    fetch('url')
        .then(response = response.text() (arba - ||) JSON.prase(response))
        response.json()
*/
/*
    Fetch skirtas pasiimti duomenis is nurodyto failo ar url.
*/

// kad iskaityti duomenis naudojam parse

fetch('./data/data.txt')
    .then(response => response.text())  // then grazina response info
    .then(data => {
        console.log(data);
        let dataAsArray = data.split('\n'); // \n - cia eilutes luzis
        console.log(dataAsArray);
       // dataAsArray = dataAsArray.map(item => item.split(' '));
       //console.log(dataArray);
       dataAsArray.forEach(line => {
        document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>`
       });
})

//function daryti(info){
//    return JSON.prase(info);  // paaiskinimas is kur virsuje JSON.parse
//}



// 1.2 uzduotis
/*
// movies.json
fetch('./data/movies.json')
  .then(res => res.json())
  .then(data => {
    console.log(data[0].actors.map(actor => `<li>${actor}</li>`).toString().replaceAll(',',''));
    data.forEach(movie => {
      document.querySelector('#uzduotisJson').innerHTML += `
        <div class="movie">
          <h1>${movie.name}</h1>
          <img src="${movie.poster}" alt="${movie.name} movie poster">
          <span>Movie length: ${Math.floor(movie.length/60)} hours ${movie.length%60} minutes</span>
          <ul>
            ${
              movie.actors
                .map(actor => `<li>${actor}</li>`)
                .toString()
                .replaceAll(',', '')
            }
          <ul>
        </div>
      `
    });
});
*/

// random user
fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => console.log(data))

   
   
// task 2
fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {
    console.log(data);
 

  const person = data.results[0];

  const Fullname = person.name.first + ' ' + person.name.last;
  const age = person.dob.age;
  const address = person.location.country;
  const email = person.email;
  
document.querySelector('.card').innerHTML = `
    <img src="${person.picture.medium}" alt="Profile picture" />
    <p>${Fullname}</p>
    <p>${age} year</p>
    <p>${address}</p>
    <p>${email}</p>
  `;

})
