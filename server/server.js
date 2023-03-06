const mongoose = require('mongoose');
const express = require('express');

const app = express();

app.set('view engine', 'ejs')
app.use(express.json());


// mongoose.connect("mongodb+srv://<username>:<password>@cluster0.klndhev.mongodb.net/?retryWrites=true&w=majority");

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(5000, () => console.log('Server is listening on port 5000'));
