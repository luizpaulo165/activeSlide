(function($){

$.fn.menuElastic = function(){
    var div = $('.menuElastic');
    var fly = $('.float');
    var selector = this.selector;


	$(""+selector+" li:first").addClass('point');

	var liPositionFirst = $(""+selector+" li.point a").position().left;
	var dWidthFirst = $(""+selector+" li.point a").outerWidth() + "px";

	fly.css({
		left:liPositionFirst,
		width:dWidthFirst
	});

	//faz o movimento da variavel fly
	$(""+selector+" li a").mouseover(function(){
	    var self = $(this);
		var liPosition = self.position().left;
		var dWidth = self.outerWidth() + "px";

		$(""+selector+" li").removeClass('point');
		self.parent().addClass('point');

		fly.stop(true,true).animate({left:liPosition,width:dWidth,},600);
	});


}


})(jQuery)

