import { createdP } from "../db.js"

export const indexDb =   async(req, res)=>{
    const [result ]= await createdP.query('SELECT "pong" AS result')
    res.json(result[0])}