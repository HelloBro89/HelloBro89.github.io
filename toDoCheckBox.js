
let i = 0;

let string = document.getElementById('string');
string.style.marginTop = '50px'

let but = document.getElementById('but');
but.style.marginLeft = '30px';

let main = document.getElementById('main');

but.onclick = add;

main.onchange = del;

function del(e) {

    let tar = e.target;

    let targetParent = tar.parentNode;

    if (tar.checked) {

        targetParent.style.textDecoration = 'line-through';

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

function add() {

    let task = string.value;

    i++;

    let div = document.createElement('div');
    div.id = `id${i}`;
    main.append(div);

    let findDiv = document.querySelector(`#id${i}`);

    let textNode = document.createTextNode(`${task}`);

    findDiv.prepend(textNode);

    let input = document.createElement('input');
    input.type = 'checkbox';
    findDiv.prepend(input);

    div.style.fontSize = '16px'

    string.value = '';

}