$(document).ready(function(){

    function clickSingleA(a)
    {
        items = document.querySelectorAll('.single.active');

        if(items.length) 
        {
            items[0].className = 'single';
        }

        a.className = 'single active';
    }


	$(".section-about").waypoint(function(direction) {
        if(direction=="down") {
            $('.sector').addClass('navigation');
        }
        else {
            $('.sector').removeClass('navigation');
        }
    });
});

