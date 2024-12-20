const searchForm = document.getElementById('search-form')
const similarMoviesSection = document.getElementById('similar-movies')
const errorMsg = document.getElementById('error-msg')

searchForm.addEventListener('submit', (e) => {
    const movieName = document.getElementById('search-Movie').value
    e.preventDefault()

    let similarUrl = `/search?movieTitle=${movieName}`

    console.log(similarUrl)

    fetch(similarUrl).then(response => {
        response.json().then(data => {
            console.log(data)

            if(data.error) {

            }

            data.movieInfo.forEach((movie) => {
                console.log(movie)
                const MovieName = document.createElement('p')
                MovieName.textContent = movie.title

                similarMoviesSection.appendChild(movieName)
            });
        })
    })
})