const express=require('express');
const {createPrediction,getPrediction}=require('../controller/predictionController.js');
const authMiddleware=require('../middleware/authMiddleware.js');
const express=express router();


router.post('./',authMiddleware,createPrediction);

router.get('./',getPredcition);

module.exports=router;

