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
    if (Game.isActionActive("jump") && Game.actionsToBind["jump"].enabled) {
        if (Game.isKeyPressed(32)) {
            sprite.classList.add("jump-animation");
            sprite.style.background = "green";
        }
    }
    if (Game.isActionActive("right") && Game.actionsToBind["right"].enabled) {
        changeDirection("right");
        startAnimation();
    }
    if (Game.isActionActive("left") && Game.actionsToBind["left"].enabled) {
        changeDirection("left");
        startAnimation();
    }
};

const actionDeactivatedEventListener = () => {
    if (!Game.isActionActive("left")) {
        changeDirection("right");
    }
    if (!Game.isActionActive("right")) {
        changeDirection("left");
    }
    if (!Game.isActionActive("jump")) {
        sprite.classList.remove("jump-animation");
        sprite.style.background = "red";
    }
    if (Game.checkActive()) {
        stopAnimation();
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
