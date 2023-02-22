// GUI
let offset = 200;
let grid = 10;

function setup() {
    // Create game window
    cvn = createCanvas(900, 500);
    cvn.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    cvn.attribute("onfocus", "");

    // Main class
    game = new Game();
    game.status = "Start";

    // Generate buttons, select and sliders
    startElements();
}

function draw() {
    if(game.status == "Start"){
        // Setting up new game
        grid = sldGrid.value();
        frameRate(int(sltD.value()));
        player = new Snake();
        player.alive = true;
        apple = new Apple(player);
        keyCode = null;
        game.status = "Running";
    }

    // Game start
    showGUI(player, game);

    // Game running
    if(game.status == "Running"){
        game.run(player, apple);    
    }
}