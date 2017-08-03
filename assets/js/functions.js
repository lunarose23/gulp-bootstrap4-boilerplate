 // Get started!

 $( document ).ready(function() {
         
          
          //mmenu
          var $mobileMenu = $("#menu").mmenu({
               // options
            }, {
               // configuration
               offCanvas: {
                  pageSelector: "#vela"
            }
          });

         
          $('#desktop-menu').onePageNav({
            currentClass: 'active',
            changeHash: true,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
            begin: function() {
              //I get fired when the animation is starting
            },
            end: function() {
              //I get fired when the animation is ending
            },
            scrollChange: function($currentListItem) {
              //I get fired when you enter a section and I pass the list item of the section
            }
          });

          $(window).scroll(function(){
            var scrollTop = 10;
            if($(window).scrollTop() >= scrollTop){
              $('#desktop-menu').css({
                position : 'fixed',
                top : '0'
              });
              $('#desktop-menu img').css({
                width : '80%',
              });
            }
            if($(window).scrollTop() < scrollTop){
              $('#desktop-menu').removeAttr('style'); 
              $('#desktop-menu img').removeAttr('style'); 
            }
          });
          $(window).scroll(function(){
            var scrollTop = 1235,
            scrollBottom = 2380;
            if($(window).scrollTop() >= scrollTop){
              $('.floating-phone').css({
                position : 'fixed',
                top : '30%',
                left: '0'
              });
            }

            if($(window).scrollTop() >= scrollBottom){
              $('.floating-phone').css({
                position : 'absolute',
                top : 'initial',
                bottom : '0',
                left: '0'
              });
            }

            if($(window).scrollTop() < scrollTop){
              $('.floating-phone').removeAttr('style'); 
            }
          });

          $(window).scroll(function(){
            var scrollTop = 797,
            scrollBottom = 1375;
            if($(window).scrollTop() >= scrollTop){
              $('.heart-icon').css({
                position : 'fixed',
                top : '52%',
                left: '32px'
              });
            }

            if($(window).scrollTop() >= scrollBottom){
              $('.heart-icon').css({
                position : 'absolute',
                top : 'initial',
                bottom : '48%',
                left: '0'
              });
            }

            if($(window).scrollTop() < scrollTop){
              $('.heart-icon').removeAttr('style'); 
            }
          });
               
                  
          //here to show mobile menu on click so that it does not show when page loads
          $('#menu-btn').on('click', function(){
            $('#menu').show();
          });


          //carousel
          $('#carouselCareCollaboration').carousel({ interval: false });
          $('#carouselInnovation').carousel({ interval: false });

          $('.care-next').on('click', function(){
            $('#carouselCareCollaboration').carousel('next');
          })
          $('.care-prev').on('click', function(){
            $('#carouselCareCollaboration').carousel('prev');
          })
          $('#care-digital-health').on('click', function(){
            $('#carouselCareCollaboration').carousel(0);
          })
          $('#care-venture-beat').on('click', function(){
            $('#carouselCareCollaboration').carousel(1);
          })
          $('#care-chatbots').on('click', function(){
            $('#carouselCareCollaboration').carousel(2);
          })
          

          $('.innovation-next').on('click', function(){
            $('#carouselInnovation').carousel('next');
          })
          $('.innovation-prev').on('click', function(){
            $('#carouselInnovation').carousel('prev');
          })
          $('#secure-messaging').on('click', function(){
            $('#carouselInnovation').carousel(0);
          })
          $('#machine-learning').on('click', function(){
            $('#carouselInnovation').carousel(1);
          })
          $('#chatbot-development').on('click', function(){
            $('#carouselInnovation').carousel(2);
          })

          //open sources
          $('.sources-toggle').on('click', function(){
            $(this).toggleClass('open-source');
          }); 
          $('.sources-toggle-large').on('click', function(){
              $(this).siblings('.sources-large').slideToggle();
              var addedIcon = $(this).find('span.added-icon'),
              minusIcon = $(this).find('span.minus-icon');
              addedIcon.add(minusIcon).toggle();
          }); 
          //open features
          $('.features-toggle').on('click', function(){
            $(this).toggleClass('open-features');
          });   
          //expand vela
          function toggleCollab(){
            $('.animated-from').toggleClass('col-md-4');
            $('.animated-from').toggleClass('col-md-8');
            $('.animated-from').toggleClass('active');
            $('.animated-to').toggleClass('col-md-4');
            $('.animated-to').toggleClass('col-md-8');
            $('.animated-to .block').toggleClass('col-xl-10');
            $('.animated-to .block').toggleClass('col-lg-12');
            $('.animated-to .block').toggleClass('col-md-6');
            $('.animated-from .block').toggleClass('col-xl-10');
            $('.animated-from .block').toggleClass('col-lg-12');
            $('.animated-from .block').toggleClass('col-md-6');
            $('.animated-to').toggleClass('active');
          }  
          $('.expand-vela').on('click', function(){
            toggleCollab();
          });   
          $('.circle-arrow').on('click', function(){
            toggleCollab();
          });   

          // Who benefits animation
          $('.people').hover(function(){
            $(this).toggleClass('active');
            var afterOpen =  $(this).children('.after-open'),
            beforeOpen =  $(this).find('.before-open'),
            afterOpen =  $(this).find('.after-open'),
            blackGradient =  $(this).find('.black-gradient');
            afterOpen.add(beforeOpen).add(blackGradient).fadeToggle();
          });


        
    });


 // close and hide mobile menu if it is not supposed to be on screen
      $(window).resize(function(){
        
        if ($(window).width() <= 767){
            API.close();
            $('#menu').hide();
        }
      });