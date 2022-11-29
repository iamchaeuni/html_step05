//document.querySelector('h1').style.display = 'none'
$(function () {
    $('button').on('click', function () {
        $('h1').toggleClass('on')
    })
    $('.mainSlide').slick()

    $('.tabMenu .tit>li').on('click', function () {
        var num = $(this).index();
        // var는 변수선언, this는 내가 클릭한 이것이 됨.
        console.log(num);
        $('.tabMenu .tit>li').removeClass('on')
        $(this).addClass('on');
        // 12번과 13번의 순서가 바뀌면 절대 안됨.

        $('.tabMenu .con>li').removeClass('on');
        $('.tabMenu .con>li').eq(num).addClass('on');
    })
})
// 괄호 안에 있는 건 함수.
// toogle은 class를 붙혔다 땠다 하는 것.

