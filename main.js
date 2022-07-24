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
let cir3 = Bodies.circle(700, 0, 60, {
    restitution: 1,
    render: {
        fileStyle: '#AAAAAA',
        strokeStyle: '#000000',
        lineWidht: 5
    }
});

World.add(world, [
    rect,
    cir,
    cir2,
    cir3
]);

let cir4 = Bodies.circle(80, 0, 50, {
    restitution: 1,
    render: {
        sprite:{
            texture: 'sample.png'
        }
    }
});

let MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse;

// マウスコントロール
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.1,
        }
    });
World.add(world, mouseConstraint);

render.mouse = mouse;

// フロアの作成
let floor = Bodies.rectangle(400, 400, 800, 40, {
    inStatic: true
});

World.add(world, floor);

Render.run(render);
Engine.run(engine);