const User = require('./userSchema')

const signinHandler = (req, res) => {

};

const signupHandler = async (req, res) => {
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    console.log(req.body)
    try {
        await newUser.save()
        res.status(201).json({ message: 'user created succesfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'failed to create user'})
    }
}
 
module.exports = { signinHandler, signupHandler };