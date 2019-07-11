var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "any string"
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

function sayHello(req, res) {
  res.json({
    message: "hello world"
  });
}
app.get("/", sayHello);

function addAplusB(req, res) {
  var a = req.params["a"];
  var b = req.params["b"];
  a = parseInt(a);
  b = parseInt(b);
  var c = a + b;
  res.send("a + b = " + c);
}
app.get("/add/:a/:b", addAplusB);

// /login?username=alice&password=alice
function login(req, res) {
  var username = req.query["username"];
  var password = req.query["password"];
  if (username == "alice" && password == "alice") {
    res.send("Hello Alice");
  } else {
    res.send("Sorry, try again");
  }
}

const courses = [
  {
    id: 1,
    title: "Essay",
    modules: [
      {
        id: 1,
        title: "Module 1",
        lessons: [
          {
            id: 1,
            title: "Lesson ABC"
          },
          {
            id: 2,
            title: "Lesson XYZ"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Quiz",
    modules: [
      {
        id: 2,
        title: "Module 2",
        lessons: [
          {
            id: 3,
            title: "Lesson def"
          },
          {
            id: 4,
            title: "Lesson rst"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Test",
    modules: [
      {
        id: 3,
        title: "Module 3",
        lessons: [
          {
            id: 4,
            title: "Lesson 4"
          },
          {
            id: 5,
            title: "Lesson 5"
          }
        ]
      }
    ]
  }
];
app.get("/api/courses", function(req, res) {
  res.json(courses);
});

app.get("/login", login);

// require("./controllers/page.controller.server")(app);
// require("./controllers/later/WebsiteController")(app);
// require("./controllers/later/PageController")(app);
app.listen(3000);
