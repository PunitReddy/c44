var hypnoticBall, database;
var form, player, game, playerCount;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new Game()
  game.start()
}

function draw(){
  background("white");
  
  
}
