//      ------ HTML creation  --------
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
let x = Number();
let y = Number();
let x1 = Number();
let y1 = Number();
let lineColor = 'black';

let canvasX = findCanvas.getBoundingClientRect().x;
let canvasY = findCanvas.getBoundingClientRect().y;



let indLine = [];
let indRect = [];
let indCircle = [];

let checkCircle = 'off';
let checkRec = 'off';

let saveMass = [];

let point = {
    x,
    y,
    x1,
    y1,
    lineColor
}

function change() {
    point = {
        x,
        y,
        x1,
        y1,
        lineColor
    }
}

findCanvas.addEventListener('click', (e) => {
    findDiv.innerHTML = (e.clientX - canvasX) + ':' + (e.clientY - canvasY);
})

//    ----------------------------------------------------------------------
//-------------------------------------Start -----------------------------------------
//----------------------------------------------------------------------

findCanvas.addEventListener('mousedown', startCoor);

function startCoor(e) {

    if (event.which === 1) {
        x = e.clientX - canvasX;
        y = e.clientY - canvasY;

        findCanvas.addEventListener('mousemove', setCoordinates);
    }
}

function recovery() {

    for (let sort of indLine) {
        drawLine(saveMass[sort].x, saveMass[sort].y, saveMass[sort].x1, saveMass[sort].y1, saveMass[sort].lineColor);
    }

    for (let sort of indRect) {
        drawRectangle(saveMass[sort].x, saveMass[sort].y, saveMass[sort].x1, saveMass[sort].y1, saveMass[sort].lineColor);;
    }
    for (let sort of indCircle) {
        drawCircle(saveMass[sort].x, saveMass[sort].y, saveMass[sort].x1, saveMass[sort].y1, saveMass[sort].lineColor);
    }
}

function setCoordinates(e) {


    ctx.clearRect(0, 0, 600, 500);

    x1 = e.clientX - canvasX;
    y1 = e.clientY - canvasY;

    recovery();

    if (checkRec === 'off' && checkCircle === "off") {
        drawLine(x, y, x1, y1, lineColor);
    }

    if (checkCircle === 'on') {
        drawCircle(x, y, x1, y1, lineColor);
    }

    if (checkRec === 'on') {
        drawRectangle(x, y, x1, y1, lineColor);
    }
}

function drawRectangle(x, y, x1, y1, lineColor) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = lineColor;
    ctx.rect(x, y, x1 - x, y1 - y);
    ctx.stroke();
}

function drawCircle(x, y, x1, y1, lineColor) {
    ctx.beginPath();
    ctx.arc(x, y, Math.hypot(x1 - x, y1 - y), 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = lineColor;
    ctx.stroke();
}

function drawLine(x, y, x1, y1, lineColor) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

findCanvas.addEventListener('mouseup', finish);

function finish(e) {

    if (event.which === 1) {

        findCanvas.removeEventListener('mousemove', setCoordinates);

        x1 = e.clientX - canvasX;
        y1 = e.clientY - canvasY;
        change();

        if (x !== x1 || y !== y1) {

            saveMass.push(point);

            if (checkRec === 'off' && checkCircle === 'off') {

                indLine.push(saveMass.length - 1);
                drawLine(x, y, x1, y1, lineColor);

            }

            if (checkCircle === 'on') {

                indCircle.push(saveMass.length - 1);
                drawCircle(x, y, x1, y1, lineColor);
            }

            if (checkRec === 'on') {

                indRect.push(saveMass.length - 1);
                drawRectangle(x, y, x1, y1, lineColor);
            }
        }
    }
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
    event.preventDefault();
}