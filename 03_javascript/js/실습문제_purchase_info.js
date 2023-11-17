// // 풀이1
// // 입력값 가져오기
// function printValue() {
//     // input중 첫번째 값만 가져옴
//     const name = document.querySelector("input");
//     // console.log(name.value);
//     const price = document.querySelector("input[name=price]");
//     // console.log(price.value);
//     const product = document.getElementById("pname");
//     // console.log(product.value);

//     const area = document.getElementById("area");
//     // console.log(area);
//     area.innerHTML = `구입자 : ${name.value}님<br>구입상품 : ${product.value}<br>구매가격 : ${price.value}만원` 
// }
// // 풀이2
// function printValue(){
//     const list = document.querySelector("form[name=purchaseFrm]");
//     const area = document.getElementById("area");

//     area.innerHTML = `구입자 : ${list[0].value}님<br>구입상품 : ${list[1].value}<br>구매가격 : ${list[2].value}만원` 
// }
// 풀이3
// function printValue(){
//     const list = document.getElementsByName("purchaseFrm")[0];
//     const area = document.getElementById("area");

//     area.innerHTML = `구입자 : ${list[0].value}님<br>구입상품 : ${list[1].value}<br>구매가격 : ${list[2].value}만원` 
// }
function printValue() {
    const input1 = document.getElementsByTagName("input");
    const name = input1[0].value;
    const pname = input1[1].value;
    const price = input1[2].value;
    
    console.dir(name);
    console.dir(pname);
    console.dir(price);
    alert(name + pname + price);
}