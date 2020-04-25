var filtro = document.querySelector("#filtro-paciente");

filtro.addEventListener("input", function(){
    console.log("Digitado: " + this.value);
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length === 0){
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        });
    } else {
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector(".info-nome").textContent;
            /* Declaração de uma variação com expressão regular new ExpReg(), o primeiro parâmetro se refere a string que queremos testar,
                e o 'i' se refere que estavamos fazendo uma busca 'case insensitive'
            */
            var expRegular = new RegExp(filtro.value, "i");
            if (expRegular.test(nome)){
                console.log("Achei");
                paciente.classList.remove("invisivel");       
            } else {
                paciente.classList.add("invisivel");
            }
        })
    }
});