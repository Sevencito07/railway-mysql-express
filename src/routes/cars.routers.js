import { Router } from "express"
import { getData, getDatabyid, postData, deleteData, updateData } from "../constrollers/carsContrls.js"
const router = Router()

router.get('/end',getData)
router.get('/end/:id',getDatabyid)
router.post ('/end',postData)
router.delete('/end/:id', deleteData)
router.put('/end/:id', updateData)

export default router