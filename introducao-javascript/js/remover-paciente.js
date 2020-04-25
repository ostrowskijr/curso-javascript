
var table = document.querySelector("table");

/*
    Adicionando o evento a tabela todos os nodes filhos são afetados, assim quando inserido novo registro na tabela não é necessário se
    preocupar com adição do evento, pois o mesmo herda da table.
*/
table.addEventListener("dblclick", function(event){
    var alvoEvento = event.target; // td - onde foi realizado o duplo click
    if (alvoEvento.tagName == "TD"){
        var paiAlvo = alvoEvento.parentNode; // tr - pai do td que sofreu o evento de dblclick.
        paiAlvo.classList.add("fadeOut");
        setTimeout(function(){
            paiAlvo.remove();
        }, 500);
        // Tudo isso pode ser realizado em apenas uma linha de código: event.terget.parentNode.remove();
    };
});