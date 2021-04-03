let summation = 0; 
let foodchoice;
let drinkchoice;
let extrachoice;
let pricefood;
let pricedrink;
let priceextra;
let totalprice = 0

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
    const itemfood = document.querySelector(".food .border .choice");
    foodchoice = itemfood.innerHTML;
    const itempricefood = document.querySelector(".food .border .price");
    pricefood = itempricefood.innerHTML;
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
    const itemdrink = document.querySelector(".drinks .border .choice");
    drinkchoice = itemdrink.innerHTML;
    const itempricedrink = document.querySelector(".drinks .border .price");
    pricedrink = itempricedrink.innerHTML;
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
    const itemextra = document.querySelector(".extra .border .choice");
    extrachoice = itemextra.innerHTML;
    const itempriceextra = document.querySelector(".extra .border .price");
    priceextra = itempriceextra.innerHTML;
}
function closing(){
    if (summation === 3){ 
        const teste = document.querySelector(".bottom .button h1");
        teste.innerHTML = "Fechar Pedido";
    }
    if (summation === 3){
        const teste2 = document.querySelector(".button");
        teste2.classList.add("close");
    }
    
}
function finish(){
    pricefood = pricefood.replace("R$ ","");
    pricefood = pricefood.replace(",",".");
    pricefood = parseFloat(pricefood);
    pricedrink = pricedrink.replace("R$ ","");
    pricedrink = pricedrink.replace(",",".");
    pricedrink = parseFloat(pricedrink);
    priceextra = priceextra.replace("R$ ","");
    priceextra = priceextra.replace(",",".");
    priceextra = parseFloat(priceextra);
    totalprice = (pricefood + pricedrink + priceextra).toFixed(2);
    let text = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${foodchoice}
    - Bebida: ${drinkchoice}
    - Sobremesa: ${extrachoice}
    Total: R$ ${totalprice}`;
    const texturi = encodeURI(text);
    const linkurl = `https://wa.me/5521987972806?text=${texturi}`;
    window.location.href = linkurl; 
}