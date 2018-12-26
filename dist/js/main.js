$(function() {
    function c(el) {
        console.log(el);
    }

    $(".inner img").fadeIn(800);

    
    /* elem - must have opacity: 0; */
    function showSiteName(elem) {
        let spans = $(elem);
        
        setTimeout(function() {
        
            for(let i = 0; i < spans.length; i++) {
                
                let it = i;
                let el = spans[i];
                setTimeout(function () {
                    // el.show();
                    el.style = "opacity: 1";
                },220*it);
                
            }
    
        }, 700);
    }
    
    showSiteName(".inner p span");

    setTimeout(function() {
        if($(".inner p span:last-child").css('opacity') == 1) {
            $(".inner img").addClass('popUp2');

            setTimeout(function() {
                $(".showLogo").fadeOut(500);
                $("#wrap").addClass('main').animate({
                    backgroundSize: '100%',
                    color: '#fff !important'
                }, 2000);
                $("select, #wrap a").css({
                    color: '#fff'
                });
                $("select option").css({
                    color: '#000 !important'
                });
                $(".mainText").animate({
                    left: '45%'
                }, 1500);
                $(".mainText h1").animate({
                    marginLeft: '0'
                }, 2000);
                $(".mainText p").animate({
                    marginLeft: '0'
                }, 2500);
                // $("#wrap li").css({
                //     borderBottomColor: '#B29A73'
                // });
            }, 1000);
        } 
    }, 2000);
});