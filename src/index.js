import app from "./app.js";

const PORT = 3000
app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Servicio esta funcionando el puerto ${PORT}`)
    }
    else{
        console.log(`El servidor no está funcionando`)
    }
})