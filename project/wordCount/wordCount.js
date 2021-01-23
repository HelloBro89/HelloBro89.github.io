const fs = require("fs");
let fileContent = fs.readFileSync("hello.txt", "utf8");

let wordCount = 0;

if (fileContent !== '') {

    for (let i = 0; i < fileContent.length; i++) {

        if (fileContent[i] !== ' ') {

            if (fileContent[i + 1] === ' ' || fileContent[i + 1] === undefined) {
                wordCount++;
            }
        }
    }
}

// let info = process.argv[2];

fs.writeFileSync(process.argv[2], `${wordCount}`);


