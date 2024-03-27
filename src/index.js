import  express, { text } from "express";
import routeIndex from "./routes/index.router.js";
import carsRoutes from "./routes/cars.routers.js";
import './config.js'

const app = express()

app.use(express.json())
app.use(routeIndex);
app.use('/api',carsRoutes);
app.use((req, res, next)=>{
    res.status(404).json({message:'not found 404 xd'})
})


app.listen(3000)
console.log(`server running on port: 30000`) 

