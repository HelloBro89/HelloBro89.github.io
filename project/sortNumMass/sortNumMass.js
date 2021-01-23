let num = [5, 2, 6, 9, 4, 5, 5, 3, 3, 1, 7, 3, 8];
function sort(mas) {
    let check = true;
    for (let i = 0; i < mas.length; i++) {
        if (check === false) {
            i = 0;
        }
        let current = mas[i];
        let ind = mas.indexOf(current);
        for (let i = ind + 1; i < mas.length; i++) {
            if (current > mas[i]) {
                mas.push(current);
                mas.splice(ind, 1);
                check = false;
                break;
            } else {
                check = true;
            }
        }
    }
    console.log(mas);
}
sort(num);