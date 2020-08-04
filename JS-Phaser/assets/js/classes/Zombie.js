var zombie = {

    aZombie: null,

    createZombie: function () {

        this.aZombie = jeu.scene.physics.add.sprite(jeu.world.debutZombie1.x, jeu.world.debutZombie1.y, 'zombie', 'zombie_stand');
        this.aZombie.setCollideWorldBounds(true);
        this.aZombie.setOrigin(0.5, 1);
    },

    killZombie: function () {
        this.aZombie.destroy();
    },

    generate2ombieAnimations: function () {

        jeu.scene.anims.create({
            key: 'zombieWalk',
            frames: game.anims.generateFrameNames('zombie', {prefix: 'zombie_walk', start: 1, end: 2}),
            frameRate: 5,
            repeat: -1
        });

    },


    manageMoves : function(){

        this.aZombie.anims.play('zombieWalk');

        var tween = jeu.scene.tweens.add({
            targets : this.aZombie,
            x : jeu.world.debutZombie1.x + 100,
            ease : "linear",
            duration: 1000,
            yoyo: true,
            repeat: -1,
            onStart : function() {},
            onComplete: function() {},
            onYoyo : function () { jeu.zombie.aZombie.flipX = !jeu.zombie.aZombie.flipX},
            onRepeat: function() { jeu.zombie.aZombie.flipX = !jeu.zombie.aZombie.flipX},
        })
    },
}