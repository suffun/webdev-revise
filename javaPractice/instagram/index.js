const express = require("express");
const path = require("path");

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/",(req,res) => {
  res.render("home");
});

app.get("/ig/:username", (req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("instagram",{data });
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server is runnning on ${port}`);
});
