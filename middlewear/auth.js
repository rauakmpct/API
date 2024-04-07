const jwt = require('jsonwebtoken');
const UserModel = require('../models/User')


const checkauth = async (req, res, next) => {
    // console.log('Hello Middleware')
    //token get
    const { token } = req.cookies
    // console.log(token)
    if (!token) {
        res.redirect('/')
    } else {
        const verifytoken = jwt.verify(token, 'rahul12345sign')
        // for user data show
        const data = await UserModel.findOne({ _id: verifytoken.ID })
        // console.log(data)
        req.data1 = data
        // console.log(verifytoken)
        next()
    }

}
module.exports = checkauth;