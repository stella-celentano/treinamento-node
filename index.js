const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

const MovieRoutes = require('./routes/movie');

app.get('/', function(req, res) {
    res.send('Api works')
})

app.use('/', MovieRoutes)

app.listen(port, function(){
    console.log(`API listen on port ${port}`)
})

module.exports = app
