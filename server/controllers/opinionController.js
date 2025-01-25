const opinion=require('../models/Opinion');
export.createOpinion=async(req,res){
    const({userId,stocksymbol,prediction})=req.body;
    try{
        //create a new opinion object
        const newOpinion=new Opinion({userId,stocksymbol,prediction});
        //save the object
        await newOpinion.save();
        //respond with the created opinion
        res.status(201).json(newOpinion)
    }catch{
        res.status(500).json('error:error fetching messages')
    }    
}
//get opinions for a specific task
export.getOpinions=async(req,res){
    const{stockSymbol}=req.params;
   try{
    //Find opinions for the specified task
    const opinion=await Opinion.find({stocksymbol});
    //respond with list of opinions
    res.json(opinions);
   } catch(error){
    //Handle error
    res.status(500).json({error:'Error fetching data'})
   }
}

//get opinions for user
export.user.getOpinions=async(req,res){
    const{userId}=req.userId;
    try{
        const opinion=await Opinion.find({userId});
        res.json(opinions);
    }catch(error){
        res.status(500).json:'Error fetching User Data'}
    }
}
