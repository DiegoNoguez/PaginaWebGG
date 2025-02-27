function agregarRecordatorio() {
    const input = document.getElementById('recordatorioInput');
    const lista = document.getElementById('listaRecordatorios');

    if (input.value.trim() !== '') {
        const nuevoRecordatorio = document.createElement('li');
        nuevoRecordatorio.textContent = input.value;
        lista.appendChild(nuevoRecordatorio);
        input.value = '';
    }
}