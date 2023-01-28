function preload(){

}
function setup(){
canvas=createCanvas(500,500);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();

}
function draw(){
    image(video,40,40,320,320);
fill(3,0,132);
stroke(5,5,54);
circle(50,50,50); 

circle(50,350,50);

circle(350,50,50);

circle(350,350,50);
fill(3,0,132);
stroke(5,5,54);
rect(20,50,25,300); 

rect(350,50,25,300);

rect(20,20,350,25);

rect(20,350,350,25);   
}
function snapshot(){
    save('alien.png');
}