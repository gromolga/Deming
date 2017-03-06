$(document).ready(function() {

	$(".btn-menu").click(function() {

		if ($("#burger").prop('checked')) {
			$(".burger-figure").removeClass("active");
		} else {
			$(".burger-figure").addClass("active");
		};
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
	    margin: 0,
	    nav: false,
	    autoplay:true,
	    autoplayTimeout: 3000,
	    animateOut: 'fadeOut',
	    mouseDrag : false,
    	touchDrag : false,
	    smartSpeed: 1000,
	    items: 1
	});

	$(".owl-dot").click(function() {
		$(".owl-dot").removeClass("active");
		$(this).addClass("active");
		$(".owl-carousel").trigger("to.owl.carousel", [$(this).index(), 300]);
	})

	$("#tabs").tabs();
	$( "#region" ).selectmenu();
	$( "#category" ).selectmenu();
	$( "#date" ).selectmenu();
	$( "#price" ).selectmenu();

	var size = 85,
		newsContant = $(".news-content"),
		newsText = newsContant.text();
	if (newsText.length > size){
		newsContant.text(newsText.slice(0, size)+"...")
	}

	var region = $("#region"),
		category = $("#category"),
		date = $("#date"),
		price = $("#price");

		category.selectmenu('disable');
			date.selectmenu('disable');
			price.selectmenu('disable');

	region.on( "selectmenuchange", function( event, ui ) {
		if(region.selectmenu().val() == '') {
			category.selectmenu('disable');
			date.selectmenu('disable');
			price.selectmenu('disable');
		} else {
			category.selectmenu('enable');
			if(category.selectmenu().val() == '') {
				return;
			}
			date.selectmenu('enable');
			if(date.selectmenu().val() == '') {
				return;
			}
			price.selectmenu('enable');
		}
	});

	category.on( "selectmenuchange", function( event, ui ) {
		if(category.selectmenu().val() == '') {
			date.selectmenu('disable');
			price.selectmenu('disable');
		} else {
			date.selectmenu('enable');
			if(date.selectmenu().val() == '') {
				return;
			}
			price.selectmenu('enable');
		}
	});

	date.on( "selectmenuchange", function( event, ui ) {
		if(date.selectmenu().val() == '') {
			price.selectmenu('disable');
		} else {
			price.selectmenu('enable');
		}
	});
	
});
