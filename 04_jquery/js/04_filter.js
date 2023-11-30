/**
 * filter관련 메소드
 * - jquery객체안의 요소를 필터링한 jquery객체를 반환
 * 
 * - filter(selector)
 * - first()
 * - last()
 * - eq(n)
 * - not(selector)
 * 
 * - end() : 필터링 전상태로 돌아가는 메소드
 * 
 */
$(btn1).on('click', () => {
    const $h4 = $('h4');
    console.log($h4);

    console.log(
        $h4
            // .filter('.test')
            // .first()
            // .last()
            // .eq(3)
            .not('.test')
            .css('color', 'tomato')
            .end() // 이전 상태로 돌아가서 모두 다 밑줄을 그음 prevObject
            .css('text-decoration', 'underline')
    );
    

});