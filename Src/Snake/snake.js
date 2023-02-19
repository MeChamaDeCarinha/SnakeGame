class Snake{
    alive = false;
    direction = "up";
    pos = [[0, 4], [0, 5]];

    move(){
        

        if(this.direction == "up" && this.pos[0][1] > 0){
            this.pos[0][1] -= snake_speed;
        }
        if(this.direction == "down" && this.pos[0][1] < grid - 1){
            this.pos[0][1] += snake_speed;
        }

        if(this.direction == "right" && this.pos[0][0] < grid - 1){
            this.pos[0][0] += snake_speed;
        }

        if(this.direction == "left" && this.pos[0][0] > 0){
            this.pos[0][0] -= snake_speed;
        }

        for(i = 1; i < this.pos.length; i++){
            this.pos[i] = this.pos[i - 1] - 1;
        }
        
    }

    show(){
        push();
        translate(offset, 0);
        let line_dist = height / grid;
        this.pos.forEach(segment => square(Math.ceil(segment[0]) * line_dist, Math.ceil(segment[1]) * line_dist, line_dist));
        pop();
    }
}