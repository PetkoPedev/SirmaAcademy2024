function insertItem(event){
    event.preventDefault();

    let ulElement = document.getElementById('items');

    let liElement = document.createElement('li');

    let inputElement = document.querySelector('input').value;
    liElement.textContent = inputElement;
    ulElement.appendChild(liElement);
    inputElement.value.reset();

    console.log(liElement)
}