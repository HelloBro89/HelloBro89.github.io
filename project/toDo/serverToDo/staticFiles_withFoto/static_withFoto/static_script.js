let string = document.getElementById('string');
string.style.marginTop = '50px';
let but = document.getElementById('but');
but.style.marginLeft = '30px';
let main = document.getElementById('main');

let foto = new Image();
foto.src = "./mem.jpg";
foto.width = 300;
document.body.append(foto);

but.onclick = add;

main.onchange = del;


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

    string.value = '';
}