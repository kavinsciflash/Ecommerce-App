import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js"
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
const route= express.Router()

//configure env
dotenv.config();

connectDB();

const app= express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//middlewares
app.use(express.json())
app.use(morgan('dev'))
// app.use(express(path.join(__dirname, './frontend/build')))

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoute);

//rest api
// app.get('/', function (req, res) {
    // let indexPath = path.join(__dirname, "../frontend/build/index.html");
    // res.sendFile(indexPath);
    // res.sendFile('../frontend/build/index.html', { root: __dirname });
  // });

// route.get("/", function(request, response) {
//   response.sendFile(__dirname + "./frontend/build/index.html");
// });

app.get("/",(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>");
});




const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});
