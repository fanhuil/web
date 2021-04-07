var obj = null;
var As = document.getElementById('nav').getElementsByTagName('a');

obj = As[0];
for (i = 1; i < As.length; i++) {
	if (window.location.href.indexOf(As[i].href) >= 0)
		obj = As[i];
}
obj.id = 'nava'
// 第一个wz元素距离顶部的位置
var wz_top = $(".left").offset().top
// 头部导航栏元素的高度
var header = $('#header').height()
// 头部需要隐藏时滚动条距离顶部的距离
var hide_header_height = wz_top - header
// 监听滚动，显示或隐藏头部
$(document).scroll(function(){
	var top = $(window).scrollTop()
	if(top >= hide_header_height){
		$('#header').fadeOut()
	}else{
		$('#header').fadeIn()
	}
	
})