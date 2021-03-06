const express = require("express");
const router = require("./controllers/burgers_controllers.js");
const exphbs = require("express-handlebars")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router)

app.listen(PORT, (err, res) => {
    if (err) throw err;
    console.log("Server listening on:" + PORT);
})