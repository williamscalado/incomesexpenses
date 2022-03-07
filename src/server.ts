import Express  , {Response, Request, NextFunction}from "express"
import dotenv from "dotenv"
import { routerMain } from "./Routers"

dotenv.config()
const app = Express()
app.use(Express.json())

app.use(routerMain)

app.get('/', (request: Request, response: Response) => {
    response.status(200).json({msg: "Api Incoms and Expenses"})
})


app.use((request: Request, response: Response)=>{
    response.json({error: "Page not found!"})
})


app.use((error: Error , request: Request, response: Response, next: NextFunction)=>{

    response.json(error)
    next()
})


app.listen(process.env.PORT || 3000)