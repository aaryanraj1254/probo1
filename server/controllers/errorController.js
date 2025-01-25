const customError=require('../utils/customError');

async function loginUser(req,res,next){
    try{
        const{email,password}=req.body;

        const user=await prisma.user.findUnique({where:{email}});
        if(!user){
            throw new CustomError('Invalid email and password');
        }
        res.status(200).json({message:'Login successful',user});
    }catch(error){
        next(Error);
    }
}