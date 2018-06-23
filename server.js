const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//el puerto es asignado por heroku, de lo contrario el puerto local
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'juanillo boomper',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        personaje: 'gato Silvestre',
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});