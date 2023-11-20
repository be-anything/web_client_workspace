// DOM Document Object Model
// html문서(텍스트)를 계층구조를 반영해 javascript객체로 변환
// document
console.log(document);
console.dir(document);

/**
 * document.getElementById(id: string): HTMLElement | null
 */
function getById(){
    const li1 = document.getElementById("li1");
    console.log(li1, typeof li1);
    console.dir(li1); // 객체 계층구조로 열람

    console.log(li1.innerHTML); // getter
    li1.innerHTML = '안녕 자바스크립트 1' // setter

    const notExist = document.getElementById("djkafldfd");
    // null : object타입의 값없음을 의미하는 키워드
    console.log(notExist, typeof notExist); // null 'object'
}
/**
 * document.getElementsByTagName(tagName : string) : object[]
 */
function getByTag(){
    const list = document.getElementsByTagName("li");
    console.log(list, typeof list);

    for(let i = 0; i < list.length; i++){
        console.dir(list[i]);
        list[i].style.backgroundColor = 'hotpink';
        list[i].style.color = 'white';
    }
}
/**
 * document.getElementsByClassName(class: string): object[]
 */
function getByClass(){
    const group1 = document.getElementsByClassName("group1");
    // const groups = document.getElementsByClassName("group1 group2");
    console.log(group1, typeof group1);
    
    // Hello JS 1 [GROUP1]
    for(let i = 0; i < group1.length; i++){
        console.dir(group1[i]);
        group1[i].innerHTML += " [GROUP1]";
    }
}
/**
 * getElementsByName(name: string): object[]
 */
function getByName(){
    const hobbies = document.getElementsByName("hobby");
    console.log(hobbies, typeof hobbies);

    let hobbyChecked = '';
    for(let i = 0; i < hobbies.length; i++){
        if(hobbies[i].checked) {
            hobbyChecked += hobbies[i].value + " ";
        }
    }
    alert(hobbyChecked);
}
/**
 * [name=hobby] 체크박스를 모두 선택/해제
 */
function checkAll(){
    const hobbies = document.getElementsByName("hobby");
    const all = document.getElementById("all");
    // id가 유일하기 때문에 해당 아이디를 변수처럼 바로 사용가능

    for(let i = 0; i < hobbies.length; i++){
        hobbies[i].checked = all.checked;
        // #all 체크박스의 checked 속성
    }
}
function test1(){
    // name으로 참조해서 출력하기
    // const name = document.getElementsByName("name");
    // console.log(name[0].value);
    
    // tag로 참조해서 출력하기
    // const inputs = document.getElementsByTagName("input");

    // id로 참조해서 출력하기
    const name = document.getElementById("name");
    console.log(name.value);
    
    // class이름으로 참조해서 출력하기
    const user = document.getElementsByClassName("user-input");
    // console.dir(findClassName);
    console.log(user[0].value);
    console.log(user[1].value);
}
function test2(){
    const scoreInput = document.getElementById("score");
    const span = document.getElementById("display-score"); 
    span.innerHTML = scoreInput.value + "점";
}
/**
 * document.querySelector(selector: string): HTMLElement | null
 * - css선택자를 이용해서 하나의 DOM요소를 반환
 * - 여러개의 요소를 반환하는 선택자를 사용한 경우 첫번째 요소만 반환
 */
function _querySelector(){
    const li1 = document.querySelector("li");
    console.log(li1);
    li1.innerHTML = "안녕";

    const li = document.querySelector("li"); // 사실은 여러개가 반환되지만, 첫번째 요소만 저장된다.
    console.log(li);
}
/**
 * css선택자를 이용해서 여러개의 DOM요소를 배열로 반환
*/
function _querySelectorAll(){
    const list = document.querySelectorAll("li.group1");
    console.log(list);
    
    // list.innerHTML = 'zzzz'; 
    // 배열객체에는 innerHTML 속성이 없다.
    for(let i = 0; i < list.length; i++){
        list[i].innerHTML = 'xxxxx';
    }
}
