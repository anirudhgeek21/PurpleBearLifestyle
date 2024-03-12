import mongoose from "mongoose";

const SignupSchema = mongoose.Schema ( 
    {
        name:{
            type: String,
            required: true,
        },
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

export const Signup = mongoose.model('Signups',SignupSchema);