        
let nombresInput = prompt("Ingrese los nombres de los colaboradores separados por comas:");
let colaboradores = nombresInput.split(',').map(nombre => nombre.trim());


let habilidades = [];


for (let i = 0; i < colaboradores.length; i++) {
    let habilidadesInput = prompt(`Ingrese las habilidades para ${colaboradores[i]} separadas por comas:`);
    let habilidadesColaborador = habilidadesInput.split(',').map(habilidad => parseInt(habilidad.trim()));
    habilidades.push(habilidadesColaborador);
}


function calcularPromedioHabilidades(index) {
    let habilidadesColaborador = habilidades[index];
    let sumaHabilidades = habilidadesColaborador.reduce((total, habilidad) => total + habilidad, 0);
    let promedio = sumaHabilidades / habilidadesColaborador.length;
    return promedio;
}


function evaluarDesempenio(index) {
    let nombre = colaboradores[index];
    let promedio = calcularPromedioHabilidades(index);

    let mensaje = `Colaborador: ${nombre}\n`;
    mensaje += `Habilidades: ${habilidades[index].join(', ')}\n\n`;

    if (promedio >= 70) {
        mensaje += `${nombre} está listo para el siguiente contrato.`;
    } else {
        mensaje += `${nombre} no está listo para el siguiente contrato.`;
    }

    alert(mensaje);
}


for (let i = 0; i < colaboradores.length; i++) {
    evaluarDesempenio(i);
}