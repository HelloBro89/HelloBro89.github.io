let i = 0;

let string = document.getElementById('string');
string.style.marginTop = '50px'

let but = document.getElementById('but');
but.style.marginLeft = '30px';

let main = document.getElementById('main');

but.onclick = add;

main.onclick = del;

let checked = false;

function del(e) {

    let tar = e.target;

    checked = !checked;

    tar.checked = checked;

    let targetParent = tar.parentNode;

    if (tar.checked) {

        targetParent.style.textDecoration = 'line-through'; // перечёркнутый текст

        let buttonDel = document.createElement('input');
        buttonDel.type = 'button';
        buttonDel.value = 'удалить';
        buttonDel.id = 'check';
        buttonDel.setAttribute('style', 'margin-Left:100px; height:20px');

        targetParent.append(buttonDel);

        buttonDel.onclick = () => targetParent.remove();
    } else {

        targetParent.style.textDecoration = 'none';  //если убираю перед "target", то работет, почему ? 
        targetParent.querySelector('#check').remove();
    }
}

function add(e) {

    let task = string.value;

    i++;

    let div = document.createElement('div');

    div.id = `id${i}`;

    main.append(div);

    let findDiv = document.querySelector(`#id${i}`);

    let textNode = document.createTextNode(`${task}`);

    findDiv.prepend(textNode);

    let input = document.createElement('input');
    input.type = 'radio';
    findDiv.prepend(input);
    string.value = '';


}