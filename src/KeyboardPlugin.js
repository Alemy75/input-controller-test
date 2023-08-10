import { game } from "./InputController";
import { actions } from "./actions";

export class KeyboardPlugin {

    name = "keyboard-plugin"

    enabled = true

    constructor() {

        this.keyupHandler = this.keyupHandler.bind(this);

        this.keydownHandler = this.keydownHandler.bind(this);
        
        this.buttons = {};
    }

    keydownHandler(event) {
        if (!this.enabled) return;

        if (!this.isKeyPressed(event.keyCode)) {
            this.buttons[event.keyCode] = true;
        }

        for (let action in game.actionsToBind) {
            if (game.actionsToBind[action].keys.includes(event.keyCode)) {
                if (!game.actionsToBind[action].active) {
                    game.actionsToBind[action].active = true;
                    game.target.dispatchEvent(game.activateEvent);
                    
                }
            }
        }
    }

    keyupHandler(event) {
        if (!this.enabled) return;

        this.buttons[event.keyCode] = false;

        for (let action in game.actionsToBind) {
            if (game.actionsToBind[action].keys.includes(event.keyCode)) {
                if (!game.checkButtons(action)) {
                    game.actionsToBind[action].active = false;
                    game.target.dispatchEvent(game.deactivateEvent);
                    console.log('ev')
                }
            }
        }
    }

    attachPlugin(target) {  

        target.addEventListener("keydown", this.keydownHandler);
        
        target.addEventListener("keyup", this.keyupHandler);
    }

    detachPlugin(target) {
        target.removeEventListener("keydown", this.keydownHandler);

        target.removeEventListener("keyup", this.keyupHandler);
    }

    isKeyPressed(keyCode) {
        if (this.enabled) {
            return this.buttons[keyCode];
        }
    }

    checkAction(action) {
        return game.actionsToBind[action].keys.some((item) => this.isKeyPressed(item));
    }

}
