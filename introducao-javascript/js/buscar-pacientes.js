var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function(){
    // Montar uma requisição Ajax com servidor externo.
    var erroAjax = document.querySelector("#erro-ajax");
    var url = "https://api-pacientes.herokuapp.com/pacientes";
    // Criar um objeto para requisição Http
    var http = new XMLHttpRequest();
    // Abrir a conexão com endereço
    http.open("GET", url);
    // Inserir o evento 'load' para aguardar o retorno do servidor e processar a resposta.
    http.addEventListener("load", function(){
        // Tratamento do status da requisição.
        if (http.status === 200){
            erroAjax.classList.add("invisivel");
            console.log("Response: " + http.responseText);
            var pacientes = JSON.parse(http.responseText);
            // Processar resposta inserindo na table os registros.
            pacientes.forEach(function(paciente) {
                adicionarPacienteTable(paciente);
            });
        } else {
            console.log("Erro Status: " +  http.status + " - Response Text: " + http.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });
    // Enviar a requisição so servidor destino.
    http.send()
})

function getPessoas(){
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/apiVraptor4Rest/pessoa/list");
    http.addEventListener("load", function(){
        console.log("Response: " + http.responseText);
        
    });
    http.send();
}