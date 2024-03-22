rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
score = 0
brickRowCount = 9
brickColumnCount = 5


// Create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx : 4,
    dy: -4,
}

// Create Paddle protperties
paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height -20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}

//Create brick properties
brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true,
}

// Create bricks
brick = []
for (let i = 0; 1 < brickRowCount; i++) {
    brick[i] = []
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        brick[i][j] = {x, y, ...brickInfo}
    }
}

// Draw ball on caanvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}

// Draw ball on caanvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
    ctx.fill()
    ctx.closePath()
}

// Draw score on canvas
function drawScore() {
    ctx.font ='20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
}

//Draw Bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
        colum.forEach(brick => {
            cctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = '#0095dd'
            ctx.fill()
            ctx.closePath()
        })
    })
}

//Draw Everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}
//Move paddle on canvas
function movePaddle() {
    paddle.x = paddle.x + paddle.dx
}

//Keydown event
function keyDown(e) {
    // console.log(e.key)
    if (e.key == 'ArrowRight' || e.key == 'Right') {
        paddle.dx = paddle.speed
    }
}

// Keyup Event
function keyUp(e) {
    if (e.key == 'ArrowRight' || e.key == 'Right') {
        paddle.dx = 0
    }
}

//Keyboard event handlers
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

//Update canvas drawing and do animation
function update() {
    movePaddle()
    draw()
    requestAnimationFrame(update)
}

update()

// Rules open and close event handelers
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})


closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
