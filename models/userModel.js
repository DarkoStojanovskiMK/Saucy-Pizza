import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }, 
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timeStamps:true
}
)

userSchema.methods.matchPassword = async function(enteredPasword){
    return await bcrypt.compare(enteredPasword, this.password)
}

const User = mongoose.model('User', userSchema)
export default User