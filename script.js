function calcula(){
    var produtos = $(".produto");
    var total = 0;
    for(var i = 0; i < produtos.length; i++){
        var valor = $(produtos[i]).find(".valor").text();
        valor = textoParaReal(valor);
        var quantidade = $(produtos[i])
                        .find(".quantidade")[0].value;
        var subTotal = valor * quantidade;
    $(produtos[i]).find(".subtotal").text(realParaTexto(subTotal));
    total += subTotal;
    }
    $("#total").text(realParaTexto(total));
}

function textoParaReal(texto) {
    var textoLimpo = texto.replace("R$ ", "");
    textoLimpo = textoLimpo.replace(".", "");
    textoLimpo = textoLimpo.replace(",", ".");

    return parseFloat(textoLimpo);
}

function realParaTexto(valorReal){
    var texto = ""+valorReal;
    var textoVet = [texto, "00"];
    if(texto.indexOf(".") != -1)
        textoVet = texto.split(".");
    if(textoVet[1].length == 1)
        textoVet[1] += "0";  
    textoVet[0] = formataMilhar(textoVet[0]);
    return "R$ "+textoVet;
}

function formataMilhar(texto){
    textoRev = texto.split("").reverse().join("");
    var formatado = "";
    for(i = 0; i < textoRev.length; i++){
        if((i)%3 == 0 && i)
            formatado += "."+textoRev[i];
        else
            formatado += textoRev[i];
    }
    return formatado.split("").reverse().join("");
}

calcula();
$(".quantidade").change(function(){
    calcula();
});