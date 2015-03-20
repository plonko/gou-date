var classNames = ['delivery-day set','delivery-day hold'];

$('.delivery-day').click(function(){
    $(this).siblings().removeClass('set hold');
    $(this).toggleClass(function (i, className) {
        var index = (classNames.indexOf(className) + 1) % classNames.length;
        $(this).removeClass(className);
        return classNames[index];
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2xhc3NOYW1lcyA9IFsnZGVsaXZlcnktZGF5IHNldCcsJ2RlbGl2ZXJ5LWRheSBob2xkJ107XG5cbiQoJy5kZWxpdmVyeS1kYXknKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2V0IGhvbGQnKTtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKGZ1bmN0aW9uIChpLCBjbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gKGNsYXNzTmFtZXMuaW5kZXhPZihjbGFzc05hbWUpICsgMSkgJSBjbGFzc05hbWVzLmxlbmd0aDtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lc1tpbmRleF07XG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=