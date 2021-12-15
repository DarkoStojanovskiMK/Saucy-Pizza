import jwt from 'jsonwebtoken'

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresin:'30d'
    })
}

export default generateToken