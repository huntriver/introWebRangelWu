function showDuties1() {
    var array = ['Recording the moment when people are attracted by art works.',
        'Propagating',
        'Recording the past exhibitions',
        'Selling',
        'Investment attraction'];
    var x = document.getElementById('dutiesNumber1').value;
    if (x < 0 || x > 5) {
        alert('wrong number!');
        return;
    }
    var y = x - 1;
    var res = '';
    while (y >= 0) {
        res += '<li>' + array[y] + '</li>';
        document.getElementById('duties1').innerHTML = res;
        y--;

    }
}

function showDuties2() {
    var array = ['Culture communication',
        'Teaching basic Chinese characters.',
        'Practicing speaking',
        'Correcting homework ',
        'Getting Chinese teaching experience'];
    var x = document.getElementById('dutiesNumber2').value;
    if (x < 0 || x > 5) {
        alert('wrong number!');
        return;
    }
    var y = x - 1;
    var res = '';
    while (y >= 0) {
        res += '<li>' + array[y] + '</li>';
        document.getElementById('duties2').innerHTML = res;
        y--;

    }
}


//for salaryCalculator page
function calc() {
    var res;
    var x = document.getElementById('rate').value;
    var y = document.getElementById('hours').value;
    var rate = parseInt(x);
    var hours = parseInt(y);
    var salary = rate * hours * 52;
    if (salary < 20000)
        res = '.The salary is too little.';
    else if (salary < 25000)
        res = '.The salary is almost enough. Let’s negotiate.';
    else
        res = '.This is a great salary for me.';
    document.getElementById('salary').innerHTML = 'The salary is:' + salary+res;
}
