
// canvas.width = 100;
// canvas.height = 100;


window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 100000 / 1);
		};
})();


var canvas = document.getElementById('tutorial');
var sprites = []

function sprite (options) {
	var that = {},
		frameIndex = 0,
		tickCount = 0,
		ticksPerFrame = options.ticksPerFrame || 0,
		numberOfFrames = options.numberOfFrames || 1;

	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;
	that.loop = options.loop;

	that.render = function () {
		that.context.drawImage(
			that.image,
			frameIndex * that.width / numberOfFrames,
			0,
			that.width / numberOfFrames,
			that.height,
			0,
			0,
			that.width / numberOfFrames,
			that.height);
	};

	that.update = function () {
		tickCount = 0;

		if (frameIndex < numberOfFrames - 1) {
			tickCount = 0;
			frameIndex += 1;
		} else if (that.loop) {
			frameIndex = 0;
		}
	};

	return that;
}

var ctx
function init() {
	canvas = document.getElementById('tutorial');
	sprites = []
	var myImage = new Image();
	myImage.onload = function () {
			// coin.update()
			// coin.render()
			// coin.update()
			// coin.render()
	}
	myImage.src = "../assets/Atlases/aiming_line_blue_0_0.jpg";
	// document.body.appendChild(myImage);

	// var ctx = canvas.getContext("2d")
	// var coin = sprite({
	// 	context: canvas.getContext("2d"),
	// 	width: 100,
	// 	height: 100,
	// 	image: myImage
	// });
	// ctx.fillText("Hello World",10,50);
	//
	// ctx.rect(20,20,150,100);
	// ctx.stroke();
	ctx = canvas.getContext("2d")
	ctx.font = "30px Arial";

	menuLoop();
}

// alert("" + window)


window.addEventListener('DOMContentLoaded', init, false);





// function loadImage(src, callback) {
// 	var img = document.createElement('img');
// 	img.addEventListener('load', function() { callback(img); } , false);
// 	img.src = src;
// }

function gameLoop () {
	window.requestAnimationFrame(gameLoop);
	coin.update();
	coin.render();
}

function updateSprites() {

}


function clearCanvas() {

}

function update() {
	ctx.clearRect(0, 0, 720, 1280);
	var time = new Date().getTime()
	ctx.fillText("" + time,10,50);


}

menuLoop = function() {
	update();
	requestAnimFrame(menuLoop);
};

