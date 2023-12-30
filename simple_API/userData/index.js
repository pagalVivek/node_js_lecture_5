const http = require('http')
const fs = require('fs')

const server = http.createServer( (req, res) => {
    if (req.url == "/" || req.url == "/home"){
        res.end("Hello from Home site!")
    }
    else if( req.url == "/" || req.url == "/about"){
        console.log("hello from about")
    } 
    else if( req.url == "/" || req.url == "/contact"){
        console.log("hello from contact")
    }
    else if( req.url == "/" || req.url == "/userapi"){
        fs.readFile("C:/Users/Admin/Desktop/npmNode/simple_API/userAPI/userapi.json", "utf-8", (err, data) => {
            console.log(err)
            const objData = JSON.parse(data)
            res.end(objData[0].price)
            
        })
    } 
    else{
        console.log("ERROR 404 : Page not found ")
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log("server started!")
})

