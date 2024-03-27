import { createdP } from "../db.js"

export const  getData= async (req, res)=>{
  try {
    const [rows]= await createdP.query('SELECT * FROM test')
    res.send({rows})
  } catch (error) {
    return res.status(500).json({message:'sothing wrong'})
  }
}

export const getDatabyid = async(req, res)=>{
    try {
      const [rows]= await createdP.query('SELECT * FROM test WHERE id=?', [req.params.id])
      if(rows.length <= 0) return res.status(404).json({
        message:'404 not data'
      })
       res.send(rows[0])
    } catch (error) {
      return res.status(500).json({message:'sothing wrong'})
    }
}

 export const postData = async (req, res)=>{
    try {
      const {name, year}= req.body
   const [rows] = await createdP.query('INSERT INTO test (name, year) VALUES (?, ?)',
    [name, year])
    res.send({id:rows.insertId, name, year})
    } catch (error) {
      return res.status(500).json({message:'sothing wrong'})
    }

  }

 export const  deleteData= async (req, res)=>{ 
   try {
    const [rows]= await createdP.query('DELETE FROM test WHERE id =?',[req.params.id])
    if(rows.affectedRows <= 0)return res.status(404).json({
     message:"not file 404"
    })
    res.status(204)  
   } catch (error) {
     return res.status(500).json({message:'sothing wrong'})
   }
    
 }

 export const updateData=  async(req, res)=>{
    try {
      const {id}= req.params;
    const {name, year}= req.body;
    const [result]  = await createdP.query("UPDATE test SET name=?, year=? WHERE id=?",[name, year,id])
    if (result.affectedRows === 0 ) return res.status(404).json({
        message:"not found "
    })
    res.json("reseived")
    } catch (error) {
      return res.status(500).json({message:'sothing wrong'})
    }
    
  }    