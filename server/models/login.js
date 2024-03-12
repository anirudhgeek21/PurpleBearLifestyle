import mongoose from "mongoose";

const LoginSchema = mongoose.Schema ( 
    {
        email :{
            type: String,
            required: true,
        },
        password :{
            type: String,
            required: true,
        }
    }
)

export const Login = mongoose.model('Logins',LoginSchema);