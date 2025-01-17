// -------------------------------------------- Setup

function setup() {
  createCanvas(400, 400);

}




// -------------------------------------------- Update


function draw() {
  background(220);

  if (player.isAlive == true) {


    if (!player.colliding.bottom && !keys.ArrowDown) {
      player = applyGravity(player, gravity, friction);
    }

    // Collisions with map borders
    playerCollideMap()

    // Player movements
    moveObject(player)

    // Draw map borders
    drawBorders()

    // Draw player
    drawPlayer()


    drawRocket(rocket_laser)
    launchRocket(rocket_laser)
    drawRocket(rocket)
    launchRocket(rocket)

    // console.log(player)
    // console.log(rocket_laser)
    // console.log(rocket)

    player = processKillPlayer(player, rocket_laser)
    player = processKillPlayer(player, rocket)


    fill(0, 0, 0)
    noStroke()
    textSize(20)
    text('Score : ' + points, 10, 20);

  } else {
    fill(0, 0, 0)
    noStroke()
    textSize(50)
    text('💀 Vous êtes mort', 0, 175);
    textSize(20)
    text('Score : ' + points, 150, 225);



    drawReplayButton(replayButton)
  }



}