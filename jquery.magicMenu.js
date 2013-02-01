/**********************************
Magic menú is developed by memoadian
http://comprar-web.com
License MIT Creative Commons
Credits magic line tutorial by http://css-tricks.com
**********************************/
(function( $ ) {
	$.fn.magicMenu = function(options){
		var settings = $.extend( {
			'speed':300,
			'easing':'swing'
		}, options);

		$mainNav = this;

		$mainNav.append("<li id='magic-line'><p></p></li>");
		$magicLine = $("#magic-line p");
		$magic = $("#magic-line");
		
		$magicLine
			.width($(".current_item").width())
			.data("origWidth", $magicLine.width());
		$magic
			.data("origLeft", $(".current_item a").position().left)
			.css({
				"left": $(".current_item a").position().left,
			});
	
		$(" > li", $mainNav).hover(function() {
		$el = $(" > a", this);
		$leftPos = $el.position().left;
		$newWidth = $el.parent().width();
		
		$magicLine.stop().animate({
				width: $newWidth
			},settings.speed, settings.easing);
		$magic.stop().animate({
				left: $leftPos,
			},settings.speed, settings.easing);
		}, function() {
			$magicLine.stop().animate({
				width: $magicLine.data("origWidth")
			},settings.speed, settings.easing);
			$magic.stop().animate({
				left: $magic.data("origLeft"),
			},settings.speed, settings.easing);
		});

		return this;
	};
})( jQuery );