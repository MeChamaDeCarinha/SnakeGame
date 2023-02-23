class Snake {
    alive = true;
    score = 0;
    direction = null;
    pos = [createVector(Math.floor(random(0, grid - 1)), Math.floor(random(0, grid - 1)))];

    // Eating the apple
    eat(apple) {
        if (this.pos[0].x == apple.pos.x && this.pos[0].y == apple.pos.y) {
            this.score++;

            // Create another segment
            this.pos.push(createVector(-1, -1));

            // Create another apple
            apple.create(this);
        }
    }

    // Collision mechanics
    colide() {
        for (i = 1; i < this.pos.length; i++) {
            if (this.pos[0].x == this.pos[i].x && this.pos[0].y == this.pos[i].y) {
                game.lose(this);
                this.alive = false;
            }
        }
    }

    // Changes direction depending on the key
    control() {
        if ((keyCode == 38 || keyCode == 87) && this.direction != "down") {
            this.direction = "up";
        }
        else if ((keyCode == 40 || keyCode == 83) && this.direction != "up") {
            this.direction = "down";
        }
        else if ((keyCode == 39 || keyCode == 68) && this.direction != "left") {
            this.direction = "right";
        }
        else if ((keyCode == 37 || keyCode == 65) && this.direction != "right") {
            this.direction = "left";
        }
    }

    // Moves and updates each segment
    move() {
        // Update
        for (i = this.pos.length - 1; i > 0; i--) {
            if (i != 0) {
                this.pos[i].y = this.pos[i - 1].y;
                this.pos[i].x = this.pos[i - 1].x;
            }
        }

        // Move
        if (this.direction == "up" && this.pos[0].y > 0) {
            this.pos[0].y--;
        }
        else if (this.direction == "down" && this.pos[0].y < grid - 1) {
            this.pos[0].y++;
        }
        else if (this.direction == "right" && this.pos[0].x < grid - 1) {
            this.pos[0].x++;
        }
        else if (this.direction == "left" && this.pos[0].x > 0) {
            this.pos[0].x--;
        }
    }

    // Draw each segment of the snake
    show() {
        push();
        translate(offset, 0);

        // Update in real time snake color
        this.red = sldRed.value();
        this.green = sldGreen.value();
        this.blue = sldBlue.value();

        let line_dist = height / grid;
        if (pi && sltM.value() != "Blind") {
            colorMode(HSB, 255);
            fill(euler, 200, 200);
            euler++;
            if (euler > 255) {
                euler = 0;
            }
        }
        else {
            fill(this.red, this.green, this.blue);
        }
        for (i = 0; i < this.pos.length; i++) {
            if (sltM.value() == "Blind") {
                stroke(234, 234, 234, 255 - i * 50);
                fill(this.red, this.green, this.blue, 255 - i * 30);
            }
            square(this.pos[i].x * line_dist, this.pos[i].y * line_dist, line_dist);
        }
        pop();
    }
}