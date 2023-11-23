const printCSV = () => {
    const data = "홍길동,남,90,80,70,60|신사임당,여,88,100,50|전봉준,남,55,80,77";

    // csv데이터 나눠서 배열로 저장하기
    const [...students] = data.split('|');

    // 다시 한번 ,로 나누기
    students.forEach((student) => {
        const [name, gender, ...scores] = student.split(",");
        // 점수 계산하기
        const avg = scores.reduce((agg, score) => parseInt(agg) + parseInt(score)) / scores.length;
        console.log(`${name}(${gender}) 평균 ${avg.toFixed(1)}점`);
    });
};

const printMemberFamily = () => {
    const people = [
        {
            name: '홍길동',
            family: {
                father: '홍석천',
                mother: '홍진경',
                sister: '홍수아',
            },
            age: 35
        },
        {
            name: '신사임당',
            family: {
                father: '신동엽',
                mother: '고두심',
                brother: '신하균',
            },
            age: 25
        },
        {
            name: '이순신',
            family: {
                father: '이경영',
                mother: '이영자',
                brother: '이승환',
                sister: '아이유',
            },
            age: 33
        }
    ]
    
    // 이 과정은 필요없음 - people이 이미 배열이기때문에
    // const [...members] = people; 
    // console.log(members);

    people.forEach((member) => {
        const {
            name,
            family : {
                father,
                mother,
                ...siblings
            }
        } = member;
        console.log(`이름 : ${name}, 아빠 : ${father}, 엄마 : ${mother}, 형제자매 : ${
            Object.keys(siblings).reduce((total, sibling, i) => {
                if(i > 0) total += ', '; // 형제자매가 2명이상일 때 , 추가
                total += `${siblings[sibling]}`;  //.이 아니라 []로 찾기
                return total;
            }, "")
        }`);
    });
};