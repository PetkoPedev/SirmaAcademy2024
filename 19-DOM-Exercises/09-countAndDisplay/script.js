function getOptions(){
    let optionElements = document.querySelectorAll('#mySelect > option');

    let optionElementArray = Array.from(optionElements);

    let options = optionElementArray.map(option => option.textContent).join(', ');

    alert(options);
}