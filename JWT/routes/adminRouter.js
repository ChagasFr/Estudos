const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) => {

    if (req.secure.admin) {
        res.send('Esse dado so deve ser visto pelo admin')

    } else {
        res.status(401).send('Acess Denied');
    }
})
router.ger('/free', auth, (req, res) => {
    res.send('Esse dado so deve ser visto por quem está logado')
})

module.exports = router