import mongoose from 'mongoose'

const pizzaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    dough:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

const Pizza = mongoose.model('Pizza', pizzaSchema)

export default Pizza