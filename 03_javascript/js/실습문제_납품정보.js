function showVal(){
    const productLevel = document.querySelector("#productLevel");
    const showLevel = document.querySelector("#pVal");
    
    showLevel.innerHTML = productLevel.value;
}
function printProduct(){
    const goodist = document.querySelector("#goodlist");
    const goodValue = document.querySelector("#productName");
    
    let goodName;
    for(let i = 0; i < goodlist.options.length; i++){
        (goodValue.value == goodlist.options[i].value) 
        && (goodName = goodlist.options[i].innerHTML);
    }
    
    const productAmount = document.getElementById("productLevel");
    const productLevel = document.querySelector("#productLevel");
    const message = document.getElementById("message");
    
    const result = document.querySelector("div#result");
    result.innerHTML =  `상품명 : ${goodName}<br>
                        납품등급 : ${productLevel.value}<br>
                        납품수량 : ${productAmount.value}<br>
                        기타사항 : ${message.value}`;
}