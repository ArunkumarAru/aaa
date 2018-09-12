var cont = document.getElementById('main_container'); //main parent container 
var isWebkit = 'webkitRequestAnimationFrame' in window;
var scale = 1;

function resizeApp(){ //resizing the content scaling calc
	var winHeight = window.innerHeight;//retrieve inner window height
	var winWidth = window.innerWidth;//retrieve inner window width
	var appWidth = cont.offsetWidth;//app width
    var appHeight = cont.offsetHeight;//app height
	winWidth = window.innerWidth; //retrieve current window width
	winHeight = window.innerHeight; //retrieve current window height
	scale = (((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight))-0.3; //scaling
	
	if(scale<0.15){
		scale=0.15;
	}
		cont.style.msTransformOrigin = '0 0';	
		cont.style.msTransform = "scale("+scale+","+scale+")";
		cont.style.TransformOrigin = '0 0';	
		cont.style.Transform = "scale("+scale+")";
		cont.style.webkitTransformOrigin = '0 0';
		cont.style.webkitTransform = "scale("+scale+")";
		cont.style.MozTransformOrigin = '0 0';	
		cont.style.MozTransform = "scale("+scale+")";
		var appWidth = cont.offsetWidth * scale;
		var bodyheight = cont.offsetHeight*scale;
		var bodywidth = cont.offsetWidth*scale;
		var winWidth = window.innerWidth;
		$('body').css('height',bodyheight+'px');
        //cont.style.left = ((winWidth - appWidth )/2)+'px';
}