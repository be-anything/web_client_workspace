// /1. 패스워드 입력 요소를 클릭한 경우 "영문자 대/소문자 특수문자, 
// 숫자 포함 8 ~ 32자" 라는 메시지가 나오게 한다.
document.querySelector('#pwd').addEventListener('focus', (e) => {
    hideSub(e);
    
    const newSub = document.createElement('sub');
    newSub.className = 'pwd-sub';
    const text = document.createTextNode('영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자');
    newSub.appendChild(text);
    
    const area = e.target.parentElement;
    area.appendChild(newSub);
});
document.querySelector('#pwd').addEventListener('blur', (e) => {
    showSub(e);

    const sub = document.querySelector('.pwd-sub');
    sub.remove();
});

// 아이디, 패스워드, 패스워드 확인을 입력하지 않고 다음 입력 요소로 이동하는 경우 
// "필수 입력 항목 입니다" 라는 메시지가 입력 요소 하단에 나오게 한다.
document.querySelector('#userid').addEventListener('blur', (e) => {
    showSub(e);
});
document.querySelector('#userid').addEventListener('focus', (e) => {
    hideSub(e);
});
document.querySelector('#pwdConfirm').addEventListener('blur', (e) => {
    showSub(e);
});
document.querySelector('#pwdConfirm').addEventListener('focus', (e) => {
    hideSub(e);
});

const showSub = (e) => {
    // const sub = document.querySelector('.required-sub')
    const sub = e.target.nextElementSibling;
    if(!e.target.value){
        sub.style.display = 'block';
    }
};
const hideSub = (e) => {
    const sub = e.target.nextElementSibling;
    sub.style.display = 'none';
};
