import express from "express";
import mongoose from "mongoose";
import mainRoutes from "./routes/main-routes.js";
const port = 3000;
const app = express();

connectDb();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(mainRoutes);

async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/quiz-app");
        console.log("connected to database");
        app.listen(port, () => console.log(`Server is running on local host: ${port}`));
    }
    catch (err) {
        console.log(err);
    }
};