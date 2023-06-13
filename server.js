// https://github.com/shubham3938/Realist-App.git

// import required packages
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = 8000;

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// get(path,callback-function) to send request to localhost:8000
app.get("/api",(req,res)=>{
    res.json({
        name:"shubham",
        surname:"shingare",
        address:"kolhapur",
    })
});


// listen() to start server & to check server works properly with req on port:8000
app.listen(PORT,(error)=>{
    if(!error)
    {
        console.log("Server started successfully...hh");     
    }
    else{
        console.log("Server not working properly..." + error);     
    }
});
