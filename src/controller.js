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
  exports.createUsers = function(req, res) {
    bodyParser(req)
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