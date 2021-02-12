
let way = document.body;
let findInput = document.createElement('input');
findInput.setAttribute('value', 'coordinates');
way.prepend(findInput);


let div = document.createElement('div');
div.setAttribute('style', 'width:100%; height:600px; background-color: #f0f0f0');
way.append(div);


let canvasX = div.getBoundingClientRect().x;
let canvasY = div.getBoundingClientRect().y;

function getCoordinates1(coor) {
    div.innerHTML = (event.clientX - canvasX) + ':' + (event.clientY - canvasY);
}

function getCoordinates(coor) {
    findInput.value = event.clientX + ':' + event.clientY;
}
div.addEventListener('mousemove', getCoordinates);
div.addEventListener('mousemove', getCoordinates1);