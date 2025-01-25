const express=require('express');
const{createOpinion,getOpinions, getUser Opinions}=require('../controllers/opinion/Controller');
const authmiddleware=require('../middlewares/authmiddleware');
const router=express.router();


//Create a new opionion
router.post('/',authMiddleware,createOpinion);

//get opinion for speicfic user
router.get('/:stocksymbol',getOpinions);

//get opinion by specific user
router.get('/user/:userid',authMiddleware,getUser Options);


module.exports=router;

