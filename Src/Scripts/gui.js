function startElements(){
    // Create play again button
    btnReset = createButton("Play Again");
    btnReset.position(((windowWidth - width) / 2) + width / 2.298, ((windowHeight - height) / 2) + height / 2.2);
    btnReset.size(120, 30);
    btnReset.mousePressed(restart);

    // Create slider to change grid number
    sldGrid = createSlider(5, 50, 10, 1);
    sldGrid.position(((windowWidth - width) / 2) + 735, ((windowHeight - height) / 2) + 75);

    // Create radio button to change difficult
    sltD = createSelect();
    sltD.option("Easy", 5);
    sltD.option("Normal", 10);
    sltD.option("Hard", 15);
    sltD.selected(10);
    sltD.position(((windowWidth - width) / 2) + 795, ((windowHeight - height) / 2) + 122);
    sltD.size(90, 20)

    // Create radio button to change difficult
    sltM = createSelect();
    sltM.option("Normal");
    sltM.option("Blind");
    sltM.selected("Normal");
    sltM.position(((windowWidth - width) / 2) + 795, ((windowHeight - height) / 2) + 162);
    sltM.size(90, 20)

    // Create sliders to change color
    sldRed = createSlider(0, 255, 0, 5);
    sldRed.position(((windowWidth - width) / 2) + 750, ((windowHeight - height) / 2) + 400);

    sldGreen = createSlider(0, 255, 199, 5);
    sldGreen.position(((windowWidth - width) / 2) + 750, ((windowHeight - height) / 2) + 430);

    sldBlue = createSlider(0, 255, 36, 5);
    sldBlue.position(((windowWidth - width) / 2) + 750, ((windowHeight - height) / 2) + 460);
}

let pi = false;
let euler = 0;

function showGUI(player, game) {
    // Background
    background(24, 24, 24);

    // Layouts
    stroke(234, 234, 234);
    strokeWeight(2);
    line(offset, 0, offset, height);
    line(width - offset, 0, width - offset, height);
    line(0, 35, offset, 35);
    line(0, height - 35, offset, height - 35);
    line(width - offset, 320, width, 320);
    

    // Text - Game Name
    strokeWeight(0);

    textAlign(CENTER, CENTER);
    fill(66, 135, 245);
    textSize(25);
    text("Snake Game", offset / 2, 20);

    // Text - Status
    textAlign(LEFT);
    fill(234, 234, 234);
    textSize(20);
    text("Points: " + player.score, 10, 60);
    text("Attempts: " + game.attempts, 10, 90);

    // Text - Highscore
    textAlign(CENTER);
    fill(66, 135, 245);
    textSize(25);
    text("Highscore: " + game.highscore, offset / 2, height - 15);

    // Options
    textAlign(CENTER, CENTER);
    text("Options", width - offset + 100, 20);

    // Grid option
    fill(234, 234, 234);
    textSize(20);
    text("Grid: " + sldGrid.value() + "x" + sldGrid.value(), width - offset + 100, 60);
    text("5", width - offset + 25, 85);
    text("50", width - offset + 180, 85);

    // Difficult option
    text("Difficult: ", width - offset + 55, 130);

    // Mode option
    text("Mode: ", width - offset + 63, 170);

    // Customize
    textAlign(CENTER, CENTER);
    fill(66, 135, 245);
    textSize(25);
    text("Customize", width - offset + 100, 340);

    // Color text and example
    fill(234, 234, 234);
    textSize(20);
    text("Color: " + sldRed.value() + ", " + sldGreen.value() + ", " + sldBlue.value(), width - offset + 100, 375);

    fill(234, 30, 30);
    text("R:", width - offset + 35, 408);

    fill(30, 234, 30);
    text("G:", width - offset + 35, 438);

    fill(30, 30, 234);
    text("B:", width - offset + 35, 468);

    if (player.alive) {
        // Hide play again button
        btnReset.hide();

        // Grid
        stroke(234, 234, 234);
        strokeWeight(1);
        let line_dist = height / grid;
        for (i = 1; i < grid; i++) {
            line(offset, i * line_dist, width - offset, i * line_dist);
            line(offset + i * line_dist, 0, offset + i * line_dist, height);
        }

        // Blur options
        fill(0, 0, 0, 150);
        strokeWeight(2);
        rect(width - offset, 0, width, 320);

        // Disable elements
        sldGrid.attribute("disabled", "");
        sltD.attribute("disabled", "");
        sltM.attribute("disabled", "");
    }
    else {
        // You lose text
        textAlign(CENTER, CENTER);
        fill(234, 234, 234);
        textSize(35);
        text("You lose", width / 2, 200);
        btnReset.show();

        // Enable elements
        sldGrid.removeAttribute("disabled", "");
        sltD.removeAttribute("disabled", "");
        sltM.removeAttribute("disabled", "");
    }
}

function restart(){
    game.status = "Start";
}