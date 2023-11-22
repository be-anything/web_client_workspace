const test1 = () => {
    const list = [...document.querySelectorAll("#drink li")];
    const contents = list.reduce((contents, n) => {
        contents.push((n.innerText).toUpperCase());
        return contents;
    }, []);
    console.log(contents);
};

const test2 = () => {
    const csv =
        `김지영,25,010-1234-5678
박준호,32,010-9876-5432
이민지,28,010-5555-5555
정승훈,45,010-1111-2222
최현우,19,010-7777-8888
장수민,37,010-4444-3333
송지원,31,010-8888-9999
이도현,26,010-2222-1111
신영주,42,010-6666-7777
강현우,23,010-3333-4444
김지현,29,010-9999-8888
이승희,35,010-4444-5555
박동진,41,010-2222-3333
최진우,20,010-7777-6666
장윤서,27,010-5555-4444`;

    // 0. 저장할 위치 찾아오기
    const tbody = document.querySelector("#contact tbody");
    tbody.innerHTML = ""; // 초기화코드

    // 1. 엔터 단위로 데이터를 쪼갬
    const trTotal = csv.split("\n");
    // console.log(trTotal);

    const trList = [];
    // 2. ,단위로 데이터를 쪼개서 배열에 담기
    trTotal.forEach((n) => trList.push(n.split(",")));
    // console.log(trList);

    // 3. 그럼 1사람 단위로 생성된 데이터를 td>tr에 담도록 함
    trList.forEach((tr) =>
        tbody.innerHTML += `<tr>${tr.reduce((tds, td) => {
            tds += `<td>${td}</td>`;
            return tds;
        }, "")}</tr>`)
};

// 이름기준 정렬
const sortContactByName = (order) => {
    const userList = [...document.querySelectorAll("#contact tbody tr")];
    console.log(userList);

    const compareFunction = (order === 'asc') ? (
        // asc일 때 사용할 함수
        (tr1, tr2) => {
            const name1 = tr1.querySelector("td:first-child").innerHTML;
            const name2 = tr2.querySelector("td:first-child").innerHTML;
            console.log(name1, name2);
            if (name1 > name2) return 1;
            if (name1 < name2) return -1;
            return 0;
        }
    ) : (
        (tr1, tr2) => {
            const name1 = tr1.querySelector("td:first-child").innerHTML;
            const name2 = tr2.querySelector("td:first-child").innerHTML;
            if (name1 < name2) return 1;
            if (name1 > name2) return -1;
            return 0;
        }
    );

    console.log(userList.sort(compareFunction));

    userList.forEach((tr) => {
        document.querySelector("table#contact tbody").append(tr);
    });
};

// 나이기준 정렬
const sortContactByAge = (order) => {

};