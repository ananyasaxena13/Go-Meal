import express from "express"
import cors from "cors"




const app = express()
const port=4000

//using this middleware the request from frontend to backend will parse through json
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("server is running")
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})