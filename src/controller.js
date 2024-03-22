  const url = require("url");

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
  exports.getUsers = function(req, res) {
    let response = [
        {
            "message": "Create all users"
        },
        database,
    ];

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response))

  };