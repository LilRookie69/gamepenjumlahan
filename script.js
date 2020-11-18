var run = 1,
    diff, var1, var2, yans, tans, again;
while (run) {
    diff = parseInt(prompt('Masukan tingkat kesulitan \n 1.Easy\n 2.Medium\n 3.Hard\n'));
    switch (diff) {
        case 1:
            var1 = Math.floor(Math.random() * 10) + 1;
            var2 = Math.floor(Math.random() * 10) + 1;
            ans = prompt('Berapakah hasil dari ' + var1 + ' + ' + var2);
            tans = var1 + var2;
            if (ans == tans) {
                alert(' yey jawaban kamu benar ! ');
            } else {
                alert(' kamu boom! \n jawaban kamu ' + ans + ' \n hasil dari ' + var1 + '+' + var2 + ' adalah ' + tans);
            }
            break;
        case 2:
            var1 = Math.floor(Math.random() * 999) + 100;
            var2 = Math.floor(Math.random() * 999) + 100;
            ans = prompt('Berapakah hasil dari ' + var1 + ' + ' + var2);
            tans = var1 + var2;
            if (ans == tans) {
                alert(' yey jawaban kamu benar ! ');
            } else {
                alert(' kamu boom! \n jawaban kamu ' + ans + ' \n hasil dari ' + var1 + '+' + var2 + ' adalah ' + tans);
            }
            break;
        case 3:
            var1 = Math.floor(Math.random() * 9999) + 1000;
            var2 = Math.floor(Math.random() * 9999) + 1000;
            ans = prompt('Berapakah hasil dari ' + var1 + ' + ' + var2);
            tans = var1 + var2;
            if (ans == tans) {
                alert(' yey jawaban kamu benar ! ');
            } else {
                alert(' kamu boom! \n jawaban kamu ' + ans + ' \n hasil dari ' + var1 + '+' + var2 + ' adalah ' + tans);
            }
            break;
    }
    again = prompt('Ulangi lagi ? [y/n]');
    switch (again) {
        case 'y':
        case 'Y':
            run = 1;
            break;
        case 'n':
        case 'N':
            run = 0;
            break;
        default:
            alert('Invalid input');
            again = prompt('Ulangi lagi ? [y/n]');
            break;
    }
}