function MainAnim(){
    const app = new PIXI.Application({ resizeTo: window });

document.querySelector(".scene").appendChild(app.view);

// Inner radius of the circle
const radius = 130;

// The blur amount
const blurSize = 12;

PIXI.Assets.load('./imgs/bg.png').then((grassTexture) =>
{
    const background = new PIXI.Sprite(grassTexture);

    app.stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

    const circle = new PIXI.Graphics()
        .beginFill(0xFF0000)
        .drawCircle(radius + blurSize, radius + blurSize, radius)
        .endFill();

    circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

    const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
    const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
    const focus = new PIXI.Sprite(texture);

    app.stage.addChild(focus);
    background.mask = focus;

    app.stage.eventMode = 'static';
    app.stage.hitArea = app.screen;
    app.stage.on('pointermove', (event) =>
    {
        focus.position.x = event.global.x - focus.width / 2;
        focus.position.y = event.global.y - focus.height / 2;
    });
});

}

MainAnim()






gsap.utils.toArray('.row3').forEach(val => {
    ScrollTrigger.create({
        trigger: val,
        pin: true,
        start: "top 70px",
        end: "bottom 20%"
    })
})