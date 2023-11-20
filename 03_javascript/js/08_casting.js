/**
 * 산술연산시 주의할 형변환
 * number + string = string
 * number - string = number | NaN
 * number * string = number | NaN
 * number / string = number | NaN
 * number % string = number | NaN
 * 
 */
function test1(){
    console.log(3 + "3"); // '33'
    console.log(3 - "3"); // 0 
    console.log(3 * "3"); // 9
    console.log(3 / "3"); // 1
    console.log(3 % "3"); // 0

    console.log(3 - "a"); // NaN (Not a Number)
    console.log(3 * "a"); // NaN (Not a Number)
    console.log(3 / "a"); // NaN (Not a Number)
    console.log(3 % "a"); // NaN (Not a Number)
    console.log(typeof NaN); // number
}

/**
 * 비교연산자
 * == 타입이 달라도 값(형변화후)이 같으면 true 반환
 * != 타입이 달라도 값(형변화후)이 다르면 true 반환
 * 
 * 엄격비교연산자
 * === 값/타입이 모두 같아야 true 반환
 * !== 값 또는 타입이 달라야 true 반환
 * 
 * 크기비교
 * >
 * <
 * >=
 * <=
 * 
 */
function test2(){
    console.log(3 == "3"); // true
    console.log(3 != "3"); // false

    console.log(3 === "3"); // false
    console.log(3 !== "3"); // true

    // 사전등재순 : a는 b보다 작다
    console.log("a" > "b"); // false
    console.log("a" < "b"); // true
    console.log("a" >= "b"); // false
    console.log("a" <= "b"); // true

}

/**
 * 숫자형변환
 * - Number() 숫자로 변환. 변환불가한 문자가 하나라도 있으면 NaN을 반환
 * - parseInt() 정수로 변환. 변환불가한 문자가 있기전까지 반환
 * - parseFloat() 실수로 변환. 변환불가한 문자가 있기전까지 반환
 */
function test3(){
    const num = '123.456';
    console.log(Number(num)); // 123.456 있는 그대로 변환
    console.log(parseInt(num)); // 123 정수로 반환
    console.log(parseFloat(num)); // 123.456 실수로 반환

    const num2 = '123.456원';
    console.log(Number(num2)); // NaN
    console.log(parseInt(num2)); // 123 정수로 반환
    console.log(parseFloat(num2)); // 123.456 실수로 반환

    const num3 = '$123.456';
    console.log(Number(num3)); // NaN
    console.log(parseInt(num3)); // NaN
    console.log(parseFloat(num3)); // NaN
    
    // 숫자가 아닌 문자열 제거
    const _num3 = num3.replace(/[^0-9.]/g, '');
    console.log(_num3); // $가 제거됨
    console.log(Number(_num3)); // 123.456
    console.log(parseInt(_num3)); // 123
    console.log(parseFloat(_num3)); // 123.456
}

function sum(){
    // input의 type에 관계없이 value는 모두 string으로 저장됨
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");

    // 값을 저장하고 싶다면, 변수를 따로 만들자(변수명에 Val로 표시하기)
    const num1Val = num1.value;
    const num2Val = num2.value;

    // isNaN 숫자로 형변환이 가능한지 확인
    if(isNaN(num1Val) || isNaN(num1Val)){
        alert('유효한 숫자를 입력해주세요 😣')
        return; // 조기리턴
    }
    const sum = parseFloat(num1Val) + parseFloat(num2Val);
    alert('두 수의 합 : ' + sum);
}
/**
 * Infinity 무한수
 * - number타입
 */
function test4() {
    console.log(10 / 0); // Infinity number
    console.log(10 / 0 === Infinity); // true
}
/**
 * 논리형으로의 자동형변환
 * - 모든 자료형은 boolean으로 평가될 수 있다.
 * - true (값이 있는 것) 123, 45.67, -100, "abc", [], {}, Infinity
 * - false (값이 없는 것) 0, 0.0, "", undefined, null, NaN
 */
function test5() {
    // true
    console.log(Boolean(123));
    console.log(Boolean(45.67));
    console.log(Boolean(-100));
    console.log(Boolean("abc")); 
    console.log(Boolean(" ")); // 공백문자열도 true
    console.log(Boolean([]));
    console.log(Boolean({}));
    console.log(Boolean(10 / 0)); // Infinity

    // false
    console.log(Boolean(0));
    console.log(Boolean(0.0));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(Number('abc'))); // NaN
}