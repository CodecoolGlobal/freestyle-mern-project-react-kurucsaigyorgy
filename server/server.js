const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()
const PASSWORD = process.env.PASSWORD

const app = express();

app.set('view engine', 'ejs')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

let Fav = require('./model/FAV.js')


 mongoose.connect(`mongodb+srv://storiaron:${PASSWORD}@cluster0.xxghtqt.mongodb.net/test`)

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/api/favourites', (req,res)=>{
    console.log(req.body);
    Fav.create({id: Number(req.body.id), title: req.body.title})
    .then(result => console.log(result))
    .catch(err => console.log("Dis but an error:" ,err))
})

app.get('/api/favourites', (req,res)=>{
    mongoose.connect(`mongodb+srv://storiaron:${PASSWORD}@cluster0.xxghtqt.mongodb.net/test`)
    .then(
    Fav.find().then(favourites => res.send(favourites ))
    .catch(err => console.log('Favourite fetch error: ', err))
    )
})

app.listen(5000, () => console.log('Server is listening on port 5000'));
