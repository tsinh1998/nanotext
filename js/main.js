/**
    * headerFixed
*/

; (function ($) {

  "use strict";

  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  var menuleft = function () {
    if ($('div').hasClass('section-menu-left')) {
      var bt =$(".section-menu-left").find(".has-children");
      bt.on("click", function () {
        var args = { duration: 600 };
        if ($(this).hasClass("active")) {
          $(this).children(".sub-menu").slideUp(args);
          $(this).removeClass("active");
        } else {
          $(".sub-menu").slideUp(args);
          $(this).children(".sub-menu").slideDown(args);
          $(".menu-item.has-children").removeClass("active");
          $(this).addClass("active");
        }
    });
    }
  };

  var tabs = function(){
    $('.widget-tabs').each(function(){
        $(this).find('.widget-content-tab').children().hide();
        $(this).find('.widget-content-tab').children(".active").show();
        $(this).find('.widget-menu-tab').find('li').on('click',function(){
            var liActive = $(this).index();
            var contentActive=$(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
            contentActive.addClass('active').fadeIn("slow");
            contentActive.siblings().removeClass('active');
            $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
        });
    });
  };

  $('ul.dropdown-menu').on('click', function(event){
    event.stopPropagation();
  });

  var btnQuantity = function () {
    if ($('div').hasClass('choose-amount')) {
      $(".minus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());
  
        if (value > 1) {
          value = value - 1;
        }
  
        $input.val(value);
      });
  
      $(".plus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());
  
        if (value > 0) {
          value = value + 1;
        }
  
        $input.val(value);
      });
    }
  };

  var collapse_menu = function () {
    if ($('div').hasClass('layout-wrap')) {
      // $('.section-menu-left-mobile').on("click", function (e) {
      //   $(this).addClass('focus');
      // });
      // $(document).on('click',function(e){
      //   var clickID=e.target.classList;if((clickID=='section-menu-left-mobile')){
      //       $('#section-menu-left-mobile').removeClass('focus');
      // }});
      $(".button-collapse-menu").on("click", function (e) {
        $('.button-collapse-menu').toggleClass('active');
        $('.layout-wrap').toggleClass('active');
        $('.section-menu-left').toggleClass('active');
        $('.section-menu-left-mobile').toggleClass('active');
        $('.section-content-right').toggleClass('active');
        $('.section-menu-left').find('.mobile-button').toggleClass('active');
      })
      $(".button-show-hide").on("click", function (e) {
        $('.section-menu-left').toggleClass('active');
        $('.section-menu-left').find('.mobile-button').toggleClass('active');
      })
    }
  }

  var flatAccordion = function (class1,class2) {
    var args = { duration: 600 };

    $(class2 + ' .toggle-title.active').siblings('.toggle-content').show();
    $(class1 +' .toggle-title').on('click', function () {
        $(class1 + ' ' + class2).removeClass('active');
        $(this).closest(class2).toggleClass('active');

        if( !$(this).is('.active') ) {
            $(this).closest(class1).find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
            $(this).toggleClass('active');
            $(this).next().slideToggle(args);
        } else {
            $(class1 + ' ' + class2).removeClass('active');
            $(this).toggleClass('active');
            $(this).next().slideToggle(args);
        }     
    });
  };


  // Dom Ready
  $(function () {
    selectImages();
    menuleft();
    tabs();
    btnQuantity();
    collapse_menu();
    flatAccordion('.flat-accordion','.flat-toggle');
  });

})(jQuery);
