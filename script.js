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
    var textoVetor = [];
    textoVetor = texto.split(".");
    if(!textoVetor[1]){
        textoVetor[1] = "00";
    }else{
        textoVetor[1] = textoVetor[1].substring(0, 2);
    }
     if(textoVetor[1].length == 1){
         textoVetor[1] += "0";
     }
    var formatado = formataMilhar(textoVetor[0]);
    var textoCompleto = "R$ "+formatado+","+textoVetor[1];
    return textoCompleto;
}


function formataMilhar(valor){
    var textoReverso = valor.split("").reverse().join("");
    var textoFormatado = ""; 
    for(var i = 0; i < textoReverso.length; i++){
        if(i%3 == 0 && i != 0){
            textoFormatado += "."+textoReverso[i];
        }else{
            textoFormatado += textoReverso[i];
        }
    }
    return textoFormatado.split("").reverse().join("");
    
}

calcula();
$(".quantidade").change(function(){
    calcula();
});