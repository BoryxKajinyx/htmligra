function jezmaga(){
    temp=true;
    for(let i=0;i<balls.length;i++){
        if(!(balls[i].x>width-300&&balls[i].y>height-300)&&!zmagal){
            temp=false;
        }
    }
    console.log("yeet");
    if(temp&&!zmagal){
        zmagal=true;
        zmagax=Math.random()*(width-300);
        zmagay=Math.random()*(height-300);
    }
}