const http = require("http");
const url = require("url");

module.exports  = http.createServer((req, res) => {
    const apiOptions = require("./controller");
    const urlParser = url.parse(req.url, true);

    console.log(`Request hostname ${req.method}`)
    //...

    switch(req.method) {
        case "GET":
            if(urlParser.pathname === "/users"){
                apiOptions.getUsers(req, res);
            }
            break;
        case "POST":
            if (urlParser.pathname === "/users"){
                apiOptions.createUsers(req, res);
            }
        break;
        case "PUT": 
        if (urlParser.pathname === "/users") {
          apiOptions.updateUsers(req, res);
        }
        break;
        case "DELETE": 
        if (urlParser.pathname === "/users") {
          apiOptions.deleteUSers(req, res);
        }
        break;
        default:
            return;
    }
    
});