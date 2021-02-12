const fs = require("fs");
const express = require("express");
const app = express();
const jsonParser = express.json();

app.set("view engine", "hbs");
app.post("/taskData", jsonParser, function (request, response) {

    if (!request.body) return response.sendStatus(400);

    let fileContent = fs.readFileSync("savedData.txt", "utf8");

    let masTask = fileContent.length > 0 ? JSON.parse(fileContent) : [];
    masTask.push(request.body);

    let str = JSON.stringify(masTask);
    fs.writeFileSync("savedData.txt", `${str}`);

});

app.get("/", function (request, response) {

    let fileContent = fs.readFileSync("savedData.txt", "utf8");

    let masTask = fileContent.length > 1 ? JSON.parse(fileContent) : [];

    response.render("with_Handlebars.hbs", {
        tasksVisible: true,
        tasks: masTask
    });
});
app.listen(3000); 