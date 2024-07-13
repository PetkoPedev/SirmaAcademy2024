function createTable() {
    let table = document.getElementById('myTable');
    let rowsCount = document.querySelector('input[name=rowsCount]').value;
    let columnsCount = document.querySelector('input[name=columnsCount]').value;

    for (let i = 0; i < rowsCount; i++) {
        let rowElement = document.createElement('tr');

        for (let j = 0; j < columnsCount; j++) {
            let tdElement = document.createElement('td');
            tdElement.textContent = `Row-${i} Column=${j}`;
            rowElement.appendChild(tdElement);
        }
        
        table.appendChild(rowElement);
    }

}