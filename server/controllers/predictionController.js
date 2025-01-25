const prediction=require('../models/Prediction');

//create a new prediction
exports.createPrediction=async(req,res){
    const{userId,stocksymbol,quantityPrice}=req.body;
}
//create a new prediction object
const newPrediction=new Prediction({userId,stocksymbol.prediction})
//save the prediction
await newPrediction.save();
//Respond with created predcition
res.status(201).json(newPredcition);

}catch(error){
    //Handle error and rspond with error message
    res.status(500).json({error:'Error creating predcition'});
}

//get prediction for a specific user

export.getPredcition=aysnc(req,res){
    const{userId}=req.params() //get userId from request parameters
}
try{
    //Find predictions from the user
    const predictions=await predcition.find({userId})
    //respond with list of prediction
    res.json(predcition);
}catch(error){
    //Handle error and respond with error message
    res.status(500).json({error:'error fetching Predictions'})
}



