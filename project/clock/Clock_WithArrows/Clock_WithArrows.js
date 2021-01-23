let b = document.getElementById("myCanvas");
let ctx = b.getContext("2d");
let img = new Image();
img.src = "Desert_Electric.jpg";


let imgMin = new Image();
imgMin.src = "super-removebg-preview.png";


function first(xSec, ySec, xMin, yMin, xHour, yHour, xAlarmHour, yAlarmMin) {

    ctx.clearRect(0, 0, 600, 500)

    ctx.beginPath()
    let pattern = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pattern;
    ctx.arc(300, 250, 220, 0, 2 * Math.PI);
    ctx.lineWidth = 30;
    ctx.strokeStyle = '#000e0ed5';
    ctx.fill()
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 250, 237, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 250, 207, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();



    ctx.beginPath();                    //деления
    ctx.strokeStyle = '#FFA500';
    ctx.lineWidth = 8;
    ctx.moveTo(105, 250);
    ctx.lineTo(120, 250);
    ctx.moveTo(495, 250);
    ctx.lineTo(480, 250);
    ctx.moveTo(300, 55);
    ctx.lineTo(300, 70);
    ctx.moveTo(300, 445);
    ctx.lineTo(300, 430);
    ctx.stroke();

    ctx.beginPath();                    //цифры
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'FFA500';
    ctx.font = "65px Mv boli";

    ctx.strokeText("12", 263, 130);
    ctx.strokeText("9", 132, 267);
    ctx.strokeText("6", 275, 415);
    ctx.strokeText("3", 430, 270);
    ctx.stroke();
    ctx.drawImage(imgMin, 199, 80, 200, 200);

    //ctx.drawImage(imgMin, 199, 80, 200, 200); // почему работает тольо если вставляю начиная с этого места

    /* ctx.beginPath();            //часовая 
     ctx.lineWidth = 15;
     ctx.strokeStyle = 'black';
     ctx.moveTo(300, 250);
     ctx.lineTo(xHour, yHour);
     ctx.stroke();*/

    /*ctx.beginPath()          //минутная
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'green';
    ctx.moveTo(300, 250);
    ctx.lineTo(xMin, yMin);
    ctx.stroke();*/

    //ctx.drawImage(imgMin, 100, 100, 200, 200);
    /*ctx.beginPath();          //секундная    
    ctx.lineWidth = 1;
    ctx.moveTo(300, 250);
    ctx.lineTo(xSec, ySec);
    ctx.strokeStyle = 'blue'
    ctx.stroke();*/

    /*ctx.beginPath()         // будильник
    ctx.lineWidth = 1;
    ctx.moveTo(300, 250);
    ctx.lineTo(xAlarmHour, yAlarmMin);
    ctx.strokeStyle = 'red'
    ctx.stroke();*/


}


let date = new Date();
let sumSec = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()

let degSec = sumSec * (360 / 60);
let degMin = sumSec * (360 / 3600);
let degHour = sumSec * (360 / (12 * 3600));

let creatId;


function start(setAlarmHH, setAlarmMM) {
    clearInterval(creatId);
    let degAlarm = ((setAlarmHH * 3600) + (setAlarmMM * 60)) * (360 / (12 * 3600))


    creatId = setInterval(() => {
        degSec += (360 / 60);
        degMin += (360 / 3600);
        degHour += (360 / (12 * 3600));

        if (Math.floor(degHour * 100) / 100 === Math.floor(degAlarm * 100) / 100) {
            stop()
        }
        first(
            300 + (Math.sin(degSec * Math.PI / 180) * 180),
            250 - (Math.cos(degSec * Math.PI / 180) * 180),
            300 + (Math.sin(degMin * Math.PI / 180) * 160),
            250 - (Math.cos(degMin * Math.PI / 180) * 160),
            300 + (Math.sin(degHour * Math.PI / 180) * 120),
            250 - (Math.cos(degHour * Math.PI / 180) * 120),
            300 + (Math.sin(degAlarm * Math.PI / 180) * 200),
            250 - (Math.cos(degAlarm * Math.PI / 180) * 200)
        );
    }, 1000)
}

function start1() {

    let date = new Date();
    let sumSec = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()

    let degSec = (sumSec * (360 / 60)) + (360 / 60);
    let degMin = (sumSec * (360 / 3600)) + (360 / 3600);
    let degHour = (sumSec * (360 / (12 * 3600))) + (360 / (12 * 3600));

    creatId = setInterval(() => {
        degSec += (360 / 60);
        degMin += (360 / 3600);
        degHour += (360 / (12 * 3600));

        first(
            300 + (Math.sin(degSec * Math.PI / 180) * 180),
            250 - (Math.cos(degSec * Math.PI / 180) * 180),
            300 + (Math.sin(degMin * Math.PI / 180) * 160),
            250 - (Math.cos(degMin * Math.PI / 180) * 160),
            300 + (Math.sin(degHour * Math.PI / 180) * 120),
            250 - (Math.cos(degHour * Math.PI / 180) * 120),

        );
    }, 1000)
}

function stop() {
    clearInterval(creatId);
    first(
        300 + (Math.sin(degSec * Math.PI / 180) * 180),
        250 - (Math.cos(degSec * Math.PI / 180) * 180),
        300 + (Math.sin(degMin * Math.PI / 180) * 160),
        250 - (Math.cos(degMin * Math.PI / 180) * 160),
        300 + (Math.sin(degHour * Math.PI / 180) * 120),
        250 - (Math.cos(degHour * Math.PI / 180) * 120)
    )
}

function reset() {
    clearInterval(creatId);
    start1()
}

function alarm(setHour, setMin) {
    clearInterval(creatId);
    start(setHour, setMin);
}
start1()
alarm(19, 33)