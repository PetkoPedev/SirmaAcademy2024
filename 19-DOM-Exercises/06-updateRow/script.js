function changeContent(){
    let tableElement = document.getElementById('myTable');

    let tableRow = tableElement.querySelector('tr:nth-of-type(2)');
    let tableData = tableRow.querySelector('td:nth-of-type(2)');

    tableData.textContent = 'Data changed.'
}