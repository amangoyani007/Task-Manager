const jwt = require('jsonwebtoken');
const {BadRequest} = require("../errors");


const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        throw new BadRequest('Please provide username and password');
    }

    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(200).json({ msg: "user created", token });
    console.log(username, token);
    // res.send('Fack Login/Register/Signup Route');

};

const dashboard = async (req, res) => {

    console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky numer is ${luckyNumber}` })

    // res.status(200).json({ message: `Hello, John`, secret: `Here is your authorized data, your lucku numer is ` })
};

module.exports = {
    login, dashboard
};
