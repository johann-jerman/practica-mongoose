const mongoose = require('mongoose');
require('dotenv').config()

module.exports = async function mongooseConection() {
    await mongoose.connect(process.env.MONGOCONNECT);
    console.log(
        `conectado a ${ process.env.MONGOCONNECT }`
    );
}