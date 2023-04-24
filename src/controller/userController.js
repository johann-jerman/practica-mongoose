const Users = require('../database/schemas/user.schamas')

module.exports = {
    createUser: async (req, res)=>{
        try {
            if (req.body.password != req.body.confirmPassword) {
                res.status(400).json({
                    status: 400,
                    data: 'pass no coincide'
                })
            }

            const user = new Users({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                category: req.body.category
            })

            const data = await user.save();
    
            res.status(200).json({
                status: data,
                data: user
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const id = {_id: req.params.id,}

            const userToUpdate= {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
                category: req.body.category
            }
            
            const userUpdated = await Users.updateOne(id, userToUpdate);

            res.json({
                data: userUpdated,
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
    deleteUser: async (req, res)=>{
        try {
            const id = {_id: req.params.id};

            const toDelete = await Users.deleteOne(id);

            res.json({
                data: toDelete
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
    findAll: async (req, res)=>{
        try {
            const users = await Users.find()

            res.json({
                data: users
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
    findOne: async (req, res)=>{
        try {
            const userToFind = await Users.findOne({_id: req.params.id})
            res.json({
                data: userToFind
            })
        } catch (error) {
            console.log(error);
            res.json({
                error
            })
        }
    },
}