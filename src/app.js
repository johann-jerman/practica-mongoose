require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongooseConection = require('./database/config');
const userRoute = require('./routes/user.routes');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
mongooseConection()
    // .catch(err => console.log(err));

app.use(userRoute);

app.listen(PORT, ()=>{
    console.log(
        `http://localhost:${PORT}`
    );
});