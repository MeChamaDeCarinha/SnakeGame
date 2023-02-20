class Apple {
    pos = createVector(null, null);

    create(snake) {
        this.pos.x = Math.floor(random(0, grid - 1));
        this.pos.y = Math.floor(random(0, grid - 1));

        for(let i = 0; i < snake.pos.length; i++) {
            if(snake.pos[i].x == this.pos.x && snake.pos[i].y == this.pos.y){
                this.create(snake);
            }
        }
    }

    show() {
        push();
        translate(offset, 0);
        let line_dist = height / grid;
        fill(214, 29, 0);
        square(this.pos.x * line_dist, this.pos.y * line_dist, line_dist);
        pop();
    }

}