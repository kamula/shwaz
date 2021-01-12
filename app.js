const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const admindata = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", admindata.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render("404", { pageTitle: "Page Not Found" })
});

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);