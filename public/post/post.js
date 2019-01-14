let postBtn = document.querySelector('#postBtn')
let movie_title_input = document.querySelector('#movieTitle')
let movie_year_released_input = document.querySelector('#releaseDate')
let movie_genre_input = document.querySelector('#movieGenre')
let movie_picture_input = document.querySelector('#moviePicture')

postBtn.addEventListener('click', (event) => {
  console.log('movie_title_input.value', movie_title_input.value);
  console.log('movie_title_input.value', movie_year_released_input.value);
  console.log('movie_title_input.value', movie_genre_input.value);
  console.log('movie_title_input.value', movie_picture_input.value);
  console.log('event', event);
    event.preventDefault();
    axios.post('https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar2', {
      movie_title: movie_title_input.value,
      movie_year_released: movie_year_released_input.value,
      movie_genre: movie_genre_input.value,
      movie_picture: movie_picture_input.value
    })
    .then(function (response) {
      console.log(response);
      getList()
    })
    .catch(function (error) {
      console.log(error);
    });
  })