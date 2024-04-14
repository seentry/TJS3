let clasificacion = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

document.write("<h1>Clasificación inicial:</h1>");
document.write(clasificacion);

// Celia adelanta a Raúl

clasificacion.splice(2,0, "Celia");

// Antonio es descalificado y se elimina del concurso

clasificacion.pop();

// Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden

clasificacion.splice(1, 0, "Roberto", "Amaya");

// Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificacion.unshift("Marta");

document.write("<h1>Clasificación nueva:</h1>");
document.write(clasificacion);
