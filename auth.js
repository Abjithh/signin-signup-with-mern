const signinHandler = (req, res) => {

};
const signupHandler = (req, res) => {
    app.post('/',async(req, res)=> {
    const newUser = new User({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
    });
    try{
        await newUser.save()
        res.status(201).json({ message: 'user created succesfully'})
    }catch(error){
        res.status(500).json({ error: 'failed to create user'})
    }
})
}

module.exports = { signinHandler, signupHandler };