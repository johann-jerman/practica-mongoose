require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.TOKEN
const Users = require('../database/schemas/user.schamas');

module.exports = {
    login: async (req, res) =>{
        try {
            // console.log(typeof req.body.email);
            const user = await Users.findOne({email: req.body.email})

            if (!user) console.log('no existe el usuario');

            if (user.password != req.body.password) console.log('no existe la password');

            const payload = {
                user: user.id,
            }

            const token = jwt.sign(payload, secret, {
                algorithm: 'HS256',
                expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
            })

            res.json({
                user,
                token
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
    auth: (req, res) =>{
        try {
            const token = req.headers.auth 
            
            const auth = jwt.verify(token, secret)
            
            res.json({
                token,
                auth
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
}