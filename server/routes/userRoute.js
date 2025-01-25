const express=require('express');
const{
    createUser,
    getAllUsers,
    getUserId,
    updateUser,
    deleteUser,
    registerUser,
}=require('../controllers/userController');

const authenticate=require("../middleware/authenticateMiddleware");
const verifyRole=require("../middleware/verifyRole");
const {registerUser}=require('../controllers/userController');
const router=express.Router();

router.post('/register,registerUser'); //Public route for user registration
router.use(authenticate);//protect all routes below this line with authntication

router.post('/', verifyRole(['ADMIN']), createUser); 
router.get('/', verifyRole(['ADMIN']), getAllUsers); 
router.get('/:id', verifyRole(['ADMIN', 'USER']), getUserId); 
router.put('/:id', verifyRole(['ADMIN']), updateUser); 
router.delete('/:id', verifyRole(['ADMIN']), deleteUser)

module.exports=router;