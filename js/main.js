


// menu part
var side = document.getElementById("lis");
var menu = document.getElementById("menu-img");
var singleProduct = document.getElementById('col-2-m');
menu.addEventListener("click", show);
var s =1;
function show() {
    if (s==1) {
        side.style.top = "55px";
        s= -1;
        singleProduct.style.marginTop = "190px";
    }
    else{
        side.style.top = "-400px";
        s = 1;
        singleProduct.style.marginTop = "0";
    }
}

//end



//single product part
var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}
//end