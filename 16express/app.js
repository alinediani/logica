const express=require('express')
const bp= require('body-parser')
const app= express();
const router=express.Router();

const index=require('./routes/index')
const product=require('./routes/product')

app.use(bp.json());
app.use(bp.urlencoded({ extended:false}));



app.use('/',index)
app.use('/products',product)

module.exports=app;