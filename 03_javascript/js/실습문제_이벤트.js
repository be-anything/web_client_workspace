// 이벤트 생성하기 btn-generate click
document.querySelector('#btn-generate').onclick = (e) => {
    console.log(e);
    
    const btnInfo = `네이버,https://www.naver.com
구글,https://www.google.com
W3C,https://www.w3.org/
MDN Web,https://developer.mozilla.org/en-US/
와삼,https://www.w3schools.com`;

    const [...btnInfos] = btnInfo.split('\n');
    
    btnInfos.forEach((btn) => {
        const [homepage, url] = btn.split(',');
        // button만들기
        const area = document.querySelector('.btn-wrapper');
        area.innerHTML += `<button type="button" onclick="window.open('${url}', '_self')">${homepage}</button>`;
    });

    // e.target.onclick = null; // 핸들러 제거
};

// 핸들러 객체를 1번만 돌리게 만들때 
document.querySelector('#btn-generate').addEventListener('click', (e) => {
    console.log(e);
    
    const btnInfo = `네이버,https://www.naver.com
구글,https://www.google.com
W3C,https://www.w3.org/
MDN Web,https://developer.mozilla.org/en-US/
와삼,https://www.w3schools.com`;

    const [...btnInfos] = btnInfo.split('\n');
    
    btnInfos.forEach((btn) => {
        const [homepage, url] = btn.split(',');
        // button만들기
        const area = document.querySelector('.btn-wrapper');
        area.innerHTML += `<button type="button" onclick="window.open('${url}', '_self')">${homepage}</button>`;
    });

    // e.target.onclick = null; // 핸들러 제거
});