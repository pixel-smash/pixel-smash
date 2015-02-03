define(['pixi.dev'],
function(PIXI) {

  function Smile() {
    var texture = PIXI.Texture.fromImage('assets/smile.png');
    PIXI.Sprite.call(this, texture, 200, 200);

    this.position.x = 0;
    this.position.y = 0;

    this.viewportX = 0;
  }

  Smile.constructor = Smile;
  Smile.prototype = Object.create(PIXI.Sprite.prototype);

  Smile.DELTA_X = 0.075;

  Smile.prototype.setViewportX = function(newViewportX) {
    var distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Smile.DELTA_X);
  };

  return Smile;

});
