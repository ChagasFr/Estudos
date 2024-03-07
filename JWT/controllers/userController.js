const User = require('../models/User')

const userController = {
    register: async function (req, res) {
        const user = new User ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        try {
            const savedUser = await user.save()
            res.send(savedUser)
        } catch (err) {
            res.send(err)
        }
    },

    login: function (req, res) {
        console.log('login')
        res.send('login')
    },
}

module.exports = userController