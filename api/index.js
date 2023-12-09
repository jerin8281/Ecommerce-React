const express=require("express");
const app=express();
const userRoute=require('./routes/user')
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoute=require('./routes/cart')
const orderRoute=require('./routes/order')

const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connection Succesfull");
    }).catch((err)=>{
        console.log(err);})
app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/products',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)

app.listen( 3001, ()=>{console.log("Server Running");})


