const   miDiv1  = document.querySelector ("#mi-div1");

const titulos = ["Titulo 1", "Titulo 2", "Titulo 3", "Titulo 4", "Titulo 5"];

for (let cont=0; cont < titulos.length; cont++) {
    miDiv1.innerHTML += `<h2>${titulos[cont]}</h2>`;
}


