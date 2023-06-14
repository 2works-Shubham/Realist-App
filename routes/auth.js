import express from "express";

const router = express.Router();

// get(path,callback-function) to send request to localhost:8000
router.get("/api",(req,res)=>{
    res.json({
        name:"shubham",
        surname:"shingare",
        address:"kolhapur",
    })
});


export default router;