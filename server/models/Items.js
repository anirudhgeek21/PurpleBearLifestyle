import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema(
    {
        image:{
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        price: {
            type: Number,
            required: true,
        },
        itemid:{
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: true,
        }

    },
    {
        timestamps : true,
    }
);

export const Item = mongoose.model('Items',ItemSchema);