function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(220,150)

    canvas=createCanvas(550,500);
    canvas.position(900,180);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}
function draw(){
    background(172, 255, 255);
}
function modelLoaded(){
    console.log('posenet is initialised');
}
function gotResults(results){
    if (results.length>0){
        console.log(gotResults);
    }
}
