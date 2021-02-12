let main = document.getElementById("main");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let coorTopCanvas = canvas.getBoundingClientRect().top + pageYOffset;
let coorTopMain = main.getBoundingClientRect().top + pageYOffset;
main.style.marginTop = `${coorTopCanvas - coorTopMain}px`;

for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.style.cssText = `float: left;
    width: 33.333%;
    height: 33.333%;`;
    div.className = `${i}`;
    div.id = `${i}`;
    main.append(div);
}

function drawMarkup() {
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);
    ctx.moveTo(0, 200);
    ctx.lineTo(300, 200);
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 300);
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 300);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
}
drawMarkup();

let player = "Player 1";
let masHorisontal = [];
let masVertical = [];
let masDiagonal1 = [];
let masDiagonal2 = [];
let num = 0;

main.addEventListener("mouseup", (e) => {
    let clickTarget = e.target;

    let x =
        clickTarget.getBoundingClientRect().left -
        canvas.getBoundingClientRect().left +
        20;
    let y =
        clickTarget.getBoundingClientRect().top -
        canvas.getBoundingClientRect().top +
        20;

    if (clickTarget.className === "circle" || clickTarget.className === "cross") {
        return;
    }

    if (player === "Player 1") {
        let x1 =
            clickTarget.getBoundingClientRect().right -
            canvas.getBoundingClientRect().left -
            20;
        let y1 =
            clickTarget.getBoundingClientRect().bottom -
            canvas.getBoundingClientRect().top -
            20;
        let x2 =
            clickTarget.getBoundingClientRect().right -
            canvas.getBoundingClientRect().left -
            20;
        let y2 =
            clickTarget.getBoundingClientRect().bottom -
            canvas.getBoundingClientRect().top -
            20;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.moveTo(x2, y);
        ctx.lineTo(x, y2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.stroke();

        clickTarget.className = "cross";

        player = "Player 2";
    } else if (player === "Player 2") {
        x =
            clickTarget.getBoundingClientRect().right -
            clickTarget.getBoundingClientRect().width / 2 -
            canvas.getBoundingClientRect().left;
        y =
            clickTarget.getBoundingClientRect().bottom -
            clickTarget.getBoundingClientRect().height / 2 -
            canvas.getBoundingClientRect().top;

        ctx.beginPath();
        ctx.arc(x, y, 30, 0, 2 * Math.PI);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "blue";
        ctx.stroke();

        clickTarget.className = "circle";
        player = "Player 1";
    }

    for (let i = 0; i < main.children.length; i++) {
        let clickRow = Math.trunc(clickTarget.id / 3);
        let clickColumn = clickTarget.id % 3;
        let mainRow = Math.trunc(main.children[i].id / 3);
        let mainColumn = main.children[i].id % 3;
        //vertikal
        if (clickColumn === mainColumn) {
            masVertical.push(main.children[i]);

            if (masVertical.length === 3) {
                // console.log(masVertical);
                finish(masVertical);
            }
        }
        // horizontal
        if (clickRow === mainRow) {
            masHorisontal.push(main.children[i]);

            if (masHorisontal.length === 3) {
                // console.log(masHorisontal);
                finish(masHorisontal);
            }
        }

        // main diagonal
        if (clickRow === clickColumn && mainRow === mainColumn) {
            masDiagonal1.push(main.children[i]);
            if (masDiagonal1.length === 3) {
                finish(masDiagonal1);
            }
        }

        // secondary diagonal
        if (clickRow === 2 - clickColumn && mainRow === 2 - mainColumn) {
            masDiagonal2.push(main.children[i]);
            if (masDiagonal2.length === 3) {
                finish(masDiagonal2);
            }
        }
    }
});

function finish(massive) {
    let x1;
    let y1;
    let x2;
    let y2;
    let x;
    let y;


    for (let i = 0; i < massive.length - 1; i++) {
        if (massive[i].className === massive[i + 1].className) {
            num++;

            if (num === massive.length - 1) {
                alert("YOU WON !!!");

                for (let i = 0; i < massive.length; i++) {
                    if (i === 0) {
                        x =
                            massive[i].getBoundingClientRect().right -
                            massive[i].getBoundingClientRect().width / 2 -
                            canvas.getBoundingClientRect().left;
                        y =
                            massive[i].getBoundingClientRect().bottom -
                            massive[i].getBoundingClientRect().height / 2 -
                            canvas.getBoundingClientRect().top;
                    } else if (!x1 && !y1) {
                        x1 =
                            massive[i].getBoundingClientRect().right -
                            massive[i].getBoundingClientRect().width / 2 -
                            canvas.getBoundingClientRect().left;
                        y1 =
                            massive[i].getBoundingClientRect().bottom -
                            massive[i].getBoundingClientRect().height / 2 -
                            canvas.getBoundingClientRect().top;
                    } else if (!x2 && !y2) {
                        x2 =
                            massive[i].getBoundingClientRect().right -
                            massive[i].getBoundingClientRect().width / 2 -
                            canvas.getBoundingClientRect().left;
                        y2 =
                            massive[i].getBoundingClientRect().bottom -
                            massive[i].getBoundingClientRect().height / 2 -
                            canvas.getBoundingClientRect().top;
                        crossOut(x, y, x1, y1, x2, y2);
                        setTimeout(clear, 2000, massive);
                    }
                }
            }
        } else {
            num = 0;
            massive.splice(0);
        }
    }
}

function clear(massive) {
    ctx.clearRect(0, 0, 300, 300);
    massive.splice(0);
    num = 0;
    player = "Player 2";

    for (let i = 0; i < main.children.length; i++) {
        main.children[i].className = i + 1;
    }
    drawMarkup();
}

function crossOut(x, y, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
}