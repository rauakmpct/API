const express = require('express')
const UserController = require('../controllers/UserController')
const CategoryController = require('../controllers/CategoryController')
const ProductController = require('../controllers/ProductController')
const checkauth = require('../middlewear/auth');
const router = express.Router()

// UserController 
router.get('/getalluser', UserController.getalluser)
router.get('/getuserdetails/:id', UserController.getuserdetails)
router.post('/userinsert', UserController.userinsert)
router.post('/verifylogin', UserController.verifylogin)
router.get('/logout/:id', UserController.logout)
router.post('/updatepassword/:id', UserController.updatepassword)
router.post('/updateprofile/:id', UserController.updateprofile)

//CategoryController
router.post('/categoryinsert', CategoryController.categoryinsert)
router.get('/categorydisplay', CategoryController.categorydisplay)
router.get('/categoryview/:id', CategoryController.categoryview)
router.post('/categoryupdate/:id', CategoryController.categoryupdate)
router.get('/categorydelete/:id', CategoryController.categorydelete)

//ProductController
router.post('/createproduct', ProductController.createproduct)
router.get('/getallproduct', ProductController.getallproduct)
router.get('/getallproductdetail/:id', ProductController.getallproductdetail)
router.post('/updateproduct/:id', ProductController.updateproduct)
router.get('/deleteproduct/:id', ProductController.deleteproduct)








module.exports = router