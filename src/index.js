import dotenv from "dotenv";
import { app } from "./app.js";



import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

connectDB()



.then(() => {
    app.on("error", (error) => {
    console.log("APP ERROR", error);
    throw error
});
    app.listen(process.env.PORT || 8000, () => {
       console.log(`Server is running at port : ${process.env.PORT || 8000}`); 
    });
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err);
});