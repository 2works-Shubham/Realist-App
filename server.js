// import required packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import { DATABASE } from './config.js';
import router from './routes/auth.js';

const app = express();
const PORT = 8000;

//Database connectivity through Mongoose
mongoose.connect(DATABASE)
.then(()=>{console.log("Database connected successfully..")})
.catch((err)=>{console.log(err)});

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Route middlewares
app.use('/api',router);



// listen() to start server & to check server works properly with req on port:8000
app.listen(PORT,(error)=>{
    if(!error)
    {
        console.log("Server started successfully..");     
    }
    else{
        console.log("Server not working properly.." + error);     
    }
});
