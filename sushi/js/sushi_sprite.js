var SushiSprite = cc.Sprite.extend({
  disappearAction: null,
  touchListener:null,

  onEnter: function() {
    this._super();

    this.disappearAction = this.createDisappearAction();
    this.disappearAction.retain();

    this.addTouchEventListener();
  },

  onExit: function() {
    this.disappearAction.release();
    this._super();
  },

  addTouchEventListener: function() {
    this.touchListener = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function(touch, event) {
        var pos = touch.getLocation();
        var target = event.getCurrentTarget();
        if (cc.rectContainsPoint(target.getBoundingBox(), pos)) {
          target.removeTouchEventListener();

          target.stopAllActions();

          var ac = target.disappearAction;
          var seqAc = cc.Sequence.create(ac, cc.CallFunc.create(function() {
            cc.log("callfun...");
            target.getParent().addScore();
            target.removeFromParent();
          }, target));

          target.runAction(seqAc);

          return true;
        }
        return false;
      }
    });
    cc.eventManager.addListener(this.touchListener, this);
  },

  removeTouchEventListener: function() {
    cc.eventManager.removeListener(this.touchListener);
  },

  createDisappearAction: function() {
    var frames = [];
    for(var i = 0; i < 11; i++) {
      var str = "sushi_1n_" + i + ".png";
      var frame = cc.spriteFrameCache.getSpriteFrame(str);
      frames.push(frame);
    }

    var animation = new cc.Animation(frames, 0.02);
    var action = new cc.Animate(animation);

    return action;
  }
});