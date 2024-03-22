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
    await bodyParser(req)
    //database.push(req.body)
    const urlParser = url.parse(req.url, true);
    console.log(urlParser)

    let response = [
        {
            "message": "Update users"
        },
        database,
    ];

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response))

  };