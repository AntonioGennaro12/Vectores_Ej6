const   miDiv1  = document.querySelector ("#mi-div1");

const titulos = ["Palabra 1", "Palabra 2", "Palabra 3", "Palabra 4", ""Palabra 5"];

for (let cont=0; cont < titulos.length; cont++) {
    miDiv1.innerHTML += `<h2>${titulos[cont]}</h2>`;
}


