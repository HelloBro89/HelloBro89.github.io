//      ------ HTML creation  --------
let way = document.body;
let wayCanvas = document.createElement('canvas')
way.prepend(wayCanvas);

wayCanvas.setAttribute('id', 'myCanvas');

let findCanvas = document.getElementById('myCanvas');

findCanvas.setAttribute('width', 600);
findCanvas.setAttribute('height', 500);
findCanvas.setAttribute('style', 'border:1px solid #0bcddb73; background: #eee')

// let c = document.getElementById('myCanvas');
let ctx = findCanvas.getContext('2d');

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
    checkTriangle = 'off';
    findCanvas.addEventListener('mousedown', startCoor);

})

//                         TRIANGLE

let triangle = document.createElement('input');
way.append(triangle);
triangle.value = 'triangle';
triangle.type = 'button';
triangle.style.cssText = `margin-left: 20px;
        margin-top: 30px;
        width: 70px;
        text-align: center;
        `;

triangle.addEventListener('click', () => {
    checkTriangle = 'on';
    checkRec = 'off';
    checkCircle = 'off';
    findCanvas.addEventListener('mousedown', startCoor);
});


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
    checkTriangle = 'off';

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
    checkTriangle = 'off';
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
let x2 = Number();
let y2 = Number();


let canvasX = findCanvas.getBoundingClientRect().x;
let canvasY = findCanvas.getBoundingClientRect().y;

let lineColor = 'black';

let checkCircle = 'off';
let checkRec = 'off';
let checkTriangle = 'off';
let checkNum = 0;

let saveMass = [];

class Coordinates {
    constructor(x, y, x1, y1, lineColor) {
        this.pointX = x;
        this.pointY = y;
        this.pointX1 = x1;
        this.pointY1 = y1;
        this.col = lineColor;

    }
}
class Line extends Coordinates {
    constructor(x, y, x1, y1, lineColor) {
        super(x, y, x1, y1, lineColor);
    }

    drawing() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.moveTo(this.pointX, this.pointY);
        ctx.lineTo(this.pointX1, this.pointY1);
        ctx.stroke();
    }
}

class Triangle extends Coordinates {

    constructor(x, y, x1, y1, lineColor, x2, y2) {
        super(x, y, x1, y1, lineColor);
        this.pointX2 = x2;
        this.pointY2 = y2;
    }
    drawing() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.moveTo(this.pointX, this.pointY);
        ctx.lineTo(this.pointX1, this.pointY1);
        ctx.lineTo(this.pointX2, this.pointY2);
        ctx.lineTo(this.pointX, this.pointY);
        ctx.stroke();
    }

}
class Rectangle extends Coordinates {
    constructor(x, y, x1, y1, lineColor) {
        super(x, y, x1, y1, lineColor);
    }
    drawing() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.rect(this.pointX, this.pointY, this.pointX1 - this.pointX, this.pointY1 - this.pointY);
        ctx.stroke();
    }
}

class Circle extends Coordinates {
    constructor(x, y, x1, y1, lineColor) {
        super(x, y, x1, y1, lineColor);
    }
    drawing() {
        ctx.beginPath();
        ctx.arc(this.pointX, this.pointY, Math.hypot(this.pointX1 - this.pointX, this.pointY1 - this.pointY), 0, 2 * Math.PI);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.col;
        ctx.stroke();
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

        if (checkTriangle === 'on') {
            if (checkNum === 0) {
                x = e.clientX - canvasX;
                y = e.clientY - canvasY;
                checkNum = 1;
            } else if (checkNum === 1) {
                x1 = e.clientX - canvasX;
                y1 = e.clientY - canvasY;
                checkNum = 2;
            } else if (checkNum === 2) {
                x2 = e.clientX - canvasX;
                y2 = e.clientY - canvasY;
                checkNum = 0;
                let triangleObj = new Triangle(x, y, x1, y1, lineColor, x2, y2);
                triangleObj.drawing();
                saveMass.push(triangleObj);
                console.log(saveMass);
            }
        } else {
            x = e.clientX - canvasX;
            y = e.clientY - canvasY;

            findCanvas.addEventListener('mousemove', setCoordinates);
        }
    }
}

function setCoordinates(e) {

    ctx.clearRect(0, 0, 600, 500);

    x1 = e.clientX - canvasX;
    y1 = e.clientY - canvasY;

    for (let sort of saveMass) {
        sort.drawing();
    }

    if (checkRec === 'off' && checkCircle === "off" && checkTriangle === 'off') {
        let lineObj = new Line(x, y, x1, y1, lineColor);
        lineObj.drawing();
    }

    if (checkCircle === 'on') {
        let circleObj = new Circle(x, y, x1, y1, lineColor);
        circleObj.drawing();
    }

    if (checkRec === 'on') {
        let rectangleObj = new Rectangle(x, y, x1, y1, lineColor);
        rectangleObj.drawing();
    }
}

findCanvas.addEventListener('mouseup', finish);

function finish(e) {

    if (event.which === 1) {

        findCanvas.removeEventListener('mousemove', setCoordinates);

        x1 = e.clientX - canvasX;
        y1 = e.clientY - canvasY;

        if (x !== x1 || y !== y1) {


            if (checkRec === 'off' && checkCircle === 'off' && checkTriangle === 'off') {

                let lineObj = new Line(x, y, x1, y1, lineColor);

                saveMass.push(lineObj);
                console.log(saveMass);
            }

            if (checkCircle === 'on') {
                let circleObj = new Circle(x, y, x1, y1, lineColor,);

                saveMass.push(circleObj);
                console.log(saveMass);
            }

            if (checkRec === 'on') {
                let rectangleObj = new Rectangle(x, y, x1, y1, lineColor);
                saveMass.push(rectangleObj);
                console.log(saveMass);
            }
        }
    }
}
findCanvas.addEventListener('contextmenu', () => {

    ctx.clearRect(0, 0, 600, 500);
    saveMass.pop();

    for (let sort of saveMass) {
        sort.drawing();
    }
    event.preventDefault();
})

