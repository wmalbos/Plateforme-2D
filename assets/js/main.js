var jeu = {
    scene: null,
    world: world,
    player: player,
    cursor: null
};

function preload() {

    // Sauvegarde de la scène
    jeu.scene = this;

    // Pré-chargement des images
    jeu.scene.load.image('tiles', directoryImages + 'tilesheet.png');

    // Pré-chargement de la carte
    jeu.scene.load.tilemapTiledJSON('map', directoryJSON + 'map.json');

    // Pré-chargement des images du joueur
    jeu.scene.load.atlas('player', directoryImages + 'player.png', directoryJSON + 'playerAtlas.json');

}

function create() {

    // Initialisation du monde
    jeu.world.initialiserWorld();

    // Initialisation du personnage
    jeu.player.initialiserPlayer();
    jeu.player.generatePlayerAnimations();


    // Gestion des collisions
    jeu.world.generateCollider();

    // Récupération des curseurs
    jeu.cursor = jeu.scene.input.keyboard.createCursorKeys();

    // Gestion de la caméra
    jeu.world.manageCamera();
}

function update(time, delta) {

    jeu.player.manageMoves();
}
