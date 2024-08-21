function getInfo() {
    let indiceOrigen = document.getElementById('from').selectedIndex;
    let origen = document.getElementById('from').value;
    let indiceDestino = document.getElementById('to').selectedIndex;
    let destino = document.getElementById('to').value;
    let fechaOrigen = document.getElementById('fromDate').value;
    let fechaDestino = document.getElementById('toDate').value;
    indiceOrigen === 1 && indiceDestino === 4 || indiceOrigen === 2 && indiceDestino === 1 ? escala = true : escala = false
    escala === true ? mensaje ='Ojo! Tu vuelo tiene una escala.' : mensaje = '¡Tu vuelo no tiene una escala!';
    document.getElementById('trans').innerText = mensaje;
    document.getElementById('origin').innerText = origen
    document.getElementById('dest').innerHTML = destino
    document.getElementById('originDate').innerHTML = fechaOrigen
    document.getElementById('destDate').innerHTML = fechaDestino
}

