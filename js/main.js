$(function() {
  $('.fv').addClass('effect');
})




// トップロゴ 500px以上スクロールで表示
$(function() {
  var headerlogo = $('#apper-logo');
  // 500pxスクロールしたらロゴ表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      headerlogo.addClass('apper');
    } else {
      headerlogo.removeClass('apper');
    }
  });
  
})



// ハンバーガーメニュー
$(function() {
  $('.zdo_drawer_button').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
    $('.zdo_drawer_bg').fadeToggle();
  });

  $('.zdo_drawer_bg').click(function() {
    $(this).fadeOut();
    $('.zdo_drawer_button').removeClass('active');
    $('nav').removeClass('open');
  });
})

// ハンバーガーメニューからnavを選択したらハンバーガーメニューを非表示
$(function() {
  if($(window).width()) {
    $('.drawer_nav_item>a').click(function() {
      $('nav').removeClass('open');
      $('.zdo_drawer_button').removeClass('active');
      $('.zdo_drawer_bg').fadeToggle();
    });
  }
})


// サムネイルホバーしたら色が変わる
$(function() {
  $('.movie-content').hover(function() {
    $(this).children('.start-hover').fadeToggle(200)
    // $('.start-hover').fadeToggle(200);
  });
})


// トップへ戻る
$(function(){
  var pagetop = $('#page-top,#page-top-pc');
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});


$(function(){
  var snsicon = $('#sns-arrow-pc');
  // 500px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      snsicon.addClass('apper');
    } else {
      snsicon.removeClass('apper');
    }
  });
});





// エフェクトフェイド 下から上 左から右
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
    scroll_effect();
  });

  function scroll_effect(){
    $('.down-to-top, .left-to-right').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 150){
        $(this).addClass('scrollin');
      }
    });
  }
};


// 初期値からのエフェクト
// $(function() {
//   $('.effect-fade').addClass('effect-scroll');
// });


// ここから記述

(function() {
	setTimeout(init, 10);
			function init() {
					var scrollElemToWatch_1 = document.getElementById('effect_01'),
					watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -10),				
					rev1 = new RevealFx(scrollElemToWatch_1, {
						revealSettings : {
							bgcolor: '#537791',
							delay: 200,
							duration: 600,
							direction: 'lr',
							onStart: function(contentEl, revealerEl) { 
								anime.remove(contentEl);
								contentEl.style.opacity = 0; 
							},
							onCover: function(contentEl, revealerEl) { 
								contentEl.style.opacity = 1;
								anime({
									targets: contentEl,
									easing: 'easeOutExpo'
								});
							}
						}
					})
					watcher_1.enterViewport(function() {
							rev1.reveal();
							watcher_1.destroy();
					});
			}
	})();


(function() {
	setTimeout(init, 10);
			function init() {
					var scrollElemToWatch_2 = document.getElementById('effect_02'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -10),				
					rev2 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#537791',
							delay: 700,
							duration: 600,
							direction: 'lr',
							onStart: function(contentEl, revealerEl) { 
								anime.remove(contentEl);
								contentEl.style.opacity = 0; 
							},
							onCover: function(contentEl, revealerEl) { 
								contentEl.style.opacity = 1;
								anime({
									targets: contentEl,
									easing: 'easeOutExpo'
								});
							}
						}
					})
					watcher_2.enterViewport(function() {
							rev2.reveal();
							watcher_2.destroy();
					});
			}
	})();

