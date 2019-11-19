const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Joi = require('joi');
const portNumber = 4000;
const Admin = require('./Routes/admin');
const BodyParser = require("body-parser");


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//Connecting to Beskleta DataBase ;
mongoose.connect('mongodb://localhost/Beskleta', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
        console.log("DATABASE Created !")
    },
    err => { /** handle initial connection error */
        console.error('Could not connect to mongoDB')
    }
);

app.use(express.json());
app.use('/admin', Admin);


app.listen(portNumber, () => console.log(`listening to port #${portNumber}`));
