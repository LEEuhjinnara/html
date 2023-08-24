'use strict';

$(function(){

	$('.nav-switch').click(function(){
		$(".main-site-warp").show();
		$(".header-section").hide();
	});
	$('.close-menu').click(function(){
		$(".main-site-warp").hide();
		$(".header-section").show();
	});



});