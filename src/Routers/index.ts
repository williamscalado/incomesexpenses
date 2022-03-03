import { Router, Request, Response } from "express";

const routerMain = Router()

routerMain.get('/user', (req: Request, res: Response)=>{
    res.json({status: "ok"})
})

export { routerMain }





