function insertRow(){
    let table = document.getElementById('sampleTable');

    let rowCount = table.querySelectorAll('tr').length;

    let firstTdElement = document.createElement('td');
    firstTdElement.textContent = `Row${rowCount + 1} cell1`;

    let secondTdElement = document.createElement('td');
    secondTdElement.textContent = `Row${rowCount + 1} cell2`;

    let rowElement = document.createElement('tr');
    rowElement.appendChild(firstTdElement);
    rowElement.appendChild(secondTdElement);

    table.appendChild(rowElement);
}