// const mongoose = require('mongoose');

// const connectdb = () => {
//    return mongoose.connect(process.env.LIVE_URL)
//       .then(() => {
//          console.log('connection succesfully')
//       }).catch((error) => {
//          console.log(error)
//       })
// }

// module.exports = connectdb

const mongoose = require ('mongoose')


const connectDb =()=>{
    return mongoose.connect(process.env.LIVE_URL)
    .then(()=>{
        console.log('connection successfully')
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports= connectDb