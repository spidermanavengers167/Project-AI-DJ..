song1="";
song2="";
song1_status="";
song2_status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
canvas=createCanvas(600,500);
 canvas.center();
video=createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Has Been Initialized")
}
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}
function gotPoses(results){
if(results.length>0){
scoreLeftWrist=results[0].pose.keypoints[9].score
scoreLeftWrist=results[0].pose.keypoints[10].score
 console.log("scoreLeftWrist" +scoreLeftWrist +"scoreRightWrist" + scoreRightWrist)
console.log("results")
 leftWristX=results[0].pose.leftWrist.x
leftWristY=results[0].pose.leftWrist.y
console.log("Left Wrist X is "+ leftWristX+"Left Wrist Y is "+leftWristY)
rightWristX=results[0].pose.rightWrist.x
rightWristY=results[0].pose.rightWrist.y
console.log("Right Wrist X is"+ rightWristX+"Right Wrist Y is "+rightWristY)
 }
}
function play(){
    song.play()
     song.setVolume(1);
     song.rate(1);
    
    }
function draw(){
    image(video,0,0,600,500);
    fill("#FF0000")
    stroke("#FF0000")
    if(scoreLeftWrist>0.2){
        circle(left_wrist_x, left_wrist_y, 20)
        song2.stop();
        if(song1_status==false){
           song1.play();
           document.getElementById("song_name").innerHTML="Song 1" 
        }
    }
}
if(scoreRightWrist>0.2){
    circle(right_wrist_x,right_wrist_y,20);
    song1.stop();
    if(song2_status==false){
        song2.play();
        document.getElementById("song_name").innerHTML="Song 2"
    }
}
