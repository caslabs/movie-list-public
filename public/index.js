function getList() {
    axios.get('https://bewc7jy4y8.execute-api.us-west-2.amazonaws.com/dev/JarJerLar')
    .then(function (response) {
      var MovieData =  response.data.message.rows;
      MovieData.forEach(function (movie) {
        console.log(`ID: ${movie.movie_id} NAME:  ${movie.movie_title}`);
      }); 
    })
    .catch(function (error) {
      console.log(error);
    });
  }

getList()