let sum = '';
let info = prompt('введите выражение');
let addit = 0;
let multip = 1;
let nak = 0;
let tak = 1;

for (let i = 0; i < info.length; i++) {

    let symb = info[i];

    if (symb >= '0' && '9' >= symb) {
        sum += symb;

        if (nak === '') {
            tak += sum;
            sum = '';
        }
    }

    else if (symb === '+') {
        sum = Number(sum);
        if (tak === 1) {
            tak = 0;
        }
        multip *= tak;
        addit += multip;
        multip = 1;
        addit += sum;

        tak = 1;
        sum = '';
        nak = 0;
    }
    else if (symb === '*') {
        if (sum === '') {
            multip *= tak;
            tak = '';
        }
        else {
            multip *= tak;
            multip *= sum;
            sum = '';
            nak = '';
            tak = '';
        }
    }

}
if (tak === 1) {
    tak = 0;
}
sum = Number(sum);
multip *= tak;
addit += sum;
addit += multip;
alert(addit)