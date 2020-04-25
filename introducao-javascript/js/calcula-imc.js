// document.querySelector(Seleciona apenas 1 elemento) - Seleciona um elemento no Html, por nome, class, id.
var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista...";
// document.querySelectorAll(Selectiona todos os elementos de um determinado elemento/classe)
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    calculoIMC(paciente);
}

function calculoIMC(paciente) {
    //
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");


    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValida = validaAltura();
    var pesoEhValido = validaPeso();

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
    }

    if (alturaEhValida && pesoEhValido) {

        var imc = calcularIMC(peso, altura);
        // Function toFixed() realiza um Round na quantidade da variável.
        tdImc.textContent = imc;  
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
        /* propriedade com separador - entre as palavras como por exemplos backgroup-color, o comando deve ser escrito todo junto com a
            primeira letra da próxima palavra em maiúsculo backgroundColor, font-syze = fontSyze (padrão Camel Case)
                * paciente.style.backgroundColor = "red";
            Propriedade de stylo não deve serem utilizadas no javascript pois não é uma boa pratica, stylo inserir em arquivo css e adicionar
            uma nova classe ao elemento.
        */
        paciente.classList.add("paciente-invalido");
    }
}

function calcularIMC (peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
};

function validaPeso(peso) {
    var pesoValido = true;
    if (peso <= 0 || peso >= 1000){
        pesoValido = false;
    }
    return pesoValido;
}

function validaAltura(altura) {
    var alturaValida = true;
    if (altura <= 0 || altura >= 3){
        alturaValida = false;
    }
    return alturaValida;
}