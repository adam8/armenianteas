$(document).ready(function() {
  
    var isMobile = false;
                            
      $.fn.xfade = function (options) {
          options = jQuery.extend({
              duration: 3000,
              transition: false,
              speed: 1000
          }, options);
  
          if (!options.transition) {
              options.transition = function (from, to) {
                  from.fadeOut(options.speed);
                  to.fadeIn(options.speed);
              };
          }
  
          $(this).each(function () {
              var self = $(this);
              var first = self.children().eq(0);
              var current = first;
  
              self.children().slice(1).hide();
  
              function transition() {
                  var next = current.next();
                  if (next.size() == 0) {
                      next = first;
                  }
  
                  options.transition(current, next);
                  current = next;
  
                  setTimeout(transition, options.duration);
              }
  
              setTimeout(transition, options.duration);
          });
      };
   
    pics_home = [
            'alpine-meadow.jpg',
          'old-armenian-man.jpg',
            'armenian-woman-picking-herbal-teas.jpg',
            'proudly-displaying-tea-harvest.jpg'
            ];
    pics_our_teas = [
            'authentic-herbal-tea.jpg',
            'armenian-mountain-valley-village-with-rainbow.jpg',
            'authentic-wild-mountain-teas.jpg'
            ];
    pics_about_us = [
            'collecting-wild-herbal-teas.jpg',
            'wild-armenian-tea-harvest.jpg',
            'armenian-family-collecting-wild-herbs-for-tea.jpg'
            ];
    pics_blog = ['herbal-tea-with-armenian-keyboard.jpg'];
    pics_thanks = ['thanks.jpg'];
    pics = [
            'old-armenian-man.jpg',
            'armenian-woman-picking-herbal-teas.jpg',
            'proudly-displaying-tea-harvest.jpg',
            'authentic-herbal-tea.jpg',
            'armenian-mountain-valley-village-with-rainbow.jpg',
            'authentic-wild-mountain-teas.jpg',
            'collecting-wild-herbal-teas.jpg',
            'wild-armenian-tea-harvest.jpg',
            'armenian-family-collecting-wild-herbs-for-tea.jpg',
            'herbal-tea-with-armenian-keyboard.jpg'
            ]; 
  
  
  
    if ($('.tea-harvest').length>0) {
          $('#header').append('<div id="screen-flash" style="width:777px;height:351px;position:relative;z-index:20;"><video autoplay controls="controls" poster="https://storage.googleapis.com/static.authentic-teas.com/vid/armenian-tea-harvest.jpg" width="777" height="351"><source src="https://storage.googleapis.com/static.authentic-teas.com/vid/armenian-tea-harvest2.mp4" type="video/mp4" /></video></div>');
          var v = document.createElement("video"); // Are we dealing with a browser that supports <video>? 
          if ( !v.play || !v.canPlayType("video/mp4") ) { // If browser can't play <video> or h.264
              var flashvars = {};
              flashvars.src = "https://storage.googleapis.com/static.authentic-teas.com/vid/armenian-tea-harvest2.mp4";
              flashvars.controlBarMode = "floating";
              flashvars.poster="https://storage.googleapis.com/static.authentic-teas.com/vid/armenian-tea-harvest.jpg";
              var params = {};
              params.allowfullscreen = "true";
              params.allowscriptaccess = "always";
              params.bgcolor = "#FFFFFF";
              var attributes = {};
              swfobject.embedSWF("https://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf", "screen-flash", "777", "351", "9.0.0", false, flashvars, params, attributes); 
          }
        } else if ($('.blog').length>0) {
          $('#header').append('<img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_blog[0] + '" width="777" height="351" alt="" /><div id="home-header-tagline1">Pure.</div><div id="home-header-tagline2">Armenian</div><div id="home-header-tagline-mobile"></div>');
        
        } else if ($('.home').length>0) {
          $('#header').append('<div id="header-slideshow"><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_home[0] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_home[1] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_home[2] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_home[3] + '" width="777" height="351" alt="" /></div><div id="home-header-tagline1" style="display:none;">Pure.</div><div id="home-header-tagline2" style="display:none;">Armenian</div><div id="home-header-tagline-mobile"></div>');
          $('#header-slideshow').xfade({duration: 3500, speed: 400});
        } else if ($('.our-teas').length>0) {
          $('#header').append('<div id="header-slideshow"><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_our_teas[0] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_our_teas[1] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_our_teas[2] + '" width="777" height="351" alt="" /></div><div id="home-header-tagline1">Pure.</div><div id="home-header-tagline2">Armenian</div><div id="home-header-tagline-mobile"></div>');
          $('#header-slideshow').xfade({duration: 4500, speed: 400});
        } else if ($('.about').length>0) {
          $('#header').append('<div id="header-slideshow"><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_about_us[0] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_about_us[1] + '" width="777" height="351" alt="" /><img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_about_us[2] + '" width="777" height="351" alt="" /></div><div id="home-header-tagline1">Pure.</div><div id="home-header-tagline2">Armenian</div><div id="home-header-tagline-mobile"></div>');
          $('#header-slideshow').xfade({duration: 4500, speed: 400});
    } else if ($('.tea-shop').length<0 && $('#admin').length<0) {
          $('#header').append('<img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_blog[0] + '" width="777" height="351" alt="" /><div id="home-header-tagline1">Pure.</div><div id="home-header-tagline2">Armenian</div>');  
        } else if ($('.thanks').length>0) {
          $('#header').append('<img class="pic-header" src="https://storage.googleapis.com/static.authentic-teas.com/img/' + pics_thanks[0] + '" width="777" height="351" alt="" /><div id="home-header-tagline1">Pure.</div><div id="home-header-tagline2">Armenian</div>');
      }
  
    
     
  
  
  
  
    
    
    if (($('.home').length>0)) {
          $('#home-header-tagline1').delay(2000).fadeIn(600, 'linear',function() {
                  $('#home-header-tagline2').delay(2000).fadeIn(500, 'linear');		 
          });
    }
    
    
  
     
     if ($('body.i18n_fr').length>0) {
             $('#nav').append($('<li class="nav1 nav-tier1"><a href="/shop/" class="nav-tea-shop nav-link-tier1">La boutique</a></li>')); 
     } else { 
             //$('#nav li:first').after($('<li class="nav1"><a class="nav-blog" href="http://blog.authentic-teas.com/">Blog</a></li>'));
             $('#nav').append($('<li class="nav1 nav-tier1"><a href="/shop/" class="nav-tea-shop nav-link-tier1">Tea Shop</a></li>'));  
     }
    
    $(window).bind('load', function() {
                                    
                                    
        /*
        $('#header').append('<div id="social-fb-like"><div id="social-fb-find"><a href="https://www.facebook.com/AuthenticTeas/"><img src="https://storage.googleapis.com/clients.adam8.com/www.authentic-teas.com/img/find-us-on-facebook.gif" width="81" height="29" alt="find us on facebook" /></a></div><iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.authentic-teas.com/our-teas/&amp;layout=button_count&amp;show_faces=false&amp;width=85&amp;action=like&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:95px; height:24px;" allowTransparency="true"></iframe></div><div id="social-twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-count="none"> </a><script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script></div>');
        */
                                    
                                    
        function preload(arrayOfImages) {
            $(arrayOfImages).each(function() {
                $('<img/>')[0].src = this;
            });
        }
        preload(['https://storage.googleapis.com/static.authentic-teas.com/img/alpine-meadow.jpg',
                 'https://storage.googleapis.com/static.authentic-teas.com/img/old-armenian-man.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/armenian-woman-picking-herbal-teas.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/proudly-displaying-tea-harvest.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/authentic-herbal-tea.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/armenian-mountain-valley-village-with-rainbow.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/authentic-wild-mountain-teas.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/collecting-wild-herbal-teas.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/wild-armenian-tea-harvest.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/armenian-family-collecting-wild-herbs-for-tea.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/herbal-tea-with-armenian-keyboard.jpg'
                 
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/tea-packages2.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/authentic-teas-packaging2.jpg'
                 ,'https://storage.googleapis.com/static.authentic-teas.com/img/thanks.jpg'
                 ]);
    });
    
  
      $('.pic-header').click(
      function() {
          window.location = "https://www.authentic-teas.com/shop/";
      });
      
      
      
  
  
  
  
  //*********** 	TEA SHOP
      
      $('#tea-shop-address input').eq(1).focus();	
      $(".tea-shop-item").first().addClass('tea-shop-item-active').fadeIn("slow");
      $('#tea-list li').first().addClass('tea-shop-list-item-active');
      
      
      if ($('body.i18n_fr').length>0) {
          $('#shop-list .noahs-blend').before('<span class="shop-title">Tisane</span>');
          $('#shop-list .babiks-blend').before('<span class="shop-title">Th&eacute; Noir</span>');
          $('#shop-list .golden-blend').before('<span class="shop-title">Th&eacute; Vert</span>');
          $('#shop-list .highlands-sampler').before('<span class="shop-title">&Eacute;chantillons</span>');
      } else {
          $('#shop-list .noahs-blend').before('<span class="shop-title">Herbal Teas</span>');
          $('#shop-list .babiks-blend').before('<span class="shop-title">Black Teas</span>');
          $('#shop-list .golden-blend').before('<span class="shop-title">Green Teas</span>');
          $('#shop-list .highlands-sampler').before('<span class="shop-title">Samplers</span>');
      }
      
      function autoAdvance() {
        if (isMobile !== false) {
            current = $('#tea-list li').index($('.tea-shop-list-item-active')) + 1;
            if ( current >= $('#tea-list li').length ) {
              current = 0;
            }
            
            $('.tea-shop-item-active').removeClass("tea-shop-item-active");
            $('#tea-list li').removeClass("tea-shop-list-item-active");
            $('#tea-list li').eq(current).addClass('tea-shop-list-item-active');
            $(".tea-shop-item").eq(current).addClass('tea-shop-item-active');   
          }
      }
      
      
    window.clearInterval(theTimer);
      if (isMobile !== false) {
        var theTimer = window.setInterval(autoAdvance, 2500);
      }
      
      
      $('#tea-list li').mouseover(function() {
        if (isMobile !== false) {
          console.log('is not Mobile');
            window.clearInterval(theTimer);
            $('.tea-shop-item-active').removeClass("tea-shop-item-active");
            $('#tea-list li').removeClass("tea-shop-list-item-active");
            $(this).addClass('tea-shop-list-item-active');
            $(this).css('cursor', 'default');
            var itemNum = $('#tea-list li').index(this);
            $(".tea-shop-item").eq(itemNum).addClass('tea-shop-item-active');						
          }					
      });
      
      $('#armenian-tea-order-details').fadeIn('slow');
      
      $('.more-info a').click(function() {
        window.clearInterval(theTimer);
      });
      
      
    
    
    
    
    
    
    /*
      Do JavaScript stuff if mobile for show/hide shopping cart details
    */
    
    
    function showDetail(e) {
      var listNum = $('.product-title').index(e.target);
      if ( !$(this).next('.shop-item').length ) {
        $('#shop-list li .shop-item').remove();
        $(this).after( $('#products .shop-item').eq(listNum).clone() );
      } else {
        $('#shop-list li .shop-item').remove();
      }
    }
    
    function checkWindowSize() {
      if ($(window).width() < 800) {
         isMobile = true;
         $( ".product-title" ).on( "click", showDetail );
      }
     else {
         isMobile = false;
         $( ".product-title" ).off( "click", showDetail );
     }
    }
    
    $(window).resize(function() {
      checkWindowSize();
    });
    
    checkWindowSize();
  
  });


WebFontConfig = {
    google: { families: [ 'Vollkorn:regular,italic,bold,bolditalic' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = 'https//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();



$(document).ready(function () {
    var randQuote = Math.floor(Math.random() * $(".quote-item").length);
    $(".quote-item:eq(" + randQuote + ")").fadeIn();


    $(".slideshow-photo-link a").click(function (e) {
      e.preventDefault();
      return false;
    });
  });
