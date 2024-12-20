const { json, response } = require('express')
const request = require('postman-request')

const similarMovies = (movieId, callback) => {
    // const url = 'https://pastebin.com/raw/tUHZBu0W'
    const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(movieId)}/similar?api_key=07ff533f5dfa9c2eb8c928c528199051`
    

    request({url , json:true}, (error, response) => {
            if (error) {
                callback('unable to connect to server', undefined)
            } else if (response.body.status_message) {
                callback('unable to find movies, try another search', undefined)
            } else {
                const movieTitles = [];

                for(let i = 0; i < response.body.results.length; i++) {
                    movieTitles.push({title: response.body.results[i].title, img: response.body.results[i].poster_path})
                }
                
                callback(undefined, movieTitles)
            }
    })
}

// similarMovie(809, (error, titles) => {
//     if(error) {
//         console.log(error)
//     } else {
//         titles.forEach((title, index) => {
//             console.log(`${index + 1}: ${title}`)
//         });
//     }
// })

module.exports = similarMovies;