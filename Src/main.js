// GUI
let offset = 200;
let grid = 10;
let highscore = 0;

// Status
let points = 0;
let snake_size = 1;
let snake_speed = 0.1;
let difficult = "Normal";

function setup(){
    createCanvas(900, 500);
    frameRate(10);
    player = new Snake();
    player.alive = true;
}

function keyPressed(){
    if((keyCode == 38 || keyCode == 87) && player.direction != "down"){
        player.direction = "up";
    }

    if((keyCode == 40 || keyCode == 83) && player.direction != "up"){
        player.direction = "down";
    }

    if((keyCode == 39 || keyCode == 68) && player.direction != "left"){
        player.direction = "right";
    }
    if((keyCode == 37 || keyCode == 65) && player.direction != "right"){
        player.direction = "left";
    }
    console.log(player.direction);
}

function draw(){
    drawGUI();
    if(player.alive){
        drawGrid();
        player.show();
        player.move();
    }
}