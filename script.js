function calcula(){
    var produtos = $(".produto");
    var total = 0;
    for(var i = 0; i < produtos.length; i++){
        var valor = $(produtos[i]).find(".valor").text();
        valor = textoParaReal(valor);
        var quantidade = $(produtos[i])
                        .find(".quantidade")[0].value;
    $(produtos[i]).find(".subtotal").text(valor*quantidade);
    total = total + valor * quantidade;
    }
    $("#total").text(total);
}

function textoParaReal(texto) {
    var textoLimpo = texto.replace("R$ ", "");
    textoLimpo = textoLimpo.replace(".", "");
    textoLimpo = textoLimpo.replace(",", ".");

    return parseFloat(textoLimpo);
}

calcula();
$(".quantidade").change(function(){
    calcula();
});