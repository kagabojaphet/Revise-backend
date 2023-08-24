import express from "express";
import userrouter from "./userroutes"
const router=express.Router();
router.use("/user",userrouter)
export default router