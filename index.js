var servidor = require("./config/servidor")

var app = servidor.app

var porta = servidor.porta

app.get("/",(req, res)=>{
    res.send("Calvarão o seu gato")
})

app.listen(porta,()=>{
    console.log("servidor em http://localhost:"+porta)
})