const http = require("http");
const url = require("url");

module.exports  = http.createServer((req, res) => {
    const apiOptions = require("./controller");
    const urlParser = url.parse(req.url, true);

    console.log(`Resquest hostname ${urlParser.method}`)
    //...

    switch(req.method) {
        case "GET":
            if(urlParser.pathname === "/users"){
                apiOptions.getUsers(req, res);
            }
            break;
        case "POST":
            if(urlParser.pathname === "/users"){
                apiOptions.createUsers(req, res);
            }
        case "PUT": 
        apiOptions.updateUsers(req, res);
        default:
            return;
    }
    
});