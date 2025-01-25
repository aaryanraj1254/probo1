const prisma=require('@prisma/client').PrismaClinet();
const User=require('../models/User');
const registerValidation=require("../validation/regsiterValidation");



exports.registerUser=async(req,res){
    const{email,password,role="user"}=req.body;

    try{
        const newUser=await prisma.user.create({
            data:{
                email,
                password,
                role,
            },
        });
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error:'Failed to register User'}
        next(error);//pass error to the error handler middleware
    }
    }
}

//create a new User
exports.createUser=async(req,res){
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).json(user)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }

   }
}

//Get all Users
export getAllUsers=async(req,res){
    try{
        await User=new User.find();
        res.status(200).json('User') //200 ok status
    }
    catch{ //error
        res.status(500).json({error:error.message});
    }
}

//Get a User By Id
export.getUserById=async(req,res){
    try{
        const user=await User.findById(req.params.id);
        if(!user).res.status(404).json({message:'User not found'})
        res.status(200).json(user);
    catch{
        res.status(500).json({error:error.message})
    }
export updateUser=await (req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user) return res.status(404).json({message:'user not found'})
        res.status(204).send();
    }cacth(error){
        res.status(500).json({error:error.messge})
    }
}


//delete a user
exports.deleteUser  = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User  not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }



