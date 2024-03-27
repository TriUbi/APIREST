  const url = require("url");
  const {bodyParser} = require("./libs/bodyParser")

  const database = [
    {
        "id": "1",
        "name": "John Doe",
        "country": "Sweden"
    }
  ];


  //GET USERS
  exports.getUsers = function(req, res) {
    let response = [
        {
            "message": "Get all users"
        },
        database,
    ];

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response))

  };

  /////////////////////////////////////////////////

  //CREATE USERS
  exports.createUsers = async function(req, res) {
    await bodyParser(req)
    database.push(req.body)

    let response = [
        {
            "message": "Create users"
        },
        database,
    ];

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response))

  };

  //REFRESHhh USERS
  exports.updateUsers = async function(req, res) {
    const urlParser = url.parse(req.url, true);

    const idQuery = urlParser.path.split("?")[1];
    const key = idQuery.split("=")[0];
    const value = idQuery.split("=")[1];
  
   
    if (key === "id"){
        await bodyParser(req);
        database[value - 1] = req.body; 
        
        let response = [
        {
            "message": "Update users"
        },
        database,
    ]; 
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response))
    } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({"message": "key is wrong"}))
    }
};

//DELETEEEEE
exports.deleteUSers = async function(req, res) {
    const urlParser = url.parse(req.url, true);

    const idQuery = urlParser.path.split("?")[1];
    const key = idQuery.split("=")[0];
    const value = idQuery.split("=")[1];
  
   
    if (key === "id"){
        database.splice(value - 1, 1)
        
        let response = [
        {
            "message": "Delete user"
        },
        database,
    ]; 
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response))
    } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({"message": "key is wrong"}))
    }
};