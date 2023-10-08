import express from 'express'
import {registerController, testController,forgotPasswordController, updateProfileController, getOrderController, getAllOrderController, orderStatusController} from '../controllers/authController.js'
import { loginController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object
const router= express.Router()

router.post('/register',registerController);
router.post('/login',loginController);
router.post('/forgot-password',forgotPasswordController);
router.get("/test",requireSignIn,isAdmin,testController);


//protected user route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
   res.status(200).send({ok:true}); 
});

//protected Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
   console.log(req)
   res.status(200).send({ok:true}); 
});

//update profile
router.put('/profile',requireSignIn,updateProfileController);

//orders
router.get('/orders',requireSignIn,getOrderController)

//all orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrderController)

//status update
router.put('/order-status/:orderId',requireSignIn,orderStatusController)
export default router;