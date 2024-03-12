import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import { Item } from './models/Items.js';


const app = express();

app.use(express.json());
app.use(cors({
    origin: ["https://purple-bear-lifestyle.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
  }));

app.get("/", (req, res) => {
    return res.status(234).send("PurpleBear server sexyyy !!!");
});


//addtems
app.post("/items", async(req,res) => {
    try {
        
        if(
            !req.body.name || 
            !req.body.image ||
            !req.body.price ||
            !req.body.category
        ) {
            return res.status(400).send({
                message: "all field send"
            });
        }

        const NewItem = {
            image : req.body.image,
            name : req.body.name,
            price : req.body.price,
            category : req.body.category,

        }

        const itemnew = await Item.create(NewItem);
        return res.status(201).send(itemnew)

    } catch (error) {
        console.log(error.message);
        req.status(500)({ message: error.message });
    }
} )


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to db");
        app.listen(PORT, () => (
            console.log(`App is running on port ${PORT}`)
        ));
    })
    .catch((error) => {
        console.log(error)
    });
