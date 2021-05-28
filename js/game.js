class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players= [player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index = 0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     console.log("index: "+ index, allPlayers.length)
                     players[index -1].x = x;
                     players[index - 1].y = y;

                     

                     if(index === 2){
                         //index = 0
                     }
                     

                       
                     if(index === player.index){
                        textSize(30)
                         fill("black");
                         if(index === 1){
                         text(name1,players[0].x - 40,players[0].y + 20)
                         console.log("index === 1, text1 function");
                         textSize(30)
                     fill("red")
                     text (name1+" (You): "+ score1,80,80)
                     fill ("white")
                     text (name2+": "+ score2,80,120)
                         }

                         if(index === 2){
                            textSize(30)
                            fill("black")
                         text (name2, players[1].x -40, players[1].y + 20)
                         console.log("index === 2, text2 function")
                         textSize(30)
                         fill("white")
                         text (name1+": "+ score1,80,80)
                         fill ("red")
                         text (name2+" (You): "+ score2,80,120)
                         }
                       //add code to display the player's name on the respective basket.
                     //  fill ("black")
                         
                     }
                    
                      
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();
                            player.score +=1;
                            player.update();
                         
                            
                        }
                        
                    }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}