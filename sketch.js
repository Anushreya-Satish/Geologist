const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1, stone2, iron;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(700,320,70,70);
    stone2 = new  Stone(520,120,70,70);
    iron = new Iron(20,50,50,PI/2);
    rubber = new Rubber(20,20,50,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    iron.display();
    rubber.display();
}