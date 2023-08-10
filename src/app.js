import { game } from "./InputController.js";
import { KeyboardPlugin } from "./KeyboardPlugin.js";
import { MousePlugin } from "./MousePlugin.js";
import "./style.css";

const target = document.querySelector("body");
const sprite = document.querySelector(".sprite");

const mouse = new MousePlugin();
const keyboard = new KeyboardPlugin();

game.focused = true;
game.enabled = true;

game.registerPlugins([keyboard, mouse]);
game.setTarget(target);
game.attach(target);

let requestId;
let positionX = 0;
let speedX = 3;
let direction = "left";

function animate() {
    if (direction === "right") {
        positionX += speedX;
    }
    if (direction === "left") {
        positionX -= speedX;
    }

    sprite.style.transform = `translateX(${positionX}px)`;

    requestId = requestAnimationFrame(animate);
}

function startAnimation() {
    if (!requestId) {
        animate();
    }
}

function stopAnimation() {
    cancelAnimationFrame(requestId);
    requestId = null;
}

function changeDirection(newDirection) {
    if (newDirection === "right" || newDirection === "left") {
        direction = newDirection;
    }
}

const actionActivatedEventListener = () => {
    if (game.isActionActive("jump") && game.actionsToBind["jump"].enabled) {
        if (keyboard.isKeyPressed(32) || mouse.isKeyPressed(3)) {
            sprite.classList.add("jump-animation");
            sprite.style.background = "green";
        }
    }
    if (game.isActionActive("right") && game.actionsToBind["right"].enabled) {
        changeDirection("right");
        startAnimation();
    }
    if (game.isActionActive("left") && game.actionsToBind["left"].enabled) {
        changeDirection("left");
        startAnimation();
    }
};

const actionDeactivatedEventListener = () => {
    if (!game.isActionActive("left")) {
        changeDirection("right");
    }
    if (!game.isActionActive("right")) {
        changeDirection("left");
    }
    if (!game.isActionActive("jump")) {
        sprite.classList.remove("jump-animation");
        sprite.style.background = "red";
    }
    if (game.checkActive()) {
        stopAnimation();
    }
};

const addEventListeners = () => {
    target.addEventListener(game.ACTION_ACTIVATED, actionActivatedEventListener);

    target.addEventListener(game.ACTION_DEACTIVATED, actionDeactivatedEventListener);
};

addEventListeners();

const detachBtn = document.querySelector(".detach");
detachBtn.addEventListener("click", () => game.detach(target));

const attachBtn = document.querySelector(".attach");
attachBtn.addEventListener("click", () => game.attach(target));

const disableJumpBtn = document.querySelector(".disableJump");
disableJumpBtn.addEventListener("click", () => game.disableAction("jump"));

const enableJumpBtn = document.querySelector(".enableJump");
enableJumpBtn.addEventListener("click", () => game.enableAction("jump"));