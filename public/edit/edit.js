let updateBtn = document.querySelector('#update')
let movie_id_up = document.querySelector('#id_choice')
let movie_title_input_up = document.querySelector('#movieTitle_id')
let movie_year_released_input_up = document.querySelector('#releaseDate_id')
let movie_genre_input_up = document.querySelector('#movieGenre_id')
let movie_picture_input_up = document.querySelector('#moviePicture_id')


updateBtn.addEventListener('click', (event) => {

    console.log('event', event);
      event.preventDefault();
      axios.put('https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar4', {
        movie_id: movie_id_up.value,
        movie_title: movie_title_input_up.value,
        movie_year_released: movie_year_released_input_up.value,
        movie_genre: movie_genre_input_up.value,
        movie_picture: movie_picture_input_up.value
      })
      .then(function (response) {
        console.log(response);
        getList()
      })
      .catch(function (error) {
        console.log(error);
      });
    })