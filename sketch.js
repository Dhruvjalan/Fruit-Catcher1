var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var n = 1;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img, player_img2;
var name1, name2,score1,score2;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  player_img2 = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  //console.log("hi")
  console.log(playerCount, gameState)
  
   if (playerCount === 2) {
     game.update(1);
     gameState = 1
     console.log("playercount = 2")
   }
   if (gameState === 1) {
     clear(); 
     game.play();

   }
   if (gameState === 2) {
    
     game.end();
   }

   database.ref("players/player1/name").once("value", function(data){
    name1 = data.val()
   })
   database.ref("players/player2/name").once("value", function(data){
    name2 = data.val()
   })
   database.ref("players/player1/score").once("value", function(data){
    score1 = data.val()
   })
   database.ref("players/player2/score").once("value", function(data){
    score2 = data.val()
   })


    
}