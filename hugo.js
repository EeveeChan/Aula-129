function setup(){ 
    canvas =createCanvas(500,400) 
    camera=createCapture(VIDEO) 
    camera.hide() 
    canvas.center() 
    poseNet.on('poses',gotResult)
} 
function draw(){ 
    image(camera,0,0,500,400) 
} 
function preload(){ 
    musiquinha = loadSound("music.mp3")
    poseNet = ml5.poseNet(camera,modelLoaded) 
} 
function playmusic(){
    musiquinha.volume(0.2)
    musiquinha.speed(1) 
    musiquinha.play() 
}
