
let string = document.getElementById('string');
string.style.marginTop = '50px'

let but = document.getElementById('but');
but.style.marginLeft = '30px';

let clear = document.getElementById('clear');

let main = document.getElementById('main');

if (localStorage.length > 0) {

    let mas = JSON.parse(localStorage.getItem('str'));

    for (let i = 0; i < mas.length; i++) {

        let div = document.createElement('div');
        div.id = `id${mas[i].index}`;
        main.append(div);

        let textNode = document.createTextNode(`${mas[i].text}`);
        div.prepend(textNode);

        let input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = mas[i].isChecked;
        div.prepend(input);

        if (mas[i].isChecked === true) {
            let buttonDel = document.createElement('input');
            buttonDel.type = 'button';
            buttonDel.value = 'удалить';
            buttonDel.id = 'check';
            buttonDel.setAttribute('style', 'margin-Left:30px; height:20px');
            div.append(buttonDel);
            div.style.textDecoration = 'line-through';

            buttonDel.onclick = (e) => {
                e.target.parentNode.remove();
                let num = Number(e.target.parentNode.id.slice(2));

                mas = JSON.parse(localStorage.getItem('str'));

                for (let i = 0; i < mas.length; i++) {
                    if (num === mas[i].index) {
                        mas.splice(i, 1);
                    }
                }

                json = JSON.stringify(mas);
                localStorage.setItem('str', json);
                if (mas.length === 0) {
                    localStorage.clear();
                }
            }
        }
    }
}

clear.onclick = () => localStorage.clear();

but.onclick = add;

main.onchange = del;

function del(e) {

    let tar = e.target;

    let targetParent = tar.parentNode;

    let num = Number(targetParent.id.slice(2));

    let mas = JSON.parse(localStorage.getItem('str'));

    if (tar.checked) {

        targetParent.style.textDecoration = 'line-through'; // перечёркнутый текст
        let buttonDel = document.createElement('input');
        buttonDel.type = 'button';
        buttonDel.value = 'удалить';
        buttonDel.id = 'check';
        buttonDel.setAttribute('style', 'margin-Left:30px; height:20px');
        targetParent.append(buttonDel);

        for (let i = 0; i < mas.length; i++) {
            if (num === mas[i].index) {
                mas[i].isChecked = true;
            }
        }

        let json = JSON.stringify(mas);
        localStorage.setItem('str', json);

        buttonDel.onclick = () => {
            targetParent.remove();
            mas = JSON.parse(localStorage.getItem('str'));

            for (let i = 0; i < mas.length; i++) {
                if (num === mas[i].index) {
                    mas.splice(i, 1);
                }
            }

            json = JSON.stringify(mas);
            localStorage.setItem('str', json);

            if (mas.length === 0) {
                localStorage.clear();
            }

        }
    } else {
        targetParent.style.textDecoration = 'none';
        targetParent.querySelector('#check').remove();

        mas = JSON.parse(localStorage.getItem('str'));

        for (let i = 0; i < mas.length; i++) {
            if (num === mas[i].index) {
                mas[i].isChecked = false;
            }
        }

        let json = JSON.stringify(mas);
        localStorage.setItem('str', json);

    }
}

function add() {

    let task = string.value;

    let div = document.createElement('div');

    let mas = [];

    if (localStorage.length > 0) {

        mas = JSON.parse(localStorage.getItem('str'));
    }

    let ind = mas.length > 0 ? mas[mas.length - 1].index + 1 : 0;

    div.id = `id${ind}`;
    mas.push({ text: task, isChecked: false, index: ind });

    let json = JSON.stringify(mas);
    localStorage.setItem('str', json);

    main.append(div);

    let textNode = document.createTextNode(`${task}`);
    div.prepend(textNode);

    let input = document.createElement('input');
    input.type = 'checkbox';
    div.prepend(input);
    div.style.fontSize = '16px';

    string.value = '';
}