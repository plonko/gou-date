var classNames = ['delivery-day set','delivery-day hold'];

$('.delivery-day').click(function(){
    $(this).siblings().removeClass('set hold');
    $(this).toggleClass(function (i, className) {
        var index = (classNames.indexOf(className) + 1) % classNames.length;
        $(this).removeClass(className);
        return classNames[index];
    });
});