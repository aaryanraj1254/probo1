const express=require('express');
const{createTrade,getTrades, get User Trades}=require('../controllers/opinionController.js');
const authMiddleware=require('../Middleware/authmiddlewares')
const router=express router();

//create a new trade
router.post('/',authMiddleware,getTrade);

//Get all trades
router.post('/',getTrade);

//get Trades by specific user
router.post('/user/:userId',authMiddleware, getUser Trades);


module.exports=router;


