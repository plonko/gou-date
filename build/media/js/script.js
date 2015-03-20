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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTZXQgdXAgYSAzIHN0YXRlIGJ1dHRvbiwgYnV0IHNvIHlvdSBjYW4ndCBnZXQgYmFjayB0byB0aGUgJ3Vuc2V0JyBzdGF0ZVxudmFyIGNsYXNzTmFtZXMgPSBbJ2RlbGl2ZXJ5LWRheSBzZXQnLCdkZWxpdmVyeS1kYXkgaG9sZCddO1xuXG4kKCcuZGVsaXZlcnktZGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NldCBob2xkJyk7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhmdW5jdGlvbiAoaSwgY2xhc3NOYW1lKSB7XG4gICAgICAgIHZhciBpbmRleCA9IChjbGFzc05hbWVzLmluZGV4T2YoY2xhc3NOYW1lKSArIDEpICUgY2xhc3NOYW1lcy5sZW5ndGg7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXNbaW5kZXhdO1xuICAgIH0pO1xufSk7XG5cbi8vIEJ1aWxkIGFuIG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0ZXMgcGVyIHdlZWssIHBlciBtb250aFxuLy8gVGhpcyBjb3VsZCBiZSBzZW50IG9mZiB0byB0aGUgc2VydmVyIGFzIEpTT05cbmZ1bmN0aW9uIGdldERhdGVzKCkge1xuICAgIHZhciBkZWxpdmVyeURhdGVzID0ge307XG4gICAgJCgnLmRhdGUtcGlja2VyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgbW9udGggPSAkKHRoaXMpLmZpbmQoJy5tb250aCcpLmRhdGEoJ21vbnRoJyk7XG4gICAgICAgIGRlbGl2ZXJ5RGF0ZXNbbW9udGhdID0gW107XG4gICAgICAgICQodGhpcykuZmluZCgnLndlZWsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICAgIHZhciBkYXRlID0gJCh0aGlzKS5maW5kKCcuc2V0JykudGV4dCgpO1xuICAgICAgICAgICAgZGVsaXZlcnlEYXRlc1ttb250aF0ucHVzaChkYXRlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlbGl2ZXJ5RGF0ZXM7XG59XG5cblxuLy8gRmFrZSBjb25zb2xlIGxvZ1xuJCgnLnN1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGRhdGVzID0gZ2V0RGF0ZXMoKTtcbiAgICBjb25zb2xlLmxvZyhkYXRlcyk7XG4gICAgdmFyIGh0bWwgPSAnezxicj4nO1xuICAgICQuZWFjaChkYXRlcywgZnVuY3Rpb24oa2V5LCBlbGVtZW50KSB7XG4gICAgICAgIGh0bWwgKz0gJyZuYnNwOyZuYnNwOycgKyBrZXkgKyAnOicgKyAnWycgKyBlbGVtZW50KyAnXTxicj4nO1xuICAgIH0pO1xuICAgIGh0bWwgKz0gJ30nXG4gICAgJCgnLmNvbnNvbGUnKS5odG1sKGh0bWwpO1xuICAgIHJldHVybiBmYWxzZTtcbn0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9