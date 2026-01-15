import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUser)
//from here to /register route (http://localhost:8000/users/register) through registerUser controller

// router.router("/login").post(loginUser)



//routes /login and /register both are nested route under /user


export default router