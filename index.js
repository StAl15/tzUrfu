// function scroll() {

// }

var clicked = false;

function change(clicked) {
    var date1 = document.getElementById('date1');
    var date2 = document.getElementById('date2');
    var date3 = document.getElementById('date3');
    var date4 = document.getElementById('date4');
    var budget = document.getElementById('budget')
    var contract = document.getElementById('contract');

    if (clicked === false) {
        date1.innerHTML = '20.06 - 08.08';
        date2.innerHTML = '20.06 - 08.08';
        date3.innerHTML = '04.07 - 13.08';
        date4.innerHTML = '04.07 - 13.09 и 22.08 - 12.09';
        budget.style.color = 'rgba(30, 67, 145, 1)'
        contract.style.color = 'rgba(34, 34, 34, 0.5)'

    } else {
        date1.innerHTML = '20.06 - 23.09';
        date2.innerHTML = '20.06 - 28.10';
        date3.innerHTML = '04.07 - 13.08 и 22.08 - 24.09';
        date4.innerHTML = '04.07 - 13.08 и 22.08 - 29.10';
        budget.style.color = 'rgba(34, 34, 34, 0.5)'
        contract.style.color = 'rgba(30, 67, 145, 1)'
    }
}



