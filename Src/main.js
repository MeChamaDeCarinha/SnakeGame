// GUI
let offset = 200;
let grid = 10;

function setup() {
    createCanvas(900, 500);
    frameRate(5);    
    game = new Game();
    game.status = "Start";
}

function draw() {
    if(game.status == "Start"){
        // Setting up new game
        player = new Snake();
        apple = new Apple();

        game.new();
        game.status = "Running";
    }

    // Game start
    showGUI(player, game);

    if(game.status == "Running"){
        game.run();    
    }
}