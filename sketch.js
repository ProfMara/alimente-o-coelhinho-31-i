//namespacing
//criar uma variável de nome menor para referir a algo de nome maior
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


//variaveis
var engine;
var world;
var corda, fundoImg, frutaImg;
var botao, coelho, coelhoImg;

function preload(){
    coelhoImg = loadImage("coelho.png")
    frutaImg = loadImage("fruta.png");
    fundoImg = loadImage("planodefundo.png");
}

function setup() {
    createCanvas(500, 700);
    //cria o motor
    engine = Engine.create();
    world = engine.world;

    solo = new Solo();
    //criar um objeto da classe 
    fruta = new Fruta(250,300);
    corda = new Corda({x:250, y:100}, fruta.body)

    coelho = createSprite(250,650);
    coelho.addImage(coelhoImg);
    coelho.scale = 0.2;

    botao = createImg("cortar.png");
    botao.size(55, 50);
    botao.position(220,60);
    botao.mouseClicked(cortar);

    rectMode(CENTER);
    imageMode(CENTER)
   
}
function cortar(){
    //remover a conexão do mundo
    World.remove(world, corda.sling)
    corda.sling = null;

}


function draw() {
    background(0);    
    //atualiza o motor
    Engine.update(engine);
    image (fundoImg, width/2, height/2, width, height)
    //pinta o solo
    fill("green");
    
    solo.show();
    if(corda.sling != undefined){
        corda.criar();
    }
    
    drawSprites()
   
    fruta.show();
}