function highlightElements(event){
    event.preventDefault();

    let strongElements = document.querySelectorAll('p > strong');

    strongElements.forEach(strong => {
        
        let mark = document.createElement("mark");
        
        while (strong.firstChild) {
            mark.appendChild(strong.firstChild);
        }
        
        strong.replaceWith(mark);
    });
}