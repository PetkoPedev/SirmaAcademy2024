function calculateVolume(event){
    event.preventDefault();
    let radiusElement = document.querySelector('input[name=radius]').value;
    
    let radius = Number(radiusElement);

    let volume = (4/3) * Math.PI * Math.pow(radius, 3);

    let volumeResultElement = document.querySelector('input[name=volume]');
    
    volumeResultElement.value = `${volume.toFixed(4)}`;
}