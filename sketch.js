var canvas, backgroundImage, car1, car2, car3, car4, cars;

var gameState = 0;
var playerCount;

var database;

var form, player, game, allPlayers;

function setup(){
  canvas = createCanvas(displayWidth-100,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  console.log(playerCount);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
   clear()
    game.play();
  }
}
