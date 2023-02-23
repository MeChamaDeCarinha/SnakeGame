class Game {
    status = null;
    highscore = 0;
    attempts = 0;

    run(snake, apple) {
        if (snake.alive) {
            // Snake functions
            snake.move();
            snake.eat(apple);
            snake.colide();
            snake.control();
            snake.show();

            // Apple functions
            apple.show();
        }
    }

    lose(snake) {
        // Check if is a new highscore
        if (snake.score > this.highscore) {
            this.highscore = snake.score;
        }

        // Kill the snake
        snake.alive = false;

        // Update attempts counter
        this.attempts++;
    }
}