const http = require("http");

module.exports  = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({"message": "Hello World"}))
});