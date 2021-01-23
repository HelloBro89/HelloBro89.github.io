const express = require("express");
const app = express();
const fs = require('fs');
const jsonParser = express.json();

app.use(express.static(__dirname));

app.post("/taskData", jsonParser, function (request, response) {

    if (!request.body) return response.sendStatus(400);

    let fileContent = fs.readFileSync("savedData.txt", "utf8");

    let masTask = fileContent.length > 1 ? JSON.parse(fileContent) : [];
    masTask.push(request.body);

    let str = JSON.stringify(masTask);
    fs.writeFileSync("savedData.txt", `${str}`);
    response.json(request.body);
});

app.get("/tasks", jsonParser, function (request, response) {

    let fileContent = fs.readFileSync("savedData.txt", "utf8");

    let masTask = fileContent.length > 1 ? JSON.parse(fileContent) : [];
    response.json(masTask);
})

app.get("/", jsonParser, function (req, res) {
    res.redirect("/HTML_staticFile_improved.html")
})
app.listen(3000); 