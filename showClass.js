;(function(root,factory){
	
	root.Show = factory(window.jQuery || $);

})(this,function($){
	var Show = function(){};
	
	Show.pt = Show.prototype;

	Show.pt.showClass = function(target){
		var that = this;
		$($(target).find('*')).on('mouseenter',function(e){
			var position = $(this).offset();
			var scale = {
				width: $(this).outerWidth(),
				height: $(this).outerHeight()
			};

			var append = '<div>' + (typeof $(this).attr('class')==='undefined'?$(this).attr('class'):'undefined') + '</div>';
			

			var temp = $(append);
			temp.css({
				position: 'absolute',
				top:position.top,
				left:position.left+scale.width,
			});


			$('body').append(temp);


		});
	};

	return new Show();

})