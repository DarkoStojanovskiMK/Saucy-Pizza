import mongoose from 'mongoose'



const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    orderItems:[
        {
            name:{type:String, required:true},
            image:{type:String, required:true},
            num:{type:Number, required:true},
            price:{type:Number, required:true},
            pizza:{type:mongoose.Schema.Types.ObjectId, required:true, ref:'Pizza'}

        }
    ],
    shippingAddress:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    }
})

const Order = mongoose.model('Order', orderSchema)

export default Order