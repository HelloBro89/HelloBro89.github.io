let string = document.getElementById('string');
string.style.marginTop = '50px';
let but = document.getElementById('but');
but.style.marginLeft = '30px';
let main = document.getElementById('main');

let foto = new Image();
foto.src = "./IMG_1009.JPG";
foto.width = 300;
document.body.append(foto);

but.onclick = add;

main.onchange = del;

function sendGet() {

    let requestGet = new XMLHttpRequest();
    requestGet.open('GET', '/tasks', true);
    requestGet.setRequestHeader('Content-Type', 'application/json');
    requestGet.addEventListener('load', () => {

        console.log(requestGet.response)

        let pars = JSON.parse(requestGet.response);

        for (let sort of pars) {
            let div = document.createElement('div');
            div.id = pars.indexOf(sort);
            main.append(div);

            let textNode = document.createTextNode(`${sort.task}`);
            div.prepend(textNode);

            let input = document.createElement('input');
            input.type = 'checkbox';
            div.prepend(input);
        }
    });
    requestGet.send();
};

sendGet();

function del(e) {
    let tar = e.target;
    let targetParent = tar.parentNode;

    if (tar.checked) {
        targetParent.style.textDecoration = 'line-through'; // перечёркнутый текст
        let buttonDel = document.createElement('input');
        buttonDel.type = 'button';
        buttonDel.value = 'удалить';
        buttonDel.id = 'check';
        buttonDel.setAttribute('style', 'margin-Left:30px; height:20px');
        targetParent.append(buttonDel);
        buttonDel.onclick = () => targetParent.remove();
    } else {
        targetParent.style.textDecoration = 'none';
        targetParent.querySelector('#check').remove();
    }
}

function add(e) {
    e.preventDefault();

    let i = main.children.length;

    let task = string.value;

    let div = document.createElement('div');
    div.id = i;
    main.append(div);

    let textNode = document.createTextNode(`${task}`);
    div.prepend(textNode);

    let input = document.createElement('input');
    input.type = 'checkbox';
    div.prepend(input);

    div.style.fontSize = '16px';

    let jsonTask = JSON.stringify({ task: task });
    let request = new XMLHttpRequest();

    request.open('POST', '/taskData', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {

    });
    request.send(jsonTask);
    string.value = '';
}