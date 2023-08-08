import { InputController } from "./InputController.js";
import { actions } from "./actions.js";
import "./style.css";

const target = document.querySelector("body");
const sprite = document.querySelector(".sprite");

const Game = new InputController(actions, target);

Game.focused = true;
Game.enabled = true;
Game.attach(target);

let requestId;
let positionX = 0;
let speedX = 5;
let direction = "right";

function animate() {
    if (direction === "right") {
        positionX += speedX;
    } else {
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
    if (Game.isActionActive("left") && Game.actionsToBind["left"].enabled) {
        changeDirection("left");
        startAnimation();
    }
    if (Game.isActionActive("right") && Game.actionsToBind["right"].enabled) {
        changeDirection("right");
        startAnimation();
    }
    if (Game.isActionActive("jump") && Game.actionsToBind["jump"].enabled) {
        if (Game.isKeyPressed(32)) {
            sprite.classList.add("jump-animation");
            sprite.style.background = "green";
        }
    }
};

const actionDeactivatedEventListener = () => {
    if (Game.isActionActive("left") && Game.actionsToBind["left"].enabled) {
        stopAnimation();
    }
    if (Game.isActionActive("right") && Game.actionsToBind["right"].enabled) {
        stopAnimation();
    }
    if (Game.isActionActive("jump") && Game.actionsToBind["jump"].enabled) {
        sprite.classList.remove("jump-animation");
        sprite.style.background = "red";
    }
};

const addEventListeners = () => {
    target.addEventListener(Game.ACTION_ACTIVATED, actionActivatedEventListener);

    target.addEventListener(Game.ACTION_DEACTIVATED, actionDeactivatedEventListener);
};

addEventListeners();

const detachBtn = document.querySelector(".detach");
detachBtn.addEventListener("click", () => Game.detach(target));

const attachBtn = document.querySelector(".attach");
attachBtn.addEventListener("click", () => Game.attach(target));

const disableJumpBtn = document.querySelector(".disableJump");
disableJumpBtn.addEventListener("click", () => Game.disableAction("jump"));

const enableJumpBtn = document.querySelector(".enableJump");
enableJumpBtn.addEventListener("click", () => Game.enableAction("jump"));
