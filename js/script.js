$(function(){
  $(window).on('scroll load', function (){
    var box = $('.mainpicture');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh - 50 ){
        $(this).addClass(animated);
      }else{
        $(this).removeClass(animated);
      }
    });
  
  });
  $(window).on('scroll load', function (){

    var box = $('.scrollup');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh - 50){
        $(this).addClass(animated);
      }else{
        $(this).removeClass(animated);
      }
    });
  
  });
  $(window).on('scroll load', function (){

    var box = $('.fadeIn1');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }else{
        $(this).removeClass(animated);
      }
    });
  
  });
  $(window).on('scroll load', function (){

    var box = $('.fadeIn2');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh - 50 ){
        $(this).addClass(animated);
      }else{
        $(this).removeClass(animated);
      }
    });
  
  });
//header…途中から背景色変化する動作//

  $(window).on('scroll', function () {
    if (jQuery('.header').height() < $(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    } else {
        jQuery('.header').removeClass('change-color');
    }
  });
  $(window).on("scroll", function(){
    if (jQuery('.header').height() < $(this).scrollTop()) {
      jQuery('.drawer-toggle span').addClass('black-color');
  } else {
      jQuery('.drawer-toggle span').removeClass('black-color');
  }
});
//header部分をスクロールすると、クラス付与。//
$(window).on("scroll", function(){
  if (jQuery('.header').height() < $(this).scrollTop()) {
    jQuery('.drawer-menu').addClass('white-color');
} else {
    jQuery('.drawer-menu').removeClass('white-color');
}
});

  //header-logo//
  $(window).on('scroll', function () {
    if (jQuery('.js-header').height() < $(this).scrollTop()) {
        jQuery('.js-header').addClass('js-header-logo');
    } else {
        jQuery('.js-header').removeClass('js-header-logo');
    }
  });

//is-showクラスのつけ外しだけでモーダル表示非表示できるようにしています
//アニメーションはcss側に記載しています

  $('.openModal').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });

  $('#closeModal').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
  $('.close-btn').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });


  $('#modalBg').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });

  $('.js-click').click(function () {
    var index = $('.js-click').index(this);
    $('.js-click').removeClass('js-active');
    $(this).addClass('js-active');
    $('.fade-block5').addClass('js-show').eq(index).removeClass('js-show');
  });

});





$(function() {
  // ↓windowがスクロールされた時に実行する処理
  $(window).on("scroll", function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".scroll-block").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt
        ) {
        $(this).addClass("blockIn");
      }else{
        $(this).removeClass("blockIn");
      }
    });
  });
  $(window).on("scroll", function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".fade-block2").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt -100) {
        $(this).addClass("blockIn");
      }else{
        $(this).removeClass("blockIn");
      }
    });
  });
  $(window).on("scroll", function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".fade-block3").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt +150) {
        $(this).addClass("blockIn3");
      }else{
        $(this).removeClass("blockIn3");
      }
    });
  });
  $(window).on("scroll", function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".fade-block4").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt - 100) {
        $(this).addClass("fadeIn4");
      }else{
        $(this).removeClass("fadeIn4");
      }
    });
  });

  $(window).on("scroll", function() {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".fade-block5").each(function() {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「blockIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt +50) {
        $(this).addClass("fadeIn3");
      }else{
        $(this).removeClass("fadeIn3");
      }
    });
  });

  //モーダル押すとゆっくりなスピードでトップページに移動する//

  $('.openModal').click(function(){
		// ページの先頭へ移動する
		$('html,body').animate({scrollTop:0}, 'slow');
	});


$(".drawer-toggle").click(function() {
  $(this).toggleClass("drawer");
  $(".global-nav").toggleClass("action");
  $(".drawer-toggle span").toggleClass("drawer");
});



});