import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
import jwt  from 'jsonwebtoken'

dotenv.config()

export const verifyAuthentication = async (req: Request, res: Response, next: NextFunction) =>{

    const acessToken = req.headers["x-acess-token"] || req.headers["Authorization"] ;
    if(!acessToken) throw new Error('This Token is not valid!')

    const verifyToken = jwt.verify(acessToken.toString(), `${process.env.SECRETKEYTOKEN}`)
    if(!verifyToken) throw new Error('This Token is not valid!')

    // verify User login 
    // ...


    next()
}