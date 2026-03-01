import Phaser from "phaser";

class GameScene extends Phaser.Scene {
    preload() {
        this.load.image("background", "assets/BackgroundBlue.png");
        this.load.image("player", "assets/WhiteSheep.png"); 
    }
}