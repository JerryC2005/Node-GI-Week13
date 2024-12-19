//where modules will be imported into
const path = require('path')
const express = require('express')
const search = require('./uitils/movieId')

// var where express function will be stored
const app = express()
//what port the hosted website will give us will give us
const port = process.env.PORT || 3000

//define paths for the express
const publicDirPath = path.join(__dirname, '../public/html');

// setting express settings
app.set('view engine', 'html')

// setup directory to serve
app.use(express.static(publicDirPath))

app.get('/', (req, res) => {
    res.render('index', )
})

app.get('/search', (req, res) => {
    res.send( {

    })
})

//tell server to start
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})