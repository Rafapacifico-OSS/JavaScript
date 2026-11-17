//arrow funcion para calcular a distancia entre pontos de jogo
const calcularDistancia = (x1, y1, x2, y2) => {
    const distanciax = x2 - x1; 
    const distanciay = y2 - y1;
    return Math.sqrt(distanciax ** 2 + distanciay ** 2); 
};
//chamado a fncao para calcular a distancia entre dois pontors
const distancia = calcularDistancia(0, 0, 3, 4);
console.log("distancia entre os pontos:", distancia);