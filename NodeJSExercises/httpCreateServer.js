import http from "http"
const PORT = 5000;
const server = http.createServer((req,res) => {

})

server.listen(PORT,() => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})