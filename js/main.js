$(document).ready(function(){

	//navbar

	$(window).scroll(function(){
		if($(document).scrollTop() > 50){
			$('.navbar').addClass('shrink');
			$('.nav-link').addClass('white');
			$('.navbar-toggler').addClass('white');
		}

		else{
			$('.navbar').removeClass('shrink');
			$('.nav-link').removeClass('white');
			$('.navbar-toggler').removeClass('white');
		}
	});

	// waypoint

	$('.section-2').css('visibility','hidden')
	$('.section-2').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('.section-2').css('visibility','visible')
	　　　},{offset:'95%'});


	$('.other-services .col-sm-4').css('visibility','hidden')
	$('.other-services .col-sm-4').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('.other-services .col-sm-4').css('visibility','visible')
	　　　},{offset:'95%'});

	$('.animation-left').css('visibility','hidden')
	$('.animation-left').waypoint(function(){
		$(this).addClass('fadeInLeft');
		$('.animation-left').css('visibility','visible')
	　　　},{offset:'95%'});

	$('.animation-right').css('visibility','hidden')
	$('.animation-right').waypoint(function(){
		$(this).addClass('fadeInRight');
		$('.animation-right').css('visibility','visible')
	　　　},{offset:'95%'});

	$('#footer .col-sm-3').css('visibility','hidden')
	$('#footer .col-sm-3').waypoint(function(){
		$(this).addClass('fadeInUp');
		$('#footer .col-sm-3').css('visibility','visible')
	　　　},{offset:'95%'});

	$('.copyright').css('visibility','hidden')
	$('.copyright').waypoint(function(){
		$(this).addClass('fadeInLeft');
		$('.copyright').css('visibility','visible')
	　　　},{offset:'95%'});

	$('.social-media').css('visibility','hidden')
	$('.social-media').waypoint(function(){
		$(this).addClass('fadeInRight');
		$('.social-media').css('visibility','visible')
	　　　},{offset:'95%'});

});
