$(".Restart").click(function () {
  var cvs = document.getElementById("canvas");
  var ctx = cvs.getContext("2d");

  ctx.fillStyle = "#e6f5fc";
  ctx.font = "18px monospace";

  var ufo = new Image();
  var bg = new Image();
  var fg = new Image();
  var tescUp = new Image();
  var tescBot = new Image();

  ufo.src = "../i/game/ufo.png";
  bg.src = "../i/game/bg2.png";
  fg.src = "../i/game/fg2.png";
  tescUp.src = "../i/game/tescUp.png";
  tescBot.src = "../i/game/tescBot.png";

  //Distance between tesc.
  var gap = 250;

  //CLick and fly
  document.addEventListener("click", moveUp);

  function moveUp() {
    yPos -= 25;
  }

  // Tesc creation
  var tesc = [];

  tesc[0] = {
    x: cvs.width,
    y: 0,
  };

  //Base scrore
  var score = 0;

  //Ufo start position
  var xPos = 10;
  var yPos = 180;
  var grav = 1.0;

  // Let's draw
  function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < tesc.length; i++) {
      ctx.drawImage(tescUp, tesc[i].x, tesc[i].y);
      ctx.drawImage(tescBot, tesc[i].x, tesc[i].y + tescUp.height + gap);

      tesc[i].x--;

      if (tesc[i].x == 180) {
        tesc.push({
          x: cvs.width,
          y: Math.floor(Math.random() * tescUp.height) - tescUp.height,
        });
      }

      // Facing checking
      if (
        (xPos + ufo.width >= tesc[i].x &&
          xPos <= tesc[i].x + tescUp.width &&
          (yPos <= tesc[i].y + tescUp.height ||
            yPos + ufo.height >= tesc[i].y + tescUp.height + gap)) ||
        yPos + ufo.height >= cvs.height - fg.height
      ) {
        ctx.fillStyle = "#000";
        ctx.fillText("Game Over", 80, 250);

        return;
        {
        }
      }

      if (tesc[i].x == 5) {
        score++;
      }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(ufo, xPos, yPos);

    //Gravitatiion
    yPos += grav;

    // Score
    ctx.fillStyle = "#e6f5fc";
    ctx.font = "24px monospace";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
  }

  tescBot.onload = draw;
});
