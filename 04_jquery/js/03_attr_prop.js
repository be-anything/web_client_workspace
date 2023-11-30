/**
 * attr
 * - 인라인 작성된 속성을 제어하는 메소드
 * 
 * - getter n개의 요소중에서 첫번째 요소의 속성값을 반환
 * - setter n개의 요소에 모두 해당 속성을 적용
 * 
 */
$(btn1).on('click', () => {
    const $img = $('.img-wrapper img');
    console.log($img);

    // getter
    console.log($img.attr('src'));

    // setter
    $img.attr('src', '../sample/image/flower3.png');
});

/**
 * prop
 * - 자바스크립트 boolean으로 제어되는 속성
 * - checked, selected
 * 
 */
$(btn2).on('click', () => {
    
    console.log($('[name=pizza]').prop('checked')); // 젤 앞에 요소만 가져옴
    $('[name=pizza]').prop('checked', true); // 모두 적용
});

// [name=pizza] 전체 체크 또는 해제
// #checkAll -> input:checkbox[name=pizza]
$(checkAll).on('change', (e) => {
    $('[name=pizza]').prop('checked', e.target.checked);
});

// 하위 제품 선택해제시 변경
// input:checkbox[name=pizza] -> #checkAll
$('[name=pizza]').on('change', (e) => {
    const $pizza = $('[name=pizza]');
    // let checkedCnt = 0;
    // $pizza.each((index, pizza) => {
    //     // console.log(index, pizza);
    //     pizza.checked && checkedCnt++;
    // });

    const checkedCnt = $('[name=pizza]:checked').length;
    // 전체체크박스 제어
    $(checkAll).prop('checked', checkedCnt == $pizza.length);
});