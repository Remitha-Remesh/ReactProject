
// import Usermodel from "../models/Usermodel.js"
// import { hashPassword } from "../helpers/authHelpers.js"
// export const registerController=async(req,res)=>{
//     try{
//         const{name,email,password,phone,address,answer}=req.body
//          console.log(req.body)

//         if(!name){
//             return res.send({error:"Name is required"})
//         }
//         if(!email){
//             return res.send({error:"Email is required"})
//         }
//         if(!password){
//             return res.send({error:"Password is required"})
//         }
//         if(!phone){
//             return res.send({error:"Phone is required"})
//         }
//         if(!address){
//             return res.send({error:"Address is required"})
//         }
//         if(!answer){
//             return res.send({error:"Answer is required"})
//         }
//         const existingUser=await Usermodel.findOne({email})
//         if(existingUser){
//             return res.status(200).send({
//                 success:false,
//                 message:"already register please login"
//             })
//         }//register user
//         const hashedPassword=await hashPassword(password)
//         //save
//         const user=await new Usermodel({
//             name,
//             email,
//             phone,
//             address,
//             password:hashedPassword,
//             answer,
//         }).save()
//         res.status(201).send({
//             success:true,
//             message:"User Register Sucessfully",
//             user,
//         })
        

//     }catch(error){
//         console.log(error)
//         res.status(300).send({
//             success:false,
//             message:"error in registration",
//             error,
//         })
//     }
// }
// import { hashPassword } from '../helpers/authHelpers';
 // Make sure to import your UserModel and hashPassword function
//  import UserModel from  "../models/Usermodel.js"
//  import { hashPassword } from "../helpers/authHelpers.js";

// export const registerController = async (req, res) => {
//     try {
//         const { name, email, password, phone, address, answer } = req.body;

//         // Validate required fields
//         if (!name) return res.status(400).send({ error: "Name is required" });
//         if (!email) return res.status(400).send({ error: "Email is required" });
//         if (!password) return res.status(400).send({ error: "Password is required" });
//         if (!phone) return res.status(400).send({ error: "Phone is required" });
//         if (!address) return res.status(400).send({ error: "Address is required" });
//         if (!answer) return res.status(400).send({ error: "Answer is required" });

//         // Check if the user already exists
//         const existingUser = await UserModel.findOne({ email });
//         if (existingUser) {
//             return res.status(200).send({
//                 success: false,
//                 message: "User already registered, please log in"
//             });
//         }

//         // Hash the password
//         const hashedPassword = await hashPassword(password);

//         // Create and save the new user
//         const user = new UserModel({
//             name,
//             email,
//             phone,
//             address,
//             password: hashedPassword,
//             answer,
//         });
//         await user.save();

//         // Send success response
//         res.status(201).send({
//             success: true,
//             message: "User registered successfully",
//             user,
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send({
//             success: false,
//             message: "Error in registration",
//             error: error.message,
//         });
//     }
// };

import UserModel from '../models/UserModel.js';
import { hashPassword } from '../helpers/authHelpers.js';

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        // Validate required fields
        if (!name) return res.status(400).send({ error: "Name is required" });
        if (!email) return res.status(400).send({ error: "Email is required" });
        if (!password) return res.status(400).send({ error: "Password is required" });
        if (!phone) return res.status(400).send({ error: "Phone is required" });
        if (!address) return res.status(400).send({ error: "Address is required" });
        if (!answer) return res.status(400).send({ error: "Answer is required" });

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "User already registered, please log in"
            });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create and save the new user
        const user = new UserModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer,
        });
        await user.save();

        // Send success response
        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error: error.message,
        });
    }
};