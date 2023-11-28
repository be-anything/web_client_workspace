/**
 * 동기 Synchronous : 짝을 맞춘다. (함수호출-리턴과 그 다음실행의 짝을 맞춘다.)
 * 비동기 Synchronous : 짝을 맞추지 않는다. (함수호출-리턴과 그 다음실행의 짝을 맞추지 않는다.)
 * 
 * - js runtime은 싱글쓰레드로 작동한다.
 * - 시간이 오래 걸리는 작업(timer api, dom, event처리)은 백그라운드로 치워뒀다가 이후에 실행 (비동기처리)
 * 
 * 1. Web API Container에 등록
 * 2. Callback Queue 추가
 * 3. Event Loop에 의해 callstack에 추가 (callstack empty only!)
 * 
 */
document.querySelector('#btn1').addEventListener('click', () => {
    // 동기처리
    const value = foo();
    console.log(value);

    // 비동기처리
    let value2;
    setTimeout(() => {
        value2 = 200;
        console.log(value2); // 200 끝나는 시간에 맞춰서 출력됨
    }, 0);
    // console.log(value2); // 200이 아니라 undefined가 나옴
});

const foo = () => 100;

/**
 * DOM에 요소를 추가/삭제하는 작업은 비동기로 처리된다.
 */
document.querySelector('#btn2').addEventListener('click', () => {
    loadSrcipt('js/24_test.js', () => {
        test();
    });
    // test(); // test.js안의 test함수 // 24_asynchronous.js:34 Uncaught ReferenceError: test is not defined
});

const loadSrcipt = (src, callback) => {
    // js/test.js를 동적으로 로드하고, 그 안의 함수 test를 호출
    const script = document.createElement('script'); // <script></script>
    script.src = src; // html 기준으로 주소 작성
    script.onload = callback; // dom에 load가 완료되면 호출되는 핸들러
    document.head.append(script);
};

/**
 * 1초 간격으로 배경색을 빨 -> 주 -> 노 -> 초 -> 파 -> 남 -> 보
 * - setTimeout 연속사용
 * - callback hell (콜백지옥)
 */
document.querySelector('#btn3').addEventListener('click', () => {
    const box = document.querySelector('.box');
    setTimeout(() => {
        box.style.backgroundColor = 'red';
        setTimeout(() => {
            box.style.backgroundColor = 'orange';
            setTimeout(() => {
                box.style.backgroundColor = 'green';
                setTimeout(() => {
                    box.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        box.style.backgroundColor = 'navy';
                        setTimeout(() => {
                            box.style.backgroundColor = 'purple';
                        }, 1000); 
                    }, 1000); 
                }, 1000); 
            }, 1000); 
        }, 1000);  
    }, 1000);

});

