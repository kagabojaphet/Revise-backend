import  express from "express";
import usercontroller from "../controller/usercontroller";

const router=express.Router()
router.get("/",usercontroller.craeteuser)

export default router