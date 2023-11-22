/**
 * 구조분해할당
 * - 배열/객체의 요소를 손쉽게 변수에 대입하는 방법
 * - 배열은 인덱스에 따라, 객체는 속성명에 따라 변수대입처리
 */
const test1 = () => {
    const arr = [1, 2, 3];
    // const a = arr[0];
    // const b = arr[1];
    // const c = arr[2];
    // const [a, b, c] = arr;
    // const [a, b] = arr; // 0, 1번지만 대입
    const [, a, b] = arr; // 1, 2번지만 대입
    console.log(a, b);

    // 자리교환
    let x = 10;
    let y = 10;
    [x, y] = [y, x];
    console.log(x, y);

    // 기본값지정
    const [l, m, n = 100] = [10, 20];
    console.log(l, m, n); // 10 20 undefined -> 10 20 100

    // 나머지파라미터 - 변수 자리에 사용(매개변수도 가능)
    const [i, j, ...k] = ['a', 'b', 'c', 'd', 'e'];
    console.log(i, j, k);
};

/**
 * - 매개변수
 * - 리턴값처리
 */
const test2 = () => {
    foo(['홍길동', 99, 89, 79]);
    foo(['신사임당', 100, 100, 30]);

    const [sum, diff, product, quotient, remainder] = bar(30, 20);
    console.log(sum, diff, product, quotient, remainder); // 50 10 600 1 10
};

// const foo = ([name, kor, eng, math]) => {
//     console.log(`${name} : 국(${kor}), 영(${eng}), 수(${math})`);
// };
const foo = ([name, ...scroes]) => {
    const [kor, eng, math] = scroes;
    console.log(`${name} : 국(${kor}), 영(${eng}), 수(${math})`);
};

const bar = (m, n) => [m + n, m - n, m * n, Math.trunc(m / n), m % n];

/**
 * 객체 구조분해 할당
 * - 객체의 속성명을 통해 속성값을 변수에 대입하는 문법
 * - 동일한 이름의 속성명을 참조
 */
const test3 = () => {
    const obj = {
        a : 123,
        b : 'Winter',
        c : true
    };
    // const a = obj.a;
    // const b = obj.b;
    // const c = obj.c;

    // const {a, b} = obj;
    // const {b, a} = obj; // 속성명으로 찾기때문에 순서가 달라도 무방
    const {a, b, x = 'ㅋㅋㅋ'} = obj; // 123 'Winter' undefined -> 123 'Winter' 'ㅋㅋㅋ'
    console.log(a, b, x);
    
    // 변수명을 달리하는 경우
    const {a : num, b : season, c : bool, d : zzz = 'ㅎㅎㅎ'} = obj;
    console.log(num, season, bool, zzz);

    // 중척객체 처리
    const user = {
        id : 'honggd',
        name : {
            firstName : '길동',
            lastName : '홍'
        },
        sns : ['tiktok', 'instagram', 'twitter-x']
    }
    const {
        id,
        name : {
            firstName : 이름, lastName : 성
        },
        sns : [
            mainSns, subSns
        ]
    } = user;
    // console.log(id, firstName, lastName, mainSns, subSns);
    console.log(id, 이름, 성, mainSns, subSns);

    // 나머지파라미터 : 사용되지 않은 속성을 새객체로 반환
    const obj2 = {
        num : 10,
        text : 'ㅋㅋㅋㅋ',
        when : new Date() 
    };
    const {no, ...rest} = obj2;
    console.log(no, rest);
};

/**
 * 함수활용
 * - 매개변수부
 * - 리턴값 처리
*/
const test4 = () => {
    const user = {
        id : 'honggd',
        name : {
            firstName : '길동',
            lastName : '홍'
        },
        sns : ['tiktok', 'instagram', 'twitter-x']
    }
    const printId = ({id}) => console.log(id); // honggd
    const printName = ({name : {firstName, lastName}}) => console.log(`${lastName}${firstName}`);
    const printSns = ({sns : [mainSns, subSns, ...sns]}) => console.log(mainSns);

    printId(user);
    printName(user);
    printSns(user);

    /**
     * 화살표 함수에서 객체반환시 () 감쌀것!
     */
    const getAcademyInfo = () => ({
        name : 'KH정보교육원',
        url : "https://khacademy.co.kr",
        tel : ['070-1234-5678', '070-8888-9999'],
        branches : {
            '강남 지원': { addr : '서울시 강남구 역삼동'},
            '종로 지원': { addr : '서울시 종로구 탑골동'},
            '당산 지원': { addr : '서울시 영등포구 당산동'}
        }
    });
    // 교육원명 : KH정보교육원
    // 홈페이디 : ...
    // 전화번호 : ...(대표), ...
    // 지점 1 : 강남 지원(서울시 강남구 역삼동)
    // 지점 2 : 종로 지원(서울시 강남구 역삼동)
    // 지점 3 : 당산 지원(서울시 강남구 역삼동)

    // 풀이1
//     const {
//         name,
//         url,
//         tel : [tel1, tel2],
//         branches : {
//             '강남 지원' : {addr : addr1},
//             '종로 지원' : {addr : addr2},
//             '당산 지원' : {addr : addr3}
//         }
//     } = getAcademyInfo();
//     console.log(`교육원명 : ${name}
// 홈페이지 : ${url}
// 전화번호 : ${tel1}(대표), ${tel2}
// 지점 1 : 강남 지원(${addr1})
// 지점 2 : 종로 지원(${addr2})
// 지점 3 : 당산 지원(${addr3})`);
// };

const {
    name,
    url,
    tel : [_tel1, _tel2],
    branches
} = getAcademyInfo();

console.log(`교육원명 : ${name}
홈페이지 : ${url}
전화번호 : ${_tel1}(대표), ${_tel2}
${Object.keys(branches).reduce((result, brancheName, index) => {
    result += `지점${index + 1} : ${brancheName}(${branches[brancheName]['addr']})\n`
    return result;
}, "")}
`);


}

