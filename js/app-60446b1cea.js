(function(){jQuery(function(){var t,o,a;if(App.init(),LayoutBrand.init(),LayoutHeader.init(),LayoutMegaMenu.init(),LayoutGo2Top.init(),LayoutOnepageNav.init(),ContentOwlcarousel.init(),ContentCubeLatestPortfolio.init(),t=$("#contact-form"),a=!1,t.find(".form-control").on("focus",function(){if(!a)return $.get(t.attr("action")),a=!0}),o=!1,t.submit(function(){var e;return!o&&(o=!0,e=t.find(":submit"),e.button("loading"),$.post(t.attr("action"),t.serialize()).always(function(){return t.find(".form-msg").hide(),o=!1,e.button("reset")}).done(function(){return t[0].reset(),t.find(".form-msg.done").show().delay(3e3).hide(0)}).fail(function(){return t.find(".form-msg.fail").show().delay(3e3).hide(0)}),!1)}),$(".c-layout-revo-slider-8 .tp-banner").show().revolution({sliderType:"standard",sliderLayout:"fullscreen",gridwidth:4064,gridheight:720,delay:1e4,startwidth:1170,startheight:App.getViewPort().height,navigationType:"hide",navigationArrows:"solo",touchenabled:"on",navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"off",arrows:{style:"circle",enable:!0,hide_onmobile:!1,hide_onleave:!1,tmp:"",left:{h_align:"left",v_align:"center",h_offset:30,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:30,v_offset:0}}},spinner:"spinner2",shadow:0,disableProgressBar:"on",hideThumbsOnMobile:"on",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"on",hideArrowsOnMobile:"on",hideThumbsUnderResolution:0}),$(".c-layout-revo-slider-4 .tp-banner").show().revolution({sliderType:"standard",sliderLayout:"fullwidth",delay:2e3,autoHeight:"off",gridheight:500,navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",arrows:{style:"circle",enable:!0,hide_onmobile:!1,hide_onleave:!1,tmp:"",left:{h_align:"left",v_align:"center",h_offset:30,v_offset:0},right:{h_align:"right",v_align:"center",h_offset:30,v_offset:0}},touch:{touchenabled:"on",swipe_threshold:75,swipe_min_touches:1,swipe_direction:"horizontal",drag_block_vertical:!1}},viewPort:{enable:!0,outof:"pause",visible_area:"80%"},shadow:0,spinner:"spinner2",disableProgressBar:"on",fullScreenOffsetContainer:".tp-banner-container",hideThumbsOnMobile:"on",hideNavDelayOnMobile:1500,hideBulletsOnMobile:"on",hideArrowsOnMobile:"on",hideThumbsUnderResolution:0}),window.google)return google.maps.event.addDomListener(window,"load",function(){var t,o,a,n,i,c,r;if(t=$("#gmapbg"),t.length>0&&(o=t.data("lat"),a=t.data("long"),i=t.data("marker"),c=App.getViewPort().width>App.getBreakpoint("md")?.015:0,n=new google.maps.Map(t.get(0),{zoom:15,scrollwheel:!1,center:new google.maps.LatLng(o,a+c)}),i))return r=new google.maps.OverlayView,r.setMap(n),r.onAdd=function(){var t,o,a,n,c,s,l,d;for(t=document.createElement("div"),t.style.borderStyle="none",t.style.borderWidth="0px",t.style.position="absolute",t.style.zIndex=100,t.innerHTML='<div class="map-overlay">'+i+"</div>",r.el=t,l=this.getPanes(),s=l.overlayLayer,s.appendChild(t),d=["contextmenu","DOMMouseScroll","dblclick","mousedown"],o=function(o){return google.maps.event.addDomListener(t,o,function(){return navigator.userAgent.toLowerCase().indexOf("msie")!==-1&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()})},a=0,n=d.length;a<n;a++)c=d[a],o(c);return google.maps.event.trigger(this,"ready")},r.draw=function(){var e,t,n,i,c,s;return s=this.getProjection(),c=s.fromLatLngToDivPixel(new google.maps.LatLng(o,a)),i=r.el,e=i.children[0],t=e.clientHeight,n=e.clientWidth,i.style.top=c.y-t/2+"px",i.style.left=c.x-n/2+"px",i.style.display="block"},r.onRemove=function(){var e;return e=r.el,r.el.parentNode.removeChild(r.el),r.el=null}})})}).call(this);var App=function(){var e,t=!1,o=!1,a=!1,n=[],i=function(){t=!!navigator.userAgent.match(/MSIE 9.0/),o=!!navigator.userAgent.match(/MSIE 10.0/),a=navigator.userAgent.indexOf("MSIE ")>-1||navigator.userAgent.indexOf("Trident/")>-1,o&&$("html").addClass("ie10"),t&&$("html").addClass("ie9"),a&&$("html").addClass("ie")},c=function(){for(var e=0;e<n.length;e++){var t=n[e];t.call()}},r=function(){$("[data-auto-height]").each(function(){var e=$(this),t=$("[data-height]",e),o=0,a=e.attr("data-mode"),n=parseInt(e.attr("data-offset")?e.attr("data-offset"):0);t.each(function(){"height"==$(this).attr("data-height")?$(this).css("height",""):$(this).css("min-height","");var e="base-height"==a?$(this).outerHeight():$(this).outerHeight(!0);e>o&&(o=e)}),o+=n,t.each(function(){"height"==$(this).attr("data-height")?$(this).css("height",o):$(this).css("min-height",o)}),e.attr("data-related")&&$(e.attr("data-related")).css("height",e.height())})},s=function(){var e;$(window).resize(function(){e&&clearTimeout(e),e=setTimeout(function(){c()},50)})},l=function(){$("body").on("click",".c-checkbox > label, .c-radio > label",function(){var e=$(this),t=$(this).children("span:first-child");t.addClass("inc");var o=t.clone(!0);t.before(o),$("."+t.attr("class")+":last",e).remove()})},d=function(){$("body").on("shown.bs.collapse",".accordion.scrollable",function(e){Jango.scrollTo($(e.target))})},u=function(){if(location.hash){var e=encodeURI(location.hash.substr(1));$('a[href="#'+e+'"]').parents(".tab-pane:hidden").each(function(){var e=$(this).attr("id");$('a[href="#'+e+'"]').click()}),$('a[href="#'+e+'"]').click()}},h=function(){$("body").on("hide.bs.modal",function(){$(".modal:visible").size()>1&&$("html").hasClass("modal-open")===!1?$("html").addClass("modal-open"):$(".modal:visible").size()<=1&&$("html").removeClass("modal-open")}),$("body").on("show.bs.modal",".modal",function(){$(this).hasClass("modal-scroll")&&$("body").addClass("modal-open-noscroll")}),$("body").on("hide.bs.modal",".modal",function(){$("body").removeClass("modal-open-noscroll")}),$("body").on("hidden.bs.modal",".modal:not(.modal-cached)",function(){$(this).removeData("bs.modal")})},p=function(){$(".tooltips").tooltip()},f=function(){$("body").on("click",".dropdown-menu.hold-on-click",function(e){e.stopPropagation()})},g=function(){$("body").on("click",'[data-close="alert"]',function(e){$(this).parent(".alert").hide(),$(this).closest(".note").hide(),e.preventDefault()}),$("body").on("click",'[data-close="note"]',function(e){$(this).closest(".note").hide(),e.preventDefault()}),$("body").on("click",'[data-remove="note"]',function(e){$(this).closest(".note").remove(),e.preventDefault()})},m=function(){$(".popovers").popover(),$(document).on("click.bs.popover.data-api",function(t){e&&e.popover("hide")})},v=function(){(t||o)&&$("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function(){var e=$(this);""===e.val()&&""!==e.attr("placeholder")&&e.addClass("placeholder").val(e.attr("placeholder")),e.focus(function(){e.val()==e.attr("placeholder")&&e.val("")}),e.blur(function(){""!==e.val()&&e.val()!=e.attr("placeholder")||e.val(e.attr("placeholder"))})})};return{init:function(){r(),this.addResizeHandler(r),i(),s(),l(),g(),f(),u(),p(),m(),d(),h(),v()},changeLogo:function(e){var t="../assets/jango/img/layout/logos/"+e+".png";$(".c-brand img.c-desktop-logo").attr("src",t)},setLastPopedPopover:function(t){e=t},addResizeHandler:function(e){n.push(e)},runResizeHandlers:function(){c()},scrollTo:function(e,t){var o=e&&e.size()>0?e.offset().top:0;e&&($("body").hasClass("page-header-fixed")&&(o-=$(".page-header").height()),o+=t?t:-1*e.height()),$("html,body").animate({scrollTop:o},"slow")},scrollTop:function(){Jango.scrollTo()},initFancybox:function(){handleFancybox()},getActualVal:function(e){return e=$(e),e.val()===e.attr("placeholder")?"":e.val()},getURLParameter:function(e){var t,o,a=window.location.search.substring(1),n=a.split("&");for(t=0;t<n.length;t++)if(o=n[t].split("="),o[0]==e)return unescape(o[1]);return null},isTouchDevice:function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}},getViewPort:function(){var e=window,t="inner";return"innerWidth"in window||(t="client",e=document.documentElement||document.body),{width:e[t+"Width"],height:e[t+"Height"]}},getUniqueID:function(e){return"prefix_"+Math.floor(Math.random()*(new Date).getTime())},isIE:function(){return a},isIE9:function(){return t},isIE10:function(){return o},getBreakpoint:function(e){var t={xs:480,sm:768,md:992,lg:1200};return t[e]?t[e]:0}}}(),LayoutBrand=function(){return{init:function(){$("body").on("click",".c-hor-nav-toggler",function(){var e=$(this).data("target");$(e).toggleClass("c-shown")})}}}(),LayoutHeaderCart=function(){return{init:function(){var e=$(".c-cart-menu");0!==e.size()&&(App.getViewPort().width<App.getBreakpoint("md")?($("body").on("click",".c-cart-toggler",function(e){e.preventDefault(),e.stopPropagation(),$("body").toggleClass("c-header-cart-shown")}),$("body").on("click",function(t){e.is(t.target)||0!==e.has(t.target).length||$("body").removeClass("c-header-cart-shown")})):($("body").on("hover",".c-cart-toggler, .c-cart-menu",function(e){$("body").addClass("c-header-cart-shown")}),$("body").on("hover",".c-mega-menu > .navbar-nav > li:not(.c-cart-toggler-wrapper)",function(e){$("body").removeClass("c-header-cart-shown")}),$("body").on("mouseleave",".c-cart-menu",function(e){$("body").removeClass("c-header-cart-shown")})))}}}(),LayoutHeader=function(){var e=parseInt($(".c-layout-header").attr("data-minimize-offset")>0?parseInt($(".c-layout-header").attr("data-minimize-offset")):0),t=function(){$(window).scrollTop()>e?$("body").addClass("c-page-on-scroll"):$("body").removeClass("c-page-on-scroll")},o=function(){$(".c-layout-header .c-topbar-toggler").on("click",function(e){$(".c-layout-header-topbar-collapse").toggleClass("c-topbar-expanded")})};return{init:function(){$("body").hasClass("c-layout-header-fixed-non-minimized")||(t(),o(),$(window).scroll(function(){t()}))}}}(),LayoutMegaMenu=function(){return{init:function(){$(".c-mega-menu").on("click",".c-toggler",function(e){App.getViewPort().width<App.getBreakpoint("md")&&(e.preventDefault(),$(this).closest("li").hasClass("c-open")?$(this).closest("li").removeClass("c-open"):$(this).closest("li").addClass("c-open"))}),$(".c-layout-header .c-hor-nav-toggler:not(.c-quick-sidebar-toggler)").on("click",function(){if($(".c-layout-header").toggleClass("c-mega-menu-shown"),$("body").hasClass("c-layout-header-mobile-fixed")){var e=App.getViewPort().height-$(".c-layout-header").outerHeight(!0)-60;$(".c-mega-menu").css("max-height",e)}})}}}(),LayoutSidebarMenu=function(){return{init:function(){$(".c-layout-sidebar-menu > .c-sidebar-menu .c-toggler").on("click",function(e){e.preventDefault(),$(this).closest(".c-dropdown").toggleClass("c-open")})}}}(),LayoutQuickSearch=function(){return{init:function(){$(".c-layout-header").on("click",".c-mega-menu .c-search-toggler",function(e){e.preventDefault(),$("body").addClass("c-layout-quick-search-shown"),App.isIE()===!1&&$(".c-quick-search > .form-control").focus()}),$(".c-layout-header").on("click",".c-brand .c-search-toggler",function(e){e.preventDefault(),$("body").addClass("c-layout-quick-search-shown"),App.isIE()===!1&&$(".c-quick-search > .form-control").focus()}),$(".c-quick-search").on("click","> span",function(e){e.preventDefault(),$("body").removeClass("c-layout-quick-search-shown")})}}}(),LayoutCartMenu=function(){return{init:function(){$(".c-layout-header").on("mouseenter",".c-mega-menu .c-cart-toggler-wrapper",function(e){e.preventDefault(),$(".c-cart-menu").addClass("c-layout-cart-menu-shown")}),$(".c-cart-menu, .c-layout-header").on("mouseleave",function(e){e.preventDefault(),$(".c-cart-menu").removeClass("c-layout-cart-menu-shown")}),$(".c-layout-header").on("click",".c-brand .c-cart-toggler",function(e){e.preventDefault(),$(".c-cart-menu").toggleClass("c-layout-cart-menu-shown")})}}}(),LayoutQuickSidebar=function(){return{init:function(){$(".c-layout-header").on("click",".c-quick-sidebar-toggler",function(e){e.preventDefault(),e.stopPropagation(),$("body").hasClass("c-layout-quick-sidebar-shown")?$("body").removeClass("c-layout-quick-sidebar-shown"):$("body").addClass("c-layout-quick-sidebar-shown")}),$(".c-layout-quick-sidebar").on("click",".c-close",function(e){e.preventDefault(),$("body").removeClass("c-layout-quick-sidebar-shown")}),$(".c-layout-quick-sidebar").on("click",function(e){e.stopPropagation()}),$(document).on("click",".c-layout-quick-sidebar-shown",function(e){$(this).removeClass("c-layout-quick-sidebar-shown")})}}}(),LayoutGo2Top=function(){var e=function(){var e=$(window).scrollTop();e>300?$(".c-layout-go2top").show():$(".c-layout-go2top").hide()};return{init:function(){e(),navigator.userAgent.match(/iPhone|iPad|iPod/i)?$(window).bind("touchend touchcancel touchleave",function(t){e()}):$(window).scroll(function(){e()}),$(".c-layout-go2top").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},600)})}}}(),LayoutOnepageNav=function(){var e=function(){var e,t,o;$("body").addClass("c-page-on-scroll"),e=$(".c-layout-header-onepage").outerHeight(!0),$("body").removeClass("c-page-on-scroll"),$(".c-mega-menu-onepage-dots").size()>0?($(".c-onepage-dots-nav").size()>0&&$(".c-onepage-dots-nav").css("margin-top",-($(".c-onepage-dots-nav").outerHeight(!0)/2)),t=$("body").scrollspy({target:".c-mega-menu-onepage-dots",offset:e}),o=parseInt($(".c-mega-menu-onepage-dots").attr("data-onepage-animation-speed"))):(t=$("body").scrollspy({target:".c-mega-menu-onepage",offset:e}),o=parseInt($(".c-mega-menu-onepage").attr("data-onepage-animation-speed"))),t.on("activate.bs.scrollspy",function(){$(this).find(".c-onepage-link.c-active").removeClass("c-active"),$(this).find(".c-onepage-link.active").addClass("c-active")}),$(".c-onepage-link > a").on("click",function(t){var a=$(this).attr("href"),n=0;"#home"!==a&&(n=$(a).offset().top-e+1),$("html, body").stop().animate({scrollTop:n},o,"easeInExpo"),t.preventDefault(),App.getViewPort().width<App.getBreakpoint("md")&&$(".c-hor-nav-toggler").click()})};return{init:function(){e()}}}(),LayoutThemeSettings=function(){var e=function(){$(".c-settings .c-color").on("click",function(){var e=$(this).attr("data-color");$("#style_theme").attr("href","assets/base/css/themes/"+e+".css"),$(".c-settings .c-color").removeClass("c-active"),$(this).addClass("c-active")}),$(".c-setting_header-type").on("click",function(){var e=$(this).attr("data-value");"fluid"==e?($(".c-layout-header .c-topbar > .container").removeClass("container").addClass("container-fluid"),$(".c-layout-header .c-navbar > .container").removeClass("container").addClass("container-fluid")):($(".c-layout-header .c-topbar > .container-fluid").removeClass("container-fluid").addClass("container"),$(".c-layout-header .c-navbar > .container-fluid").removeClass("container-fluid").addClass("container")),$(".c-setting_header-type").removeClass("active"),$(this).addClass("active")}),$(".c-setting_header-mode").on("click",function(){var e=$(this).attr("data-value");"static"==e?$("body").removeClass("c-layout-header-fixed").addClass("c-layout-header-static"):$("body").removeClass("c-layout-header-static").addClass("c-layout-header-fixed"),$(".c-setting_header-mode").removeClass("active"),$(this).addClass("active")}),$(".c-setting_font-style").on("click",function(){var e=$(this).attr("data-value");"light"==e?($(".c-font-uppercase").addClass("c-font-uppercase-reset").removeClass("c-font-uppercase"),$(".c-font-bold").addClass("c-font-bold-reset").removeClass("c-font-bold"),$(".c-fonts-uppercase").addClass("c-fonts-uppercase-reset").removeClass("c-fonts-uppercase"),$(".c-fonts-bold").addClass("c-fonts-bold-reset").removeClass("c-fonts-bold")):($(".c-font-uppercase-reset").addClass("c-font-uppercase").removeClass("c-font-uppercase-reset"),$(".c-font-bold-reset").addClass("c-font-bold").removeClass("c-font-bold-reset"),$(".c-fonts-uppercase-reset").addClass("c-fonts-uppercase").removeClass("c-fonts-uppercase-reset"),$(".c-fonts-bold-reset").addClass("c-fonts-bold").removeClass("c-fonts-bold-reset")),$(".c-setting_font-style").removeClass("active"),$(this).addClass("active")}),$(".c-setting_megamenu-style").on("click",function(){var e=$(this).attr("data-value");"dark"==e?$(".c-mega-menu").removeClass("c-mega-menu-light").addClass("c-mega-menu-dark"):$(".c-mega-menu").removeClass("c-mega-menu-dark").addClass("c-mega-menu-light"),$(".c-setting_megamenu-style").removeClass("active"),$(this).addClass("active")})};return{init:function(){e()}}}(),ContentOwlcarousel=function(){var e=function(){$("[data-slider='owl'] .owl-carousel").each(function(){var e,t,o,a,n,i,c=$(this).parent();"true"==c.data("single-item")?(e=1,t=1,o=1,a=1,n=1,i=1):(e=c.data("items"),t=[1199,c.data("desktop-items")?c.data("desktop-items"):e],o=[979,c.data("desktop-small-items")?c.data("desktop-small-items"):3],a=[768,c.data("tablet-items")?c.data("tablet-items"):2],i=[479,c.data("mobile-items")?c.data("mobile-items"):1]),$(this).owlCarousel({items:e,itemsDesktop:t,itemsDesktopSmall:o,itemsTablet:a,itemsTabletSmall:a,itemsMobile:i,navigation:!!c.data("navigation"),navigationText:!1,slideSpeed:c.data("slide-speed"),paginationSpeed:c.data("pagination-speed"),singleItem:!!c.data("single-item"),autoPlay:c.data("auto-play")})})};return{init:function(){e()}}}(),ContentCubeLatestPortfolio=function(){var e=function(){$(".c-content-latest-works").cubeportfolio({filters:"#filters-container",loadMore:"#loadMore-container",loadMoreAction:"click",layoutMode:"grid",defaultFilter:"*",animationType:"quicksand",gapHorizontal:20,gapVertical:23,gridAdjustment:"responsive",mediaQueries:[{width:1100,cols:4},{width:800,cols:3},{width:500,cols:2},{width:320,cols:1}],caption:"minimal",displayType:"lazyLoading",displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',singlePageDelegate:".cbp-singlePage",singlePageDeeplinking:!0,singlePageStickyNavigation:!0,singlePageCounter:'<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',singlePageCallback:function(e,t){var o=this;$.ajax({url:e,type:"GET",dataType:"html",timeout:5e3}).done(function(e){o.updateSinglePage(e)}).fail(function(){o.updateSinglePage("Error! Please refresh the page!")})}}),$(".c-content-latest-works-fullwidth").cubeportfolio({loadMoreAction:"auto",layoutMode:"grid",defaultFilter:"*",animationType:"fadeOutTop",gapHorizontal:0,gapVertical:0,gridAdjustment:"responsive",mediaQueries:[{width:1600,cols:5},{width:1200,cols:4},{width:800,cols:3},{width:500,cols:2},{width:320,cols:1}],caption:"minimal",displayType:"lazyLoading",displayTypeSpeed:100,lightboxDelegate:".cbp-lightbox",lightboxGallery:!0,lightboxTitleSrc:"data-title",lightboxCounter:'<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'})};return{init:function(){e()}}}(),ContentCounterUp=function(){var e=function(){$("[data-counter='counterup']").counterUp({delay:10,time:1e3})};return{init:function(){e()}}}(),ContentFancybox=function(){var e=function(){$("[data-lightbox='fancybox']").fancybox()};return{init:function(){e()}}}(),ContentTwitter=function(){var e=function(){$(".twitter-timeline")[0]&&!function(e,t,o){var a,n=e.getElementsByTagName(t)[0],i=/^http:/.test(e.location)?"http":"https";e.getElementById(o)||(a=e.createElement(t),a.id=o,a.src=i+"://platform.twitter.com/widgets.js",n.parentNode.insertBefore(a,n))}(document,"script","twitter-wjs")};return{init:function(){e()}}}(),LayoutQtySpinner=function(){return{init:function(){$(".c-spinner .btn:first-of-type").on("click",function(){var e=$(this).attr("data_input");$(".c-spinner input."+e).val(parseInt($(".c-spinner input."+e).val(),10)+1)}),$(".c-spinner .btn:last-of-type").on("click",function(){var e=$(this).attr("data_input");0!=$(".c-spinner input."+e).val()&&$(".c-spinner input."+e).val(parseInt($(".c-spinner input."+e).val(),10)-1)})}}}(),LayoutCheckboxVisibilityToggle=function(){return{init:function(){$(".c-toggle-hide").each(function(){var e=$(this).find("input.c-check"),t=$(this).data("animation-speed"),o=$("."+$(this).data("object-selector"));o.hide(),"undefined"==typeof t&&(t="slow"),$(e).on("change",function(){$(o).is(":hidden")?$(o).show(t):$(o).slideUp(t)})})}}}(),LayoutShippingCalculator=function(){return{init:function(){var e=$(".c-shipping-calculator"),t=$(e).data("name"),o=$(e).data("total-selector"),a=$(e).data("subtotal-selector"),n=parseFloat($("."+a).text());$("input[name="+t+"]",e).on("change",function(){var a=parseFloat($("input[name="+t+"]:checked",e).val()),i=n+a;$("."+o).text(i.toFixed(2))})}}}(),LayoutProductGallery=function(){return{init:function(){$(".c-product-gallery-content .c-zoom").toggleClass("c-hide");var e=1;$(".c-product-gallery-content .c-zoom").each(function(){$(this).attr("img_order",e),e++}),$(".c-zoom").each(function(){$(this).zoom()});var e=1;$(".c-product-thumb img").each(function(){$(this).attr("img_order",e),e++}),$('.c-product-gallery-content .c-zoom[img_order="1"]').toggleClass("c-hide"),$(".c-product-thumb img").click(function(){var e=$(this).attr("img_order");$(".c-product-gallery-content .c-zoom").addClass("c-hide"),$('.c-product-gallery-content .c-zoom[img_order="'+e+'"]').removeClass("c-hide")});var t=$(".c-product-thumb").width();$(".c-product-thumb").height(t)}}}(),PriceSlider=function(){return{init:function(){$(".c-price-slider").slider()}}}();