var StateLoad = {

  preload: function () {
    // Add loading bar images
    var empty = game.add.image(0, 0, 'loadingEmpty');
    var full = game.add.image(0, 0, 'loadingFull');
    // Display loading bar
    center(empty);
    full.anchor.set(0, 0.5);
    full.x = game.world.centerX - empty.width / 2;
    full.y = empty.y;

    game.load.setPreloadSprite(full);
    // Load images and sounds
    game.load.spritesheet('buttons', 'assets/images/ui/buttons-red.png', 265, 75);
    game.load.spritesheet('soundButtons', 'assets/images/ui/soundButtons-blue.png', 44, 44 , 4);
    game.load.audio('backgroundMusic', 'assets/sounds/background/piano.mp3');
    game.load.audio('elephant', 'assets/sounds/sfx/elephant.mp3');
  },

  create: function () {
    // Proceed to title screen
    game.state.start('StateTitle');
  },

  update: function () {

  }

}
