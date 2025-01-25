const Trade=require('../modals/Trade');

//create a new table
exports.createTrade=async(req,res){
    const{userId,stockSymbol,quantity,price}=req.body;
} //destrcuture req body
}
try{
    //create a new trade object
    const newTrade= new Trade{userId,stockSymbol,quantity,price}
    //save the trade
    await newTrade.save();

    //Respond with the created Trade
   res.status(201).json(newTrade),
}catch(error){
    //Handle error and respond with error message
    res.status(500).json({error:'Error creating trade'})
}
};

//get trades for specific user
exports.getTrades=async(req,res)=>{
   const userId=new UserId;//get userId from request parameter
    try{
        //find trades for the user
        const trade=await Trade.find({userId});
    }
    //Respond with the list of trades
   res.json(trades);
}catch(error){
    //Handle errors and respond 
   res.status(500).json({error:"Error fetchig trades"});
}
