const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = (peso / (altura * altura)).toFixed(2);
    const valor = document.getElementById("valor");
    const descricao = document.getElementById("descricao");
    const informacoes = document.getElementById('informacoes');

    informacoes.classList.remove('escondido');

    if (imc < 18.5) {
        descricao.textContent = 'Cuidado! Você está abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        descricao.textContent = 'Você está no peso ideal!';
    } else if (imc > 25 && imc <= 30) {
        descricao.textContent = 'Cuidado! Você está com sobrepeso!';
    } else if (imc > 30 && imc <= 35) {
        descricao.textContent = 'Cuidado! Você está com obesidade mórbida';
    } else if (imc > 35 && imc <= 40) {
        descricao.textContent = 'Cuidado! Você está com obesidade severa!'
    } else {
        descricao.textContent = 'Cuidado! Você está com obesidade mórbida!';
    }

    valor.textContent = imc.replace('.', ',');

    if (imc >= 18.5 && imc <= 25) {
        valor.parentNode.classList.remove('attention');
        valor.parentNode.classList.add('normal');
    } else {
        valor.parentNode.classList.remove('normal');
        valor.parentNode.classList.add('attention');
    }
});
