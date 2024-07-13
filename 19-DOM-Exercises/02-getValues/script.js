function getFormvalue(event){
    event.preventDefault();
    let fname = document.querySelector('input[name=fname]').value;
    let lname = document.querySelector('input[name=lname]').value;

    console.log(fname)
    console.log(lname)
}