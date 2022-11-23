canvas.width=width;
canvas.height=height;
for(let x=0;x<50;x++){
    balls[x]={x:100,y:100,velX:0,velY:0,width:50,height:50}
}
wallHit=false;
function update(){
    draw();
    control();
    movement();
    collision();
    requestAnimationFrame(update);
}
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
window.addEventListener("load", function () {
    update();
});