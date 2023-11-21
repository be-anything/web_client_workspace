function printMovie(){
    const inputMovie = prompt("좋아하는 영화를 나열하여 입력하세요(,작성해주세요))");

    const listMovie = inputMovie.split(",");
    alert(listMovie.sort());
}

function printConsole(){
    const rainbow = ["빨", "주", "노", "초", "파", "남", "보"];

    // for(let i = 0; i < rainbow.length ; i++){
    //     i !== 0 && rainbow.push(rainbow.shift());
    //     console.log(rainbow);
    // }
    // 출력을 먼저하도록 변경하면 됨
    for (let i = 0; i < rainbow.length; i++) {
        console.log(rainbow.toString());
        rainbow.push(rainbow.shift());
      }
}

function copyArray(){
    const arr1 = new Array;

    for(let i = 0; i < 100; i++){
        arr1[i] = (i + 1);
    }
    console.log(arr1);
    
    const arr2 = arr1.slice().sort(function(a, b){
        return b - a ;
    });
    console.log(arr2);
}