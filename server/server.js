const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.set('view engine', 'ejs')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

let Fav = require('./model/FAV.js')


 mongoose.connect("mongodb+srv://storiaron:svarci12@cluster0.xxghtqt.mongodb.net/test");

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req,res)=>{
    console.log(req.body);
    /* Fav.create({id: 'test', title: req.body}) */
   /*  Fav.create({id: req.body.id, title: req.body.title, })
    .then(movie => console.log(movie))
    .catch(err => console.log(err)) */
})

app.listen(5000, () => console.log('Server is listening on port 5000'));
