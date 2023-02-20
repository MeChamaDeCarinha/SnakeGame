class Game {
    status = null;
    difficult = "Normal";
    highscore = 0;

    new() {
        apple.create(player);
        player.alive = true;
        player = new Snake();
        keyCode = null;
    }

    run() {
        // GUI - Grid 
        showGrid();

        // Snake functions
        player.move();
        player.eat(apple);
        player.colide();
        player.control();
        player.show();

        // Apple functions
        apple.show();
        
    }

    lose(snake) {
        if(snake.score > this.highscore){
            this.highscore = snake.score;
        }
        this.new();
    }


}