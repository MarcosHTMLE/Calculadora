let valorDisplay = '';

function atualizarDisplay(){
    document.getElementById("display").innerText = valorDisplay;

}

function acrescentarCaractere(Caracter){
    valorDisplay += Caracter;
    atualizarDisplay();
}

function LimparDisplay(){
    valorDisplay = '';
    
    atualizarDisplay();
}

function Calcular(){

    try{
        resultado = eval(valorDisplay);
        valorDisplay = resultado.toString();
        atualizarDisplay();
    }catch{
        valorDisplay = "Cálculo Inválido";
        atualizarDisplay();
    }
   
}