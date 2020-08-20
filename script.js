const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

createCalendar(document.body, 2020, 7);

function createCalendar(elem, year, mon) {
    let table = '<table><tr><th>MON</th><th>Tues</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr><tr>';

    let day = new Date(year, mon);

    // Fill spaces before the first day of that month
    for (let i = 0; i < getDay(day); i++) {
        table += '<td></td>';
    }

    while (day.getMonth() == mon) {

        table += '<td>' + day.getDate() + '</td>';
        if (getDay(day) % 7 == 6) {
            table += '</tr></tr>';
        }
        day.setDate(day.getDate() + 1);
    }

    // Fill spaces after the last day of that month
    if (getDay(day) != 0) {
        for (let i = getDay(day); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';

    elem.innerHTML = table;
}

// The default getDay is starting from Sunday. We need to do some changes.
function getDay(date) {
    return date.getDay() >= 1 ? date.getDay() - 1 : 6;
}
