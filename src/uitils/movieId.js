const { error } = require('console')
const { response } = require('express')
const request = require('postman-request')
const { json } = require('stream/consumers')

const search = (name, callback) => {
    const url = 'https://pastebin.com/raw/tUHZBu0W'

    //const url = `https://api.themoviedb.org/3/search/movie?query=shrek&api_key=07ff533f5dfa9c2eb8c928c528199051`

    request({url, json:true}, (error, response) => {
        
    })


    
}