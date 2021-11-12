import mongoose from 'mongoose'

const pizzaSchema = mongoose.Schema({
    name:{
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