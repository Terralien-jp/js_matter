let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    World = Matter.World,
    Bodies = Matter.Bodies;

// engine作成
let engine = Engine.create(),
    world = engine.world;

// render作成
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 400,
        background: '#eeeeee',
        wireframes: false
    }
});

// 四角オブジェクト
let rect = Bodies.rectangle(400, 0, 100, 80);

// 円オブジェクト
let cir = Bodies.circle(200, 0, 50);
let cir2 = Bodies.circle(600, 0, 50);

World.add(world, [
    rect,
    cir,
    cir2
]);

Render.run(render);
Engine.run(engine);