const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Bhau Parekar'
    })
})


app.get('/weather', async(req, res) => {
    console.log("You enter city is=",req.query.address)

    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
const data =await geocode.funOperation(req.query.address, res);
console.log(data)

res.send(data)

})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bhau Parekar',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is started on port 3000.')
})
