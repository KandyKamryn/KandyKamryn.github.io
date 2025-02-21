$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid()


    // TODO 2 - Create Platforms
    createPlatform(500, 700, 100, 20,"red");
    createPlatform(600, 600, 100, 20,"orange");
    createPlatform(700, 500, 100, 20,"yellow");
    createPlatform(800, 400, 100, 20,"green");
    createPlatform(600, 300, 100, 20,"blue");
    createPlatform(500, 200, 100, 20,"purple");
    createPlatform(400, 100, 100, 20,"pink");
    createPlatform(1000, 300, 100, 20,"red");
    createPlatform(1200, 300, 100, 20,"orange");
    createPlatform(1300, 300, 100, 20,"yellow");
    createPlatform(300, 200, 100, 20,"green");
    createPlatform(200, 300, 100, 20,"blue");
    createPlatform(100, 400, 100, 20,"purple");
    createPlatform(900, 500, 100, 20,"pink");
    createPlatform(1000, 600, 100, 20,"red");
    createPlatform(1100, 700, 100, 20,"orange");
    createPlatform(1300, 600, 100, 10,"black");
    createPlatform(1300, 600, 20, 55,"black");

    // TODO 3 - Create Collectables
    createCollectable("reddiamond", 1350, 230);
    createCollectable("pinkdiamond", 130, 330);
    createCollectable("diamond", 830, 330);

    
    // TODO 4 - Create Cannons
    createCannon("top", 1100, 1500);
    createCannon("bottom", 300, 1500);
    createCannon("top", 800, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
