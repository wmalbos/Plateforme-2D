var configuration = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ccccff',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500}
        }
    }
};

var directoryImages = 'assets/media/images/';
var directoryJSON = 'assets/json/';
var directorySounds = 'assets/media/sounds/';

const game = new Phaser.Game(configuration);