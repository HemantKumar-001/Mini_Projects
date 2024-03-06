const express = require("express");
const app = express();
// const path = require("path");

const port = 8000;

app.use(express.static("public"));
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) =>{
    const {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram.ejs", {data});
    }

    else{
        res.render("error.ejs");
    }
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})