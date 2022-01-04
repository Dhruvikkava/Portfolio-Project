
$(document).ready(function(){

    $('.filter-item').click(function(){
        

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.gallary-item-inner').show(400);
        }else{
            $('.gallary-item-inner').not('.'+filter).hide(200);
            $('.gallary-item-inner').filter('.'+filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }

    });

    $(window).scroll(function() {    
        $('.nav-items').click(function(){

            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    
    
});

