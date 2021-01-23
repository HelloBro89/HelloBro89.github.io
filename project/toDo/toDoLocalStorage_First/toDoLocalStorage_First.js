let ind = 0;

let string = document.getElementById('string');
string.style.marginTop = '50px'

let but = document.getElementById('but');
but.style.marginLeft = '30px';

let clear = document.getElementById('clear');

let main = document.getElementById('main');

if (localStorage.str) {

    let info = JSON.parse(localStorage.getItem('str'));

    for (let i = 0; i < info.length; i++) {

        let div = document.createElement('div');
        div.id = `id${info[i].index}`;
        main.append(div);

        let textNode = document.createTextNode(`${info[i].text}`);
        div.prepend(textNode);

        let input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = info[i].isChecked;
        div.prepend(input);

        if (info[i].isChecked === true) {
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

                info = JSON.parse(localStorage.getItem('str'));

                for (let i = 0; i < info.length; i++) {
                    if (num === info[i].index) {
                        info.splice(i, 1);
                    }
                }
                json = JSON.stringify(info);
                localStorage.setItem('str', json);
                if (info.length === 0) {
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

    let info = JSON.parse(localStorage.getItem('str'));

    if (tar.checked) {

        targetParent.style.textDecoration = 'line-through'; // перечёркнутый текст
        let buttonDel = document.createElement('input');
        buttonDel.type = 'button';
        buttonDel.value = 'удалить';
        buttonDel.id = 'check';
        buttonDel.setAttribute('style', 'margin-Left:30px; height:20px');
        targetParent.append(buttonDel);

        for (let i = 0; i < info.length; i++) {
            if (num === info[i].index) {
                info[i].isChecked = true;
            }
        }

        let json = JSON.stringify(info);
        localStorage.setItem('str', json);

        buttonDel.onclick = () => {
            targetParent.remove();
            info = JSON.parse(localStorage.getItem('str'));

            // console.log(num + ' : ' + info[num - 1].index)
            for (let i = 0; i < info.length; i++) {
                if (num === info[i].index) {
                    info.splice(i, 1);
                }
            }
            json = JSON.stringify(info);
            localStorage.setItem('str', json);

            if (info.length === 0) {
                localStorage.clear();
            }

        }
    } else {
        targetParent.style.textDecoration = 'none';
        targetParent.querySelector('#check').remove();

        info = JSON.parse(localStorage.getItem('str'));

        for (let i = 0; i < info.length; i++) {
            if (num === info[i].index) {
                info[i].isChecked = false;
            }
        }
        let json = JSON.stringify(info);
        localStorage.setItem('str', json);

    }
}

let mas = [];
function add() {

    let task = string.value;

    ind++;

    let div = document.createElement('div');

    if (localStorage.str) {

        let info = JSON.parse(localStorage.getItem('str'));
        info.push({ text: task, isChecked: false, index: info[info.length - 1].index + 1 });
        div.id = `id${info[info.length - 1].index}`;
        let json = JSON.stringify(info);
        localStorage.setItem('str', json);

    } else {
        div.id = `id${ind}`;
        mas.push({ text: task, isChecked: false, index: ind });
        let json = JSON.stringify(mas);
        localStorage.setItem('str', json);
        mas = [];

    }
    main.append(div);

    let textNode = document.createTextNode(`${task}`);
    div.prepend(textNode);

    let input = document.createElement('input');
    input.type = 'checkbox';
    div.prepend(input);
    div.style.fontSize = '16px';

    string.value = '';
}