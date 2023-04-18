window.addEventListener('load', function() {
    // navbar stuff
    const menu = document.querySelector('#mobileMenu');
    const menuLinks = document.querySelector('.navMenu');

    menu.addEventListener('click', () => {
        menu.classList.toggle('isActive');
        menuLinks.classList.toggle('active');
    });

    // Welcome text stuff
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray = [];
    let adjustX = 30;
    let adjustY = 0;

    // handle mouse 
    const mouse = {
        x: null,
        y: null,
        radius: 250
    }

    this.window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        // might need to think of some varible other than 80 that will keep track of screen movement 
        // to keep mouse animations acurate
        mouse.y = e.y - 80;
    });

    ctx.fillStyle = 'white';
    ctx.font = '20px Verdana';
    ctx.fillText('Welcome', 0, 30);
    ctx.fillText('to', 35, 50);
    ctx.fillText('MataGrub', 0, 70);
    const textCoordinates = ctx.getImageData(0, 0, 100, 100);
    

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 40) + 5;
        }
        draw() {
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
        update() {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt((dx * dx) + (dy * dy));
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;

            if (distance < mouse.radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/10;
                } 
                if (this.y !== this.baseY) {
                    let dy = this.y -this.baseY;
                    this.y -= dy/10;
                }
            }
        }
    }

    function init() {
        particleArray = [];
        for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
                // we are cycling through 40,000 elements and catching every 4th element. if element has about
                // 50%(the 128 value(about half of 255)) opacity we capture the elements coordinates and push a new particle.
                if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                    let positionX = x + adjustX;
                    let positionY = y + adjustY;
                    particleArray.push(new Particle(positionX * 10, positionY * 10));
                }
            }
        }
    }
    init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particleArray.length; i++) {
            particleArray[i].draw();
            particleArray[i].update();
        }
        // connect();
        requestAnimationFrame(animate);
    }
    animate();

    // function connect() {
    //     let opacityValue = 0.5;

    //     for (let a = 0; a < particleArray.length; a++) {
    //         for (let b = a; b < particleArray.length; b++) {
    //             // let dx = mouse.x - this.x;
    //             // let dy = mouse.y - this.y;
    //             // let distance = Math.sqrt((dx * dx) + (dy * dy));
    //             let dx = particleArray[a].x - particleArray[b].x;
    //             let dy = particleArray[a].y - particleArray[b].y;
    //             let distance = Math.sqrt((dx * dx) + (dy * dy));
    //             opacityValue = 1 - (distance / 15);
    //             ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';

    //             if (distance < 15) {
    //                 ctx.lineWidth = 2;
    //                 ctx.beginPath();
    //                 ctx.moveTo(particleArray[a].x, particleArray[a].y);
    //                 ctx.lineTo(particleArray[b].x, particleArray[b].y);
    //                 ctx.stroke();
    //             }
    //         }
    //     }
    // }

});