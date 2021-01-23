function _main() {
    let string = document.getElementById('string');
    string.style.marginTop = '50px';

    let but = document.getElementById('but');
    but.style.marginLeft = '30px';

    let main = document.getElementById('main');

    document.getElementById('clear').onclick = () => localStorage.clear();

    but.onclick = addTask;

    document.getElementById('main').onchange = checkCheckbox;

    if (localStorage.length > 0) {

        let mas = JSON.parse(localStorage.getItem('str'));

        for (let i = 0; i < mas.length; i++) {

            let div = document.createElement('div');
            div.id = `${mas[i].index}`;
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
                    let num = Number(e.target.parentNode.id);

                    delElemInMassive(mas, num);
                    setStringify(mas);

                    if (mas.length === 0) {
                        localStorage.clear();
                    }
                }
            }
        }
    }
}

_main();

function setStringify(massive) {
    json = JSON.stringify(massive);
    localStorage.setItem('str', json);
}

function createButtonDelete(targerParent, buttonDel) {
    targerParent.style.textDecoration = 'line-through'; // перечёркнутый текст
    buttonDel.type = 'button';
    buttonDel.value = 'удалить';
    buttonDel.id = 'check';
    buttonDel.setAttribute('style', 'margin-Left:30px; height:20px');
    targerParent.append(buttonDel);
}

function setPropertyIsChecked(boolean, massDB, numId) {
    for (let i = 0; i < massDB.length; i++) {
        if (numId === massDB[i].index) {
            massDB[i].isChecked = boolean;
        }
    }
}

function delElemInMassive(massDB, numId) {
    for (let i = 0; i < massDB.length; i++) {
        if (numId === massDB[i].index) {
            massDB.splice(i, 1);
        }
    }
}

function addTask() {

    let task = string.value;
    let div = document.createElement('div');
    let mas = [];

    if (localStorage.length > 0) {
        mas = JSON.parse(localStorage.getItem('str'));
    }

    let ind = mas.length > 0 ? mas[mas.length - 1].index + 1 : 0;

    div.id = `${ind}`;
    mas.push({ text: task, isChecked: false, index: ind });
    setStringify(mas);
    main.append(div);

    let textNode = document.createTextNode(`${task}`);
    div.prepend(textNode);

    let input = document.createElement('input');
    input.type = 'checkbox';
    div.prepend(input);
    div.style.fontSize = '16px';

    string.value = '';
}

function checkCheckbox(e) {
    let targetParent = e.target.parentNode;
    let num = Number(targetParent.id);
    let mas = JSON.parse(localStorage.getItem('str'));

    if (e.target.checked) {
        let buttonDel = document.createElement('input');
        createButtonDelete(targetParent, buttonDel);
        setPropertyIsChecked(true, mas, num);
        setStringify(mas);

        buttonDel.onclick = () => {
            targetParent.remove();
            mas = JSON.parse(localStorage.getItem('str'));

            delElemInMassive(mas, num);
            setStringify(mas);

            if (mas.length === 0) {
                localStorage.clear();
            }
        }
    } else {
        targetParent.style.textDecoration = 'none';
        targetParent.querySelector('#check').remove();
        setPropertyIsChecked(false, mas, num);
        setStringify(mas);
    }
}