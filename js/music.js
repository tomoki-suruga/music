
$(function(){

	$("#top-b").width($("#top-w").width());
	$("#top-i").width($("#top-b").width());
	$("#top-c").width($("#top-w").width());
	$("#top-i").height($("#top-b").height());
	$(".t-i").height($("#top-w").height());
	$(".img-c").height($(".img-in").height());
	var vid = $("iframe").width() / 1.777;
	$("iframe").height(vid);

	$(window).resize(function(){
	$("#top-b").width($("#top-w").width());
	$("#top-i").width($("#top-b").width());
	$("#top-c").width($("#top-w").width());
	$("#top-i").height($("#top-b").height());
	$(".t-i").height($("#top-w").height());
	$(".img-c").height($(".img-in").height());
	var vid = $("iframe").width() / 1.777;
	$("iframe").height(vid);
	});


	/**var wids = $(".main-a").width($(window).width()- $(".navi").width());

	$(function(){$(".main-a").width(wids)
		.css({"display":"block",
			"position":"absolute",
			"right":"2000px"});
	});
		$(function(){$(".main-a").animate({
					"right":"0px"},1000);
	});


		var wids = $(".main-b").width($(window).width()- $(".navi").width());

	$(function(){$(".main-b").width(wids)
		.css({"display":"block",
			"position":"absolute",
			"right":"-2000px"});
	});
		$(function(){$(".main-b").animate({
					"right":"0px"},1000);
	});
**/

		$(window).scroll(function() {
			  var windowH = $(window).height(),
			    scrollY = $(window).scrollTop();
			  $('.img-in').each(function() {
			    var elPosition = $(this).offset().top;
			    if (scrollY > elPosition - windowH) {
			      $(this).addClass("txt-effect");
			    }
			  });
		});




	$("#top-w").animate({"left":"0"},1500);
	$(".t-i").animate({"width":"0"},1500);


		$("#top-c").animate({"left":"-12.5%"},1500,function(){
			$(".title-3").animate({"width":"280px",
									"height":"280px",
									"top":"-140px",
									"left":"-15px"
									},500,function(){
				$(".title-3").animate({"width":"250px",
									"height":"250px",
									"top":"-125px",
									"left":"0px"
									},300,function(){
				$(".title-4").animate({"width":"300px",
										"left":"-25px"},500,function(){
				$(".title-1").animate({"top":"-35px",
									"opacity":"1",},300);
				$(".title-2").animate({
									"opacity":"1",},300);
										});
								});
					});
		});

	$(".img-in a").hover(function(){
		$(".title-in-2",this).stop().animate({"top":"40%"},500);
		$(".title-1-3",this).stop().animate({"width":"200px"},500);
		$(".title-2-2",this).stop().animate({"opacity":"1"},500);
	},function(){
		$(".title-in-2",this).stop().animate({"top":"45%"},500);
		$(".title-1-3",this).stop().animate({"width":"250px"},500);
		$(".title-2-2",this).stop().animate({"opacity":"0"},500);
	});



	$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		if(scroll == 0){
			$(".logo-out-2").stop().animate({"top":"50px"},400);
		}else{
			$(".logo-out-2").stop().animate({"top":"-50px"},400);
		}

	});

	$('.more a').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});


	});
