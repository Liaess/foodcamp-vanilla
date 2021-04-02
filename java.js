let valorAtual = 0; 

function selectfood(eproduct){
    const select = document.querySelector(".food .border");
    if (select !==null){
        select.classList.remove("border")
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border")
    valorAtual = valorAtual + 1;
    button3();
}
function selectdrink(eproduct){
    const select = document.querySelector(".drinks .border");
    if (select !==null){
        select.classList.remove("border")
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border")
    valorAtual = valorAtual + 1;
    button3();
}
function selectextra(eproduct){
    const select = document.querySelector(".extra .border");
    if (select !==null){
        select.classList.remove("border")
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border")
    valorAtual = valorAtual + 1;
    button3();
}
function button3(){
    if (valorAtual === 3){ 
        const teste = document.querySelector(".bottom .button h1");
        teste.innerHTML = "Fechar pedido"
    }
    if (valorAtual === 3){
        const teste2 = document.querySelector(".button")
        teste2.classList.add("close")
    }
} 

