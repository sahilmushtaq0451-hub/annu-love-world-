let currentPage = 1;

const sky = document.getElementById("sky");

const lavenderScenes = [
    "linear-gradient(180deg,#a58bd1,#d9c9ec 65%,#b9a3d0)",
    "linear-gradient(180deg,#b29bd9,#e8d9f2 65%,#c5afd9)",
    "linear-gradient(180deg,#c3a4d8,#ead9ed 60%,#b49bc9)",
    "linear-gradient(180deg,#30264f,#69527f 65%,#a58ab8)",
    "linear-gradient(180deg,#211b40,#59446f 65%,#9b83ad)"
];

function nextPage() {
    if (currentPage >= 5) return;

    document.getElementById("page" + currentPage)
        .classList.remove("active");

    currentPage++;

    document.getElementById("page" + currentPage)
        .classList.add("active");

    sky.style.background = lavenderScenes[currentPage - 1];

    if (currentPage >= 4) {
        sky.classList.add("night");
        showNightSky();
    } else {
        sky.classList.remove("night");
    }

    createPetals();
}

function createPetals() {
    for (let i = 0; i < 5; i++) {
        const petal = document.createElement("span");

        petal.textContent = "✿";
        petal.style.position = "absolute";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.top = "-30px";
        petal.style.color = "#f5eafa";
        petal.style.fontSize = (15 + Math.random() * 18) + "px";
        petal.style.zIndex = "3";
        petal.style.pointerEvents = "none";
        petal.style.animation =
            "fallPetal " + (7 + Math.random() * 6) + "s linear forwards";

        sky.appendChild(petal);

        setTimeout(() => petal.remove(), 14000);
    }
}

function showNightSky() {
    if (document.getElementById("nightDecorations")) return;

    const night = document.createElement("div");
    night.id = "nightDecorations";

    for (let i = 0; i < 45; i++) {
        const star = document.createElement("span");
        star.className = "star";
        star.textContent = "✦";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 65 + "%";
        star.style.animationDelay = Math.random() * 3 + "s";
        night.appendChild(star);
    }

    const moon = document.createElement("div");
    moon.className = "moon";
    moon.textContent = "☾";
    night.appendChild(moon);

    for (let i = 0; i < 12; i++) {
        const light = document.createElement("span");
        light.className = "firefly";
        light.textContent = "✧";
        light.style.left = Math.random() * 100 + "%";
        light.style.top = (55 + Math.random() * 35) + "%";
        light.style.animationDelay = Math.random() * 4 + "s";
        night.appendChild(light);
    }

    sky.appendChild(night);
}

const style = document.createElement("style");

style.textContent = `
@keyframes fallPetal {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }
    15% { opacity: 1; }
    100% {
        transform: translateY(110vh) rotate(500deg);
        opacity: 0;
    }
}

#nightDecorations {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    overflow: hidden;
}

.star {
    position: absolute;
    color: #fff9e8;
    font-size: 13px;
    animation: twinkle 2s ease-in-out infinite alternate;
}

@keyframes twinkle {
    from { opacity: .25; transform: scale(.7); }
    to { opacity: 1; transform: scale(1.3); }
}

.moon {
    position: absolute;
    top: 9%;
    right: 13%;
    color: #fff5dc;
    font-size: 65px;
    text-shadow: 0 0 25px #fff0cf;
}

.firefly {
    position: absolute;
    color: #fff3bd;
    font-size: 20px;
    text-shadow: 0 0 15px #fff2a8;
    animation: fireflyGlow 3s ease-in-out infinite alternate;
}

@keyframes fireflyGlow {
    from { opacity: .15; transform: scale(.7); }
    to { opacity: 1; transform: scale(1.4); }
}
`;

document.head.appendChild(style);

setInterval(createPetals, 4000);
