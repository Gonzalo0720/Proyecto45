class Form{
    constructor(){
       this.input = createInput("Nombre");
       this.button = createButton('Jugador');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reiniciar');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("ATRAPA FRUTA");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hola, " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });
        this.reset.mousePressed(() => {
           
              database.ref("/").set({
                carsAtEnd: 0,
                playerCount: 0,
                gameState: 0,
                palyers: {}
                // Establece el valor inicial para carsAtEnd,playerCount,gameState y players
                 
                });
                // Refresca la ventana con reload()
                window.location.reload();
              });
            }      
}