import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";


const app = express();

const port = 3000;


app.use(express.json());

app.use("/todos", todoRoutes);

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/todo-app');
        console.log("Connected successfully!!!")
    } catch (error) {
        process.exit(1);
    }
}

dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})