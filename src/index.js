import connectDB from "./db/index.js";
import dotenv from "dotenv"
import app from './app.js'
dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
const PORT = process.env.PORT
app.listen(PORT || 8000, ()=>{
  console.log(`Server is listening on port ${PORT}`)
})
})
.catch((err)=>{
  console.log(`MONGODB connection failed !!!`, err)
})













// import express from "express"
// const app = express()
// ;(async ()=>{
//   try {

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error",(error) => {
//       console.log("Not able to talk to database", error)
//       throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//         console.log(`app is listening on port ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.error('ERROR' , error)
//     throw err
//   }
// })()