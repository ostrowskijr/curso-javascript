// O comando addEventListener() adicionar um escutador de evento a um elemento do Html, como por exemplo o clique em um determinado botão ou outro elemento
titulo.addEventListener("click", function() {
    console.log("Cliquei no titulo!");
     
 });
 
 // Valor de um input é retornado através da função .value enquanto para recuperar o valor de uma tag se utiliza a função .textContent
 var botaoAdd = document.querySelector("#adicionar-paciente");
 /* o evento click pode ser adicionado ao botão como está abaixo através do addEventListener(Boa prática), ou sisplesmente utilizando 
     adicionando o evento da seguinte forma com o prefixo 'on' botaoAdd.onClick = adicionarPaciente, porém nesta segunda forma não conseguimos 
     inserir funções encadeadas a serem executadas pelo mesmos botão.
 */
 botaoAdd.addEventListener("click", adicionarPaciente);
 
 function adicionarPaciente(event) {
     /* Função event.preventDefault() é utilizada para que ao clicar no botão o browser não execute o evento padrão que seria o envio do form
         para outro Form.
     */
     event.preventDefault();
     console.log("Adicionar paciente."); 
     adicinaLinhaTable(); 
 };
 
 function adicionarPacienteTable(paciente){
    // Insere o elemento tabela na variavel table
    var table = document.querySelector("#tabela-pacientes");
    //
    var pacienteTr = montarTr(paciente);
    // Adicionar a tag <tr> a table.
    table.appendChild(pacienteTr);
 }

 function adicinaLinhaTable() {
    // Insere os dados do formulario na var form
    var form = document.querySelector("#form-adiciona"); 
    // Cria um novo elemento <tr> através da function createElement
    var paciente = obtemPacienteDoFormulario(form);
    //
    var erros = validaPaciente(paciente);
    if (erros.length > 0){
        exibirMensagensErro(erros);
        return;
    }
    adicionarPacienteTable(paciente);
    // A função reset() limpa os campos do formulário em questão.
    form.reset();
    limparMensagensErro();
    //
    alert("Paciente adicionado com sucesso!");
 }

 function obtemPacienteDoFormulario(form) {
     var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value, form.altura.value)
     };
     return paciente;
 };

 function montarTr(paciente) {
    // Cria um novo elemento <tr> através da function createElement
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));
    //
    return pacienteTr;
 }

 function montarTd(dado, classe) {
     var td = document.createElement("td");
     td.textContent = dado;
     td.classList.add(classe);
     //
     return td;
 }

 function validaPaciente(paciente) {
     var erros = [];
     if (!validaPeso(paciente.peso)){
        erros.push("Peso do paciente é inválido");
     }
     if (!validaAltura(paciente.altura)){
        erros.push("Altura do paciente inválida!");
     }
     if (paciente.peso.length == 0){
        erros.push("Peso do paciente nulo!");
     }
     if (paciente.altura.length == 0){
        erros.push("Altura do paciente nula!");
     }
     if (paciente.nome.length == 0){
        erros.push("Nome do paciente nulo!");
     }
     if (paciente.gordura.length == 0){
        erros.push("Gordura do paciente nula!");
     }
     return erros;
 }

 function exibirMensagensErro(erros) {
     var ul = document.querySelector("#mensagens-erro");
     limparMensagensErro();
     erros.forEach(function(erro) {
         var li = document.createElement("li");
         li.textContent = erro;
         ul.appendChild(li);
     });
 }

 function limparMensagensErro() {
    document.querySelector("#mensagens-erro").innerHTML = "";
 }