let summation = 0; 

function selectfood(eproduct){
    const select = document.querySelector(".food .border");
    if (select !==null){
        select.classList.remove("border");
        summation = summation - 1;
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border");
    summation = summation + 1;
    closing();
}
function selectdrink(eproduct){
    const select = document.querySelector(".drinks .border");
    if (select !==null){
        select.classList.remove("border");
        summation = summation - 1;
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border");
    summation = summation + 1;
    closing();
}
function selectextra(eproduct){
    const select = document.querySelector(".extra .border");
    if (select !==null){
        select.classList.remove("border");
        summation = summation - 1;
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border");
    summation = summation + 1;
    closing();
}
function closing(){
    if (summation === 3){ 
        const teste = document.querySelector(".bottom .button h1");
        teste.innerHTML = "<a href='#'>Fechar pedido</a>";
    }
    if (summation === 3){
        const teste2 = document.querySelector(".button");
        teste2.classList.add("close");
    }
}