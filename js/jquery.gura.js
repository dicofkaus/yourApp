<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>step11_Plugin.html</title>
</head>
<body>
<div>div1</div>
<div>div2</div>
<div>div3</div>
<div>div4</div>
<div>div5</div>
<script src="js/jquery-3.3.1.js"></script>
<script>
(function($){
	// .gura() 라는 동작 정의하기
	$.fn.gura=function(options){
		//default 값 정의하기
		var settings=$.extend({
			
		}, options);


		// chain 형태로 동작 가능하게 하기 
		return this;
	};

})(jQuery);

</script>	
</body>
</html>