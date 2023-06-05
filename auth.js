const User = require('./userSchema')
const bcrypt = require('bcrypt')

const signinHandler = async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = await User.findOne({ username })
        if(!user){
            return res.status(404).json({ message: 'user not found'})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(401).json({ message: 'invalid password'})
        }

        res.status(200).json({ message: 'user logged in succesfully',user: user})
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'failed to signin'})
    }
    

};

const signupHandler = async (req, res) => {
    const { email, username, password } = req.body;
    
    try{
        const existingUser = await User.findOne({ username })
        if(existingUser){
            return res.status(409).json({ message: 'user already exists'})
        }
        
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
        });
        
        await newUser.save()
        res.status(201).json({ message: 'user created succesfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'failed to create user'})
    }
}
 
module.exports = { signinHandler, signupHandler };