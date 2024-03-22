const http = require("http");
const url = require("url");

module.exports  = http.createServer((req, res) => {
    const apiOptions = require(".controller");
    const urlParser = url.parse(req.url, true);

    console.log(`Resquest hostname ${urlParser.method}`)

    //...
    
});