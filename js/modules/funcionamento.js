//Date é uma função construtora usada para Datas,horas, dias, meses, anos etc.


export default function initFuncionamento(){

}

const agora = new Date();
const futuro = new Date ('Dec 25 2024');

//console.log(agora.getMonth());

//O método getTime() mostra o tempo total em milissegundos desde o dia 01 de jan de 1970.
/*
function transformarDias(tempo){

  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());

const diasFuturo = transformarDias(futuro.getTime());


console.log(Math.floor(diasFuturo - diasAgora));
*/

// Esta função acima serve para sabermos quantos dias ainda faltam para determinado evento.

//---------------------------------------

const funcionamento = document.querySelector('[data-semana]');

const diasSemana = funcionamento.dataset.semana.split(',').map(Number);

const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);



const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;


const horarioAberto = ((horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]));


if(semanaAberto && horarioAberto){

  funcionamento.classList.add('aberto');
}
console.log(horarioAberto);