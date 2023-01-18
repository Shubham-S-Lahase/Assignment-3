const http = require("http");

const fs = require("fs");

fs.writeFileSync("index.html", `<h1> Hello World </h1>
<p> This is Shubham... </p>`);

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        res.end(data);
    })
})

server.listen(5000, ()=> {console.log("The server is up at 5000")})