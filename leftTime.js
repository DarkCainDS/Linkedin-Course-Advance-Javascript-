const goalDate = new Date('2025-06-27');
const resultado = document.getElementById('resultado');

const año = 1000 * 60 * 60 * 24 * 365 ;
const mes = 1000 * 60 * 60 * 24 * 30;
const dia = 1000 * 60 * 60 * 24 ;
const hora = 1000 * 60 * 60;
const minuto = 1000 * 60 ;
const seg = 1000 ;

setInterval(() => {
    const hoy = new Date();
    let resto;

    const diffMilisegundo = Math.abs(goalDate - hoy);
    const years = Math.floor(diffMilisegundo / año);

    resto = diffMilisegundo % año;
    const months = Math.floor(resto / mes);

    resto = diffMilisegundo % mes;
    const days = Math.floor(resto / dia);

    resto = diffMilisegundo % dia;
    const hours = Math.floor(resto / hora);

    resto = diffMilisegundo % hora;
    const minute = Math.floor(resto / minuto);

    resultado.innerText = `years:${years}: months:${months}:${days}: ${hours} s`;

}, 1000);