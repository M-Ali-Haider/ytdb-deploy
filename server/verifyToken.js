import Jwt from "jsonwebtoken";
import { createError } from "./error.js";


export const verifyToken = (req,res,next)=>{
  const token = req.cookies.access;
  try{
    const user = Jwt.verify(token,process.env.JWT);
    req.user = user;
    next();
  }catch(err){
    res.clearCookie("access")
    next(createError(401,"You are not authenticated!"))
  }
}


// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) return next(createError(401, "You are not authenticated!"));

  
//   Jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) {
//       console.error("Token verification error:", err);
//       return next(createError(403, "Token is not valid!"));
//     }

//     console.log("Token verified successfully. User:", user);
//     req.user = user;
//     next();
//   });
// };
