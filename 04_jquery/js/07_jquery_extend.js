/**
 * Object.assign (js)
 */
$(btn1).click(() => {
    const obj1 = {
        name : '통밀빵',
        price : 5000
    };
    const obj2 = {
        name : '바게뜨빵',
        color : ['brown', 'choco'],
        createdAt : '2023-12-07'
    };
    
    const newObj = Object.assign({}, obj1, obj2);
    console.log(newObj, obj1, obj2);

    // 얕은복사 확인
    obj2.color[0] = 'black'; // newObj.color[0]도 변경이 된다.
    
    
    
});

/**
 * $.extend (jquery)
*/
$(btn2).click(() => {
    const obj1 = {
        name : '통밀빵',
        price : 5000
    };
    const obj2 = {
        name : '바게뜨빵',
        color : ['brown', 'choco'],
        createdAt : '2023-12-07'
    };
    // const newObj = $.extend({}, obj1, obj2); // 얕은 복사 // newObj.color[0]도 변경이 된다.
    const newObj = $.extend(true, {}, obj1, obj2); // 깊은 복사 // newObj.color[0]도 변경이 되지 않는다.
    console.log(newObj, obj1, obj2);

    obj2.color[0] = 'black'; 
});
/**
 * jquery 객체 확장
 * - $.extend - static메소드 추가 $.foo()
 * - $.fn.extend - jQuery객체에 메소드 추가 $(...).foo()
 */
$(btn3).click(() => {
    $.extend({
        colorize(elem, color) {
            elem.style.color = color;
        }
    })

    console.log($.colorize);
    $.colorize(document.querySelector("#title"), 'red');

});

$(btn4).click(() => {
    $.fn.extend({
        colorize (color){
            // this용법7: jquery.fn확장객체의 메소드안 this는 현재 jquery객체
            console.log(this); // jQuery.fn.init [h1#title]
            this.css('color', color);
            return this; // method chaining이 가능한 이유
        },
        bgColorize (color){
            return this.css('backgroundColor', color);
        }
    });

    $("#title")
    .colorize('#fff')
    .bgColorize('purple')
    .css('font-size', '100px');
});


$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });