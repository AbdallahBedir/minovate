$(document).ready(function(){
    $(".ui.dropdown").dropdown();
    const owl = $(".owl-carousel");
    $(".caption").children().animate({opacity:0},10);
    owl.owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        autoplayTimeout:10000,
        rtl:true,
        callbacks:true,
        nav:true,
        autoplay:true,
        /*loop:true,*/
        mouseDrag:false,
        dots:false,
        onInitialized  :DoInitialize,
        navText:['<i class="zmdi zmdi-chevron-right zmdi-hc-2x"></i>','<i class="zmdi zmdi-chevron-left zmdi-hc-2x"></i>']
    });
    owl.on('change.owl.carousel',function(property){
        const current = property.item.index;
        const currentCaption=$(property.target).find(".owl-item").eq(current).find(".caption");
        currentCaption.children().animate({opacity:0},500);
    });
    owl.on('changed.owl.carousel',function(property){
        const current = property.item.index;
        const currentCaption=$(property.target).find(".owl-item").eq(current).find(".caption");
        const captionChildrenLength = currentCaption.children().length;
        let delay = 700;
        for(let i=0;i<=captionChildrenLength;i++){
            currentCaption.children().eq(i).delay(delay).animate({opacity:1},500);
            delay+=700;
        }
    });
    function DoInitialize(){
        setTimeout( ()=>{
            let delay=700;
            for(let x=0;x<3;x++){
                $(".slide.first .caption").children().eq(x).delay(delay).animate({opacity:1},700);
                delay+=700;
            }
        },500)
    }
    // trigger countTo
    let CountTriggerd = false;
    $(window).on("scroll",function(){
        let timerOffset = $(".achievments").offset().top;
        let windowScroll = $(window).scrollTop();
        if(windowScroll+450 > timerOffset && CountTriggerd==false){
            $('.timer').countTo({
                speed:2500
            }); 
            CountTriggerd=true;      
        }    
    });
      $('.timer').countTo({
          speed:2500
      });

      // change the src images in small screen
       if (window.matchMedia('(max-width: 767px)').matches) {
            $(".slide:eq(1) img").attr("src","assets/images/new_slider021.jpg");
            $(".slide:eq(2) img").attr("src","assets/images/slider-2.jpg");
        } 
        else{
            $(".slide:eq(1) img").attr("src","assets/images/slide-banner2.jpg");
            $(".slide:eq(2) img").attr("src","assets/images/slide-banner3.jpg");
        }
        $(window).on("resize",function(){
          // change the src images in small screen
            if (window.matchMedia('(max-width: 767px)').matches) {
                $(".slide:eq(1) img").attr("src","assets/images/new_slider021.jpg");
                $(".slide:eq(2) img").attr("src","assets/images/slider-2.jpg");
            } 
            else{
                $(".slide:eq(1) img").attr("src","assets/images/slide-banner2.jpg");
                $(".slide:eq(2) img").attr("src","assets/images/slide-banner3.jpg");
            }
        })
})
