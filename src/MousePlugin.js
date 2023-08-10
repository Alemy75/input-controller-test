import { game } from "./InputController";

export class MousePlugin {

    name = "mouse-plugin";

    enabled = true;

    constructor() {

        this.mousedownHandler = this.mousedownHandler.bind(this);

        this.mouseupHandler = this.mouseupHandler.bind(this);

        this.buttons = {};
    }

    mousedownHandler(event) {
        if (!this.enabled) return;

        if (!this.isKeyPressed(event.which)) {
            this.buttons[event.which] = true;
        }

        for (let action in game.actionsToBind) {
            if (game.actionsToBind[action].which.includes(event.which)) {
                if (game.actionsToBind[action].active != true) {
                    game.actionsToBind[action].active = true;
                    game.target.dispatchEvent(game.activateEvent);
                    
                }
            }
        }
    }

    mouseupHandler(event) {
        if (!this.enabled) return;

        this.buttons[event.which] = false;

        for (let action in game.actionsToBind) {
            if (game.actionsToBind[action].which.includes(event.which)) {
                if (!game.checkButtons(action)) {
                    game.actionsToBind[action].active = false;
                    game.target.dispatchEvent(game.deactivateEvent);
                    console.log('ev')
                }
            }
        }
    }

    attachPlugin(target) {
        target.addEventListener("mousedown", this.mousedownHandler);

        target.addEventListener("mouseup", this.mouseupHandler);
    }

    detachPlugin(target) {
        target.removeEventListener("mousedown", this.mousedownHandler);

        target.removeEventListener("mouseup", this.mouseupHandler);
    }

    isKeyPressed(which) {
        if (this.enabled) {
            return this.buttons[which];
        }
    }

    checkAction(action) {
        return game.actionsToBind[action].which.some((item) => this.isKeyPressed(item));
    }
}
