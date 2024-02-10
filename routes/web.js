const express = require('express')
const UserController = require('../controllers/UserController')
const CategoryController = require('../controllers/CategoryController')
const ProductController = require('../controllers/ProductController')
const router = express.Router()

// UserController 
router.get('/getalluser', UserController.getalluser)
router.post('/userinsert', UserController.userinsert)
router.post('/verifylogin', UserController.verifylogin)

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