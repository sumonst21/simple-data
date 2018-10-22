const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Forms');

const Form = mongoose.model('forms');

const db = '<MONGO_DB_URI>';

mongoose.connect(db, {
    useNewUrlParser: true
    },
    (err, db) => {}
    );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/thank-you', (req, res) => {
    res.sendFile(__dirname + '/thank-you.html');
    const { name, phone } = req.query;
    console.log(req.query)
    const form = new Form({
        name,
        phone
    });
    form.save();
});

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});