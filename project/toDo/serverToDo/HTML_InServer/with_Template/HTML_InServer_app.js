const fs = require("fs");
const express = require("express");
const app = express();
const jsonParser = express.json();


app.post("/taskData", jsonParser, function (request, response) {

    if (!request.body) return response.sendStatus(400);

    let fileContent = fs.readFileSync("savedData.txt", "utf8");

    let masTask = fileContent.length > 0 ? JSON.parse(fileContent) : [];
    masTask.push(request.body);

    let str = JSON.stringify(masTask);
    fs.writeFileSync("savedData.txt", `${str}`);
});

app.get("/", function (request, response) {

    let message = '';
    let fileContent = fs.readFileSync("savedData.txt", "utf8");

    if (fileContent.length > 1) {

        let masTask = JSON.parse(fileContent);
        for (let i = 0; i < masTask.length; i++) {
            message += `<div id="id${i + 1}"><input type="checkbox">${masTask[i].task}</div>`
        }
    }
    let finalContent = fs.readFileSync('HTML_InServer.html', "utf8");
    finalContent = finalContent.replace("{message}", message);
    response.end(finalContent);
    //response.sendFile(__dirname + "/serverTestFile.html");
});
app.listen(3000); 