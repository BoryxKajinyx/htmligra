(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
var canvas=document.querySelector("#canvas");
ctx = canvas.getContext("2d");
width = 1600;
height = 900;
player = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 2.5,
    velX: 0,
    velY: 0,
    jumping: false,
    grounded: false
};
keys=[];
var redpig=new Image();
redpig.src="sprite/redpig.png";
var zoga=new Image();
zoga.src="sprite/ball.png";
balls=[];
walls=[];
var zmaga=new Image();
zmaga.src="sprite/zmaga.png";

