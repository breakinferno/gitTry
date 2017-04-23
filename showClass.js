;(function(root,factory){
	
	root.Show = factory(window.jQuery || $);

})(this,function($){
	var Show = function(){};
	
	Show.pt = Show.prototype;

	Show.pt.showClass = function(target){
		var that = this;
		//递归所有后代元素
		$($(target).find('*')).on('mouseenter',function(e){
			var position = $(this).offset();
			var scale = {
				width: $(this).outerWidth(),
				height: $(this).outerHeight()
			};

			var append = '<div>' + (typeof $(this).attr('class')==='undefined'?$(this).attr('class'):'undefined') + '</div>';
			
			//注意这里不能两个$(append)，那个表示不同jquery对象
			var temp = $(append);
			temp.css({
				position: 'absolute',
				top:position.top,
				left:position.left+scale.width,
			});

			//别忘了加入文档
			$('body').append(temp);


		});
	};

	return new Show();

})

//心得：这里主要考察插件开发，，这是一种方式（也可以$.fn.Func = function(){}。
//
//这里注意插件开发使用(function(){})()而非(function(){}())
//
//mouse事件：Jquery:mouseenter,mouseleave,hover,mousedown,mouseup,mousemove,mouseover
//
//mouseover和mouseenter区别：mouseover 只要鼠标穿过任何子元素就会触发，mouseenter只有鼠标穿过被选元素才触发
//
//经常搞忘的一点：.css({key:'value'})，value不能少'',除非为变量
//
//dom操作(有To的只能接受content,没有的可以接受function)：append,appendTo,after,before,prepend,prependTo,insertAfter,insertBefore
//
//
//对于获取的元素集合，获取其中的某一项（通过索引指定）可以使用eq或get(n)方法或者索引号获取，要注意，eq返回的是jquery对象，而 get(n)和索引返回的是dom元素对象。对于jquery对象只能使用jquery的方法，而dom对象只能使用dom的方法，如要获取第三个<div>元素的内容。有如下两种方法：
//　　$("div").eq(2).html(); 　　　　 //调用jquery对象的方法
//　　$("div").get(2).innerHTML; 　　//调用dom的方法属性