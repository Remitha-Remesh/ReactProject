// import  mongoose  from "mongoose"



// const connectDb=async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("Database connected")
//     }catch(error){
//         console.log(error)
//     }

   
// }

// export default connectDb

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database: ", error.message);
  }
};

export default connectDb;

