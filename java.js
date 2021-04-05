let sum = 0; 
let foodchoice;
let drinkchoice;
let extrachoice;
let pricefood;
let pricedrink;
let priceextra;
let totalprice = 0

function selectfood(eproduct){
    const oldselect = document.querySelector(".food .border");
    if (oldselect !==null){
        oldselect.classList.remove("border");
        sum = sum - 1;
    }
    const newselect = document.querySelector(eproduct);
    newselect.classList.add("border");
    sum = sum + 1;
    closing();
    const itemfood = document.querySelector(".food .border .choice");
    foodchoice = itemfood.innerHTML;
    const itempricefood = document.querySelector(".food .border .price");
    pricefood = itempricefood.innerHTML;
}
function selectdrink(eproduct){
    const oldselect = document.querySelector(".drinks .border");
    if (oldselect !==null){
        oldselect.classList.remove("border");
        sum = sum - 1;
    }
    const newselect = document.querySelector(eproduct);
    newselect.classList.add("border");
    sum = sum + 1;
    closing();
    const itemdrink = document.querySelector(".drinks .border .choice");
    drinkchoice = itemdrink.innerHTML;
    const itempricedrink = document.querySelector(".drinks .border .price");
    pricedrink = itempricedrink.innerHTML;
}
function selectextra(eproduct){
    const oldselect = document.querySelector(".extra .border");
    if (oldselect !==null){
        oldselect.classList.remove("border");
        sum = sum - 1;
    }
    const newselect = document.querySelector(eproduct);
    newselect.classList.add("border");
    sum = sum + 1;
    closing();
    const itemextra = document.querySelector(".extra .border .choice");
    extrachoice = itemextra.innerHTML;
    const itempriceextra = document.querySelector(".extra .border .price");
    priceextra = itempriceextra.innerHTML;
}
function closing(){
    if (sum === 3){ 
        const result = document.querySelector(".bottom .button h1");
        result.innerHTML = "Fechar Pedido";
    }
    if (sum === 3){
        const result = document.querySelector(".button");
        result.classList.add("close");
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
    
    const name = prompt("Qual o seu nome?");
    const adress = prompt("Qual o seu endereço?");
    
    let text = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${foodchoice}
    - Bebida: ${drinkchoice}
    - Sobremesa: ${extrachoice}
    Total: R$ ${totalprice}

    Nome: ${name}
    Endereço ${adress}`;

    const texturi = encodeURI(text);
    const linkurl = `https://wa.me/5521987972806?text=${texturi}`;
    window.location.href = linkurl; 
}