// Set up a 3 state button, but so you can't get back to the 'unset' state
var classNames = ['delivery-day set','delivery-day hold'];

$('.delivery-day').click(function(){
    $(this).siblings().removeClass('set hold');
    $(this).toggleClass(function (i, className) {
        var index = (classNames.indexOf(className) + 1) % classNames.length;
        $(this).removeClass(className);
        return classNames[index];
    });
});

// Build an object with all the dates per week, per month
// This could be sent off to the server as JSON
function getDates() {
    var deliveryDates = {};
    $('.date-picker').each(function(){
        var month = $(this).find('.month').data('month');
        deliveryDates[month] = [];
        $(this).find('.week').each(function(index){
            var date = $(this).find('.set').text();
            deliveryDates[month].push(date);
        });
    });
    return deliveryDates;
}


// Fake console log
$('.submit').click(function(){
    var dates = getDates();
    console.log(dates);
    var html = '{<br>';
    $.each(dates, function(key, element) {
        html += '&nbsp;&nbsp;' + key + ':' + '[' + element+ ']<br>';
    });
    html += '}'
    $('.console').html(html);
    return false;
})