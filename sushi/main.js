//window.onload = function(){
  cc.game.onStart = function(){
    //load resources
    // cc.LoaderScene.preload(["HelloWorld.png"], function () {
    //     var MyScene = cc.Scene.extend({
    //         onEnter:function () {
    //             this._super();
    //             var size = cc.director.getWinSize();
    //             var sprite = cc.Sprite.create("HelloWorld.png");
    //             sprite.setPosition(size.width / 2, size.height / 2);
    //             sprite.setScale(0.8);
    //             this.addChild(sprite, 0);

    //             var label = cc.LabelTTF.create("Hello World", "Arial", 40);
    //             label.setPosition(size.width / 2, size.height / 2);
    //             this.addChild(label, 1);
    //         }
    //     });
    //     cc.director.runScene(new MyScene());
    // }, this);

    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(320, 480, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    cc.LoaderScene.preload(g_resources, function () {
      cc.director.runScene(new StartScene());
    }, this);
  };
  cc.game.run();//"gameCanvas");
//};