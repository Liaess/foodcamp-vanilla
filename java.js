

function selectfood(eproduct){
    const select = document.querySelector(".food .border");
    if (select !==null){
        select.classList.remove("border")
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border")
}
function selectdrink(eproduct){
    const select = document.querySelector(".drinks .border");
    if (select !==null){
        select.classList.remove("border")
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border")
}
function selectextra(eproduct){
    const select = document.querySelector(".extra .border");
    if (select !==null){
        select.classList.remove("border")
    }
    const select1 = document.querySelector(eproduct);
    select1.classList.add("border")
}





/*
const hidden = document.querySelector(".ebox ion-icon");
hidden.classList.toggle("positionicon")
<ion-icon name="checkmark-circle"></ion-icon>
*/