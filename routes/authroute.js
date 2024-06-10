import express from "express"
import { registerController } from "../Controller/authController.js"

const router=express.Router()
router.post("/register",registerController)


export default router