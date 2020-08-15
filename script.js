const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// First draft, will do data verification
let year = prompt('Which year do you want to see?');
let month = prompt('Which month do you want to see?');

createCalendar(document.body, year, month - 1);

function createCalendar(elem, year, month) {
    let h2 = document.createElement('h2');
    document.body.append(h2);
    h2.textContent = months[month] + ' ' + year;
    h2.style.cssText = 'text-align: center;'; 

   
    let table = document.createElement('table');
    let trHead = document.createElement('tr');

    // Create th of the table
    for (i in weekDays) {
        let th = document.createElement('th');
        th.textContent = weekDays[i];
        trHead.append(th);
        table.append(trHead);
    }

    let firstDay = new Date(year, month - 1);
    let dayStart = transform(firstDay.getDay());

    let lastDay = new Date(year, month, 0);
    let dayEnd = transform(lastDay.getDay());

    let numberOfRows = Math.ceil((lastDay.getDate() + dayStart) / 7);

    // Create the table
    for (let i = 0; i < numberOfRows; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let j = 0; j < 7; j++) {
            let td = document.createElement('td');
            tr.append(td);
        }
    }

    // Fill in numbers based on the first day of the month
    let firstDayRow = 0;
    let firstDayCol = dayStart;

    for (let i = 1; i <= lastDay.getDate(); i++) {
        let temp = i + firstDayCol;
        table.rows[Math.floor(temp / 7) + 1].cells[temp % 7].textContent = i;
    }

    table.style.cssText = 'margin:auto; font-size: 20px; padding: 10px; width: 50%; text-align:center';
    elem.append(table);
}

// The default getDay is starting from Sunday. We need to do some changes.
function transform(n) {
    return n >= 1 ? n - 1 : 6;
}

// Do some style ~~ More TBC
document.body.style.fontFamily = 'Courier New', Courier, monospace;