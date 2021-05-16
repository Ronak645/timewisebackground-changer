const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
  getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

   if(backgroundImg){
       background(backgroundImg)
   }

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=05 && hour<=10){
            bg = "sunrise1.png";
        }
        else if(hour>=11 && hour<=13){
            bg = "sunrise4.png";
        }
        else if(hour>=14 && hour<=15){
            bg = "sunrise5.png";
        }
        else if(hour>=16 && hour<=17){
            bg = "sunrise6.png";
        }
        else if(hour>=18 && hour<=19){
            bg = "sunset7.png";
        }
        else if(hour>=20 && hour<=21){
            bg = "sunset10.png";
        }
        else if(hour>=22 && hour<=23){
            bg = "sunset11.png";
        }
        else{
            bg = "sunset12.png";
        }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }
    


