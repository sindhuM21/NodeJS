const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url == "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>send</button></form></body>");
    res.write("</html>");
    return res.end();
    }
    if(req.url == "/message" && req.method == "POST"){
        fs.writeFileSync("message.txt", "dummy");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body>Hello from node.js server</body>");
    res.write("</html>")
    res.end();
    
});

server.listen(3000);
