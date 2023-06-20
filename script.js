
let lasCoders = document.getElementById('lasCoders')

let cargaPeliculas = () => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX")
        .then((response) => {

            const peliculas = response.data.results

            peliculas.forEach(pelicula => {
                const cartel = `
                    <div>
                        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3>${pelicula.title}</h3>
                    </div>`;

                lasCoders.innerHTML += cartel;
            });

        })
        .catch(err => {
            console.log(err)
        })


}

cargaPeliculas()