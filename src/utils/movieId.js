const request = require('postman-request')

const search = (name, callback) => {
    // const url = 'https://pastebin.com/raw/tUHZBu0W'

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(name)}&api_key=07ff533f5dfa9c2eb8c928c528199051`

    request({url, json:true}, (error, response) => {
        if(error) {
            callback('unable to connect to server', undefined)
        } else if (response.body.results.length === 0) {
            callback('unable to find movie. Please try again', undefined)
        } else {
            callback(undefined, {
                movieId: response.body.results[0].id
            })
        }
        
    })
}

// search('', (error, data) => {
//     if(error) {
//         return console.log(error)
//     }
//     console.log(data)
// })

module.exports = search;