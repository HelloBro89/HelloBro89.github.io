let way = document.body;
let wayCanvas = document.createElement('canvas')
way.prepend(wayCanvas);

wayCanvas.setAttribute('id', 'myCanvas');

let findCanvas = document.getElementById('myCanvas');

findCanvas.setAttribute('width', 600);
findCanvas.setAttribute('height', 500);
findCanvas.setAttribute('style', 'border:1px solid #0bcddb73; background: #eee')

let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');

let findDiv = document.createElement('div');
way.prepend(findDiv);

findDiv.innerHTML = 'координаты Canvas';


//     --------------------BUTTON --------------------


//     ------------------- FIGURE --------------------


//                         CIRCLE
let circle = document.createElement('input');
way.append(circle);
circle.value = 'circle';
circle.type = 'button';
circle.style.cssText = `margin-left: 20px;
margin-top: 30px;
width: 43px;
text-align: center;
`;

circle.addEventListener('click', () => {
    checkCircle = 'on';
    checkRec = 'off';
    findCanvas.addEventListener('mousedown', startCoor);

})


//                         RECTANGLE

let rectangle = document.createElement('input');
way.append(rectangle);
rectangle.value = 'rectangle';
rectangle.type = 'button';
rectangle.style.cssText = `margin-left: 20px;
margin-top: 30px;
width: 70px;
text-align: center;
`;

rectangle.addEventListener('click', () => {
    checkRec = 'on';
    checkCircle = 'off';
    findCanvas.addEventListener('mousedown', startCoor);
});


//                                  LINE

let lineS = document.createElement('input');
way.append(lineS);
lineS.value = 'line';
lineS.type = 'button';
lineS.style.cssText = `margin-left: 20px;
margin-top: 30px;
width: 70px;
text-align: center;
`;

lineS.addEventListener('click', () => {
    checkRec = 'off';
    checkCircle = 'off';
    findCanvas.addEventListener('mousedown', startCoor);
})


//  ---------------------- COLOR ---------------------------------



//                          RED

let buttonRed = document.createElement('input');
way.append(buttonRed);

buttonRed.type = 'button';
buttonRed.style.marginLeft = '50px';
buttonRed.style.marginTop = '10px';
buttonRed.value = 'color';
buttonRed.style.backgroundColor = 'red';

buttonRed.onclick = () => lineColor = 'red';


//                          BLACK

let buttonBlack = document.createElement('input');
way.append(buttonBlack);
buttonBlack.type = 'button';
buttonBlack.value = 'color';
buttonBlack.style.cssText = `margin-left: 10px;
margin-top: 10px;
width: 43px;
color: white;
background-color: black; 
text-align: center;
`;

buttonBlack.onclick = () => lineColor = 'black';


//    ----------------   EVENT CREATION --------------------
let x = 300;
let y = 250;
let x1 = 300;
let y1 = 0;

function res() {
    x = 300;
    y = 250;
    x1 = 0;
    y1 = 250;
}

let canvasX = findCanvas.getBoundingClientRect().x;
let canvasY = findCanvas.getBoundingClientRect().y;

let lineColor = 'black';

let indLine = [];
let indRect = [];
let indCircle = [];

let checkCircle = 'off';
let checkRec = 'off';

let saveMass = [];

class Coordinates {
    constructor(x, y, x1, y1, lineColor) {
        this.pointX = x;
        this.pointY = y;
        this.pointX1 = x1;
        this.pointY1 = y1;
        this.col = lineColor;
    }

    drawLine() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.moveTo(this.pointX, this.pointY);
        ctx.lineTo(this.pointX1, this.pointY1);
        ctx.stroke();
    }

    drawRectangle() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.rect(this.pointX, this.pointY, this.pointX1 - this.pointX, this.pointY1 - this.pointY);
        ctx.stroke();
    }

    drawCircle() {
        ctx.beginPath();
        ctx.arc(this.pointX, this.pointY, Math.hypot(this.pointX1 - this.pointX, this.pointY1 - this.pointY), 0, 2 * Math.PI);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.stroke();
    }
}

let point = new Coordinates(x, y, x1, y1, lineColor);

function change() {
    point = new Coordinates(x, y, x1, y1, lineColor);
}

findCanvas.addEventListener('click', (e) => {
    findDiv.innerHTML = (e.clientX - canvasX) + ':' + (e.clientY - canvasY);
})

//    ----------------------------------------------------------------------
//-------------------------------------Start -----------------------------------------
//----------------------------------------------------------------------

findCanvas.addEventListener('mousedown', startCoor);

function startCoor(e) {



    findCanvas.addEventListener('mousemove', setCoordinates);
}


function recovery() {

    for (let sort of indLine) {
        point = new Coordinates(saveMass[sort].pointX, saveMass[sort].pointY, saveMass[sort].pointX1, saveMass[sort].pointY1, saveMass[sort].lineColor);
        point.drawLine();
    }

    for (let sort of indCircle) {
        point = new Coordinates(saveMass[sort].pointX, saveMass[sort].pointY, saveMass[sort].pointX1, saveMass[sort].pointY1, saveMass[sort].lineColor);
        point.drawCircle();
    }
    for (let sort of indRect) {
        point = new Coordinates(saveMass[sort].pointX, saveMass[sort].pointY, saveMass[sort].pointX1, saveMass[sort].pointY1, saveMass[sort].lineColor);
        point.drawRectangle();
    }
}

function setCoordinates(e) {

    ctx.clearRect(0, 0, 600, 500);


    change();

    recovery();

    if (checkRec === 'off' && checkCircle === "off") {
        point.drawLine();
    }

    if (checkCircle === 'on') {
        point.drawCircle();
    }

    if (checkRec === 'on') {
        //change();
        point.drawRectangle();
    }
}

findCanvas.addEventListener('mouseup', finish);

function finish(e) {



    findCanvas.removeEventListener('mousemove', setCoordinates);

    // x1 = e.clientX - canvasX;
    // y1 = e.clientY - canvasY;

    change();

    if (x !== x1 || y !== y1) {

        saveMass.push(point);

        if (checkRec === 'off' && checkCircle === 'off') {

            indLine.push(saveMass.length - 1);
            point.drawLine();

        }

        if (checkCircle === 'on') {

            indCircle.push(saveMass.length - 1);
            point.drawCircle();
        }

        if (checkRec === 'on') {

            indRect.push(saveMass.length - 1);
            point.drawRectangle();
        }
    }

}

function pp() {
    checkRec = 'on';
}
findCanvas.addEventListener('contextmenu', clearLastLine); // если я удалю 
// событие 'contextmenu', то я не смогу убрать стандартное событие браузера
// которое вызывает сонтекстное меню

function clearLastLine() {


    if (indLine[indLine.length - 1] === saveMass.length - 1) {
        indLine.pop();

    } else if (indRect[indRect.length - 1] === saveMass.length - 1) {
        indRect.pop();
    } else {
        indCircle.pop();
    }

    ctx.clearRect(0, 0, 600, 500);

    saveMass.pop(point);

    recovery();
    //event.preventDefault();

}

setCoordinates();
finish();
pp();
res();
setCoordinates();
finish();