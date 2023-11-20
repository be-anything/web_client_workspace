/**
 * String
 * - "", '', ``으로 리터럴을 감싸서 표현
 * - String내장객체에서 제공하는 api 사용
 */
function test1() {
    const str = "Apple Samsung PineApple";
    console.log(str);
    console.log(str.length); // 23

    // for(let i = 0; i < str.length; i++){
    //     console.log(str[i], str.charAt(i));
    // }
    console.log(str.toLowerCase()); // Immutable
    console.log(str.toUpperCase()); // Immutable
    console.log(str);

    console.log(str.indexOf('Sam')); // 6
    console.log(str.indexOf('Apple')); // 0
    console.log(str.lastIndexOf('Apple')); // 18

    // substring(start, end)
    // substr(start, length)
    console.log(str.substring(6, 9)); // Sam
    console.log(str.substr(6, 3)); // Sam // 사라질예정 쓰지마세요
    console.log(str.substring(6)); // Samsung PineApple
    console.log(str.substr(6)); // Samsung PineApple

    // replace(search, newStr)
    // replaceAll(search, newStr) - ECMA2021에 추가
    console.log(str.replace('Apple', '사과'));
    console.log(str.replaceAll('Apple', '사과'));

    console.log(str.split(" ")); // ['Apple', 'Samsung', 'PineApple']
}

/**
 * @실습문제 : 사용자입력값에서 알파벳개수 세기
 * - prompt 통해 임의의 문자열을 받고, 알파벳 개수를 세서 출력하기
 */
function test2(){
    const str = prompt('문자열을 입력하세요');
    if(!str) {
        alert("유효한 문자열을 입력해주세요.");
        return;
    }
    let cnt = 0;
    const _str = str.toUpperCase();

    for(let i = 0; i < _str.length; i++){
        if(_str[i] >= 'A' && _str[i] <= 'Z')
            cnt++;
    }
    alert(`입력하신 문자열 ${str}에서 알파벳의 개수는 ${cnt}개입니다. 😃`);
    
    
    // 정규표현식을 이용한 풀이
    // const str = prompt(`문자열을 입력해주세요`);
    // const newStr = str.replace(/[^a-zA-Z]/g,'');
    // console.log('알파벳은 ',newStr.length,'개입니다.');
}
/**
 * Math
 * - random
 * - ceil
 * - round
 * - floor
 * - trunc
 */
function test3(){
    // 0.0이상 1.0 미만의 실수를 반환
    // Math.trunc(Math.random() * 경우의수 + 최소값)
    console.log(Math.trunc(Math.random() * 10 + 1));

    console.log(Math.ceil(12.34)); // 13
    console.log(Math.round(12.5)); // 13
    console.log(Math.floor(12.34)); // 12
    console.log(Math.trunc(12.34)); // 소수점이하 버림 

    console.log(Math.floor(-3.4), Math.trunc(-3.4)); // -4, -3

    // 123.456 반올림해서 -> 123.46
    console.log(Math.round(123.456 * 100) / 100);

}

/**
 * @실습문제 : 난수 목록태그 만들고, 짝수만 컬러변경하기
 * 난수는 1 ~ 100 사이의 값으로 채우기
 * - ul#nums하위의 li태그에 난수대입
 * - 짝수인 경우 컬러변경
 * - 매번 버튼 클릭시 숫자/컬러가 새로 지정되어야함.
 */
function test4(){
    const list = document.querySelectorAll("#nums > li");
    // console.log(list);
    
    for(let i = 0; i < list.length; i++){
        list[i].style.color = 'initial'; // initial | inherit - 초기화
        const n = Math.trunc(Math.random() * 100 + 1);
        list[i].innerText = n;
        n % 2 == 0 && (list[i].style.color = 'hotpink');
    }

    const r = Math.trunc(Math.random() * 255);
    const g = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);

    // console.log(r, g, b);

    // for(let i = 0; i < list.length; i++){
    //     list[i].innerHTML = Math.trunc(Math.random() * 100 + 1);
    //     if(list[i].innerHTML % 2 === 0){
    //         const innerRandom = list[i].innerHTML;
    //         list[i].innerHTML = `<div style='background-color: rgb(${r}, ${g}, ${b});'>${innerRandom}</div>`;
    //     }
    // }
}
/**
 * Date
 * - 날짜/시각을 관리하는 객체
 * - 기본적으로 시스템시작을 읽어와서 사용
 */
function test5(){
    const now = new Date(); // new 생성자함수 호출!
    console.log(now);

    console.log(now.getFullYear());
    console.log(now.getMonth() + 1); // 0 ~ 11
    console.log(now.getDate()); 

    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    console.log(Date.now()); // UTC Time/초 (Epoch Time)

    const date = new Date(1700460422475); // UTC Time으로 Date객체 생성하기
    console.log(date);

    // 특정 날짜/시각객체
    const someday = new Date(1999, 8, 9, 12, 30); // 월은 0-based 숫자
    console.log(someday);
}
/**
 * start, end시각을 밀리초로 각각 구해서 차이를 계산
 */
function test6(){
    // const start = Date.now();
    // foo();
    // const end = Date.now();
    // console.log((end - start), 'ms');

    console.time('Test');
    foo();
    console.timeEnd('Test');
}

function foo() {
    let sum = 0;
    for(let i = 0; i < 1000000; i++)
        sum += i;
    console.log(sum);
}