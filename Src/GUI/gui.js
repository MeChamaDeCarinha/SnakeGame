function drawGUI(){
    // Background
    background(24, 24, 24);

    // Layouts
    stroke(234, 234, 234);
    strokeWeight(2);
    line(offset, 0, offset, height);
    line(width - offset, 0, width - offset, height);
    line(0, 35, offset, 35);
    line(0, height - 35, offset, height - 35);

    // Text - Game name
    strokeWeight(0);

    textAlign(CENTER, CENTER);
    fill(66, 135, 245);
    textSize(25);
    text("Snake Game", offset / 2, 20);

    // Text - Status
    textAlign(LEFT);
    fill(234, 234, 234);
    textSize(20);
    text("Points: " + points, 10, 60);
    text("Size: " + snake_size, 10, 90);
    text("Difficult: " + difficult, 10, 120);

    // Text - Highscore
    textAlign(CENTER);
    fill(66, 135, 245);
    textSize(25);
    text("Highscore: " + highscore, offset / 2, height - 15);
}

function drawGrid(){
    // Grid
    stroke(234, 234, 234);
    strokeWeight(1);
    let line_dist = height / grid;
    for(i = 1; i < grid; i++){
        line(offset, i * line_dist, width - offset, i * line_dist);
        line(offset + i * line_dist, 0, offset + i * line_dist, height);
    }
}