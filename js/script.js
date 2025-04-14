function pifTable() {
    let table = document.getElementById('pif');
    table.classList.add('pif-table-js');

    for (let i = 0; i <= 10; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('pif-tr-js');

        for (let j = 0; j <= 10; j++) {
            let td = document.createElement('td');
            td.classList.add('pif-td-js');

            if (i === 0) {
                td.textContent = j;
                td.classList.add('pif-td-header-js');

            }
            else if (j === 0) {
                td.textContent = j+i;
                td.classList.add('pif-td-header-js');
            }
            
            else {
                td.textContent = i * j;
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

pifTable();