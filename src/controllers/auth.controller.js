const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const {createToken} = require('../libs/jwt.js');



const register = async (req,res) => {
    
    const {username,email,password} = req.body;

    try {

        const passHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passHash
        })
       const userSaved =  await newUser.save();

       const token = await createToken({id: userSaved._id})

       res.cookie('token',token)
       res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdat: userSaved.createdAt,
            updateat: userSaved.updateAt,
        });
        console.log(userSaved);
       // res.send("registering...")
    } catch (error) {
        res.status(500).json({meessage: error.message});
        
    }   
}



const login = async (req, res) => {

    const {  email, password } = req.body;

    try {

        const userFound = await User.findOne({email})

        if(!userFound) 
        return res.status(404).json({message: 'user not found'});

        const isMatch = await bcrypt.compare(password, userFound.password)

        if(!isMatch) return res.status(404).json({message: 'invalid credentials'});

        const token = await createToken({ id: userFound._id })

        res.cookie('token', token)
        res.status(201).json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdat: userFound.createdAt,
            updateat: userFound.updateAt,
        });
        console.log(userFound);
        // res.send("registering...")
    } catch (error) {
        res.status(500).json({ meessage: error.message });

    }
}


const logout = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({message: 'logged out'});
}

const profile = async(req, res) => {

    const userFound = await User.findById(req.user.id)

    if(!userFound) { 
        return res.status(404).json({message: 'user not found'});
    }

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdat: userFound.createdAt,
        updateat: userFound.updateAt,
    })


}



module.exports = {
    register,
    login,
    logout,
    profile
}