const movies = document.querySelector('#movies');

// Gauname formos elementą, skirtą pridėti filmą
const addMovieForm = document.querySelector('#addMovieForm');

// Gauname formos laukelius, skirtus įvesti filmo informaciją
const title = document.querySelector('#title');
const actors = document.querySelector('#actors');
const duration = document.querySelector('#duration');
const year = document.querySelector('#year');
const image = document.querySelector('#image');

// Nustatome API URL
const url = 'http://localhost:3000/movies/';

// Gauname visų filmų sąrašą
const getMovies = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Išvalome filmų sąrašo elementą
      movies.innerHTML = '';

      // Iteruojame per filmus ir pridedame juos prie filmų sąrašo elemento
      data.forEach((movie) => {
        movies.innerHTML += `
                <div class="card">
                  <img src="${movie.image}">
                  <div class="card-body">
                    <h2 class="movieTitle">${movie.title}</h2>
                    <p class="movieYear">${movie.year}</p>
                    <p class="movieDuration">${movie.duration} min</p>
                    <p class="movieActors">${movie.actors}</p>
                    <div class="insideCardBtn">
                      <button class="btn_delete" onclick="deleteMovie(${movie.id})">Delete</button>
                      <button class="btn_edit" onclick="updateMovie(${movie.id})">Edit</button>
                    </div> 
                  </div> 
                </div>
              `;
      });
    });
};

// Pridedame naują filmą ---- A D D
const addMovie = (e) => {
  // Nutraukiame standartinį formos siuntimą
  e.preventDefault();

  // Sukuriame filmo objektą iš formos laukelių reikšmių
  const movie = {
    title: title.value,
    year: year.value,
    duration: duration.value,
    actors: actors.value,
    image: image.value,
  };

  // Siunčiame POST užklausą API, kad pridėtume naują filmą
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Atnaujiname filmų sąrašą
      getMovies();
    });
};

// Ištriname filmą   - - - - - - - -  D E L E T E
const deleteMovie = (id) => {
  // Siunčiame DELETE užklausą API, kad ištrintume filmą pagal ID
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Atnaujiname filmų sąrašą
      getMovies();
    });
};


// UPDATE neveikia, arba veikia atvirksciai

const updateMovie = (id) => {
  // sukuriam nauja objekta
  const movie = {
    title: title.value,
    year: year.value,
    duration: duration.value,
    actors: actors.value,
    image: image.value,
  };

  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })
    .then((response) => {
      if (response.ok) {
        getMovies();
        alert('Movie updated successfully!');
      } else {
        alert('Error updating movie');
      }
    })
};

// Gauname visų filmų sąrašą prisijungus
getMovies();

// Pridedame event listener formai, kad galėtume pridėti filmą
addMovieForm.addEventListener('submit', addMovie);