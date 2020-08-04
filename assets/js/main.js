var configuration = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
}

const game = new Phaser.Game(configuration);

function preload() {

}

function create() {

}

function update(time, delta) {

}