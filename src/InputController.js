export class InputController {
    enabled = false;
    focused = false;
    ACTION_ACTIVATED = "input-controller:action-activated";
    ACTION_DEACTIVATED = "input-controller:action-deactivated";

    constructor(actionsToBind, target) {
        this.actionsToBind = actionsToBind;
        this.target = target;

        // Вынес это чтобы была возможность удалять обработчики
        this.activateEvent = new Event(this.ACTION_ACTIVATED);
        this.deactivateEvent = new Event(this.ACTION_DEACTIVATED);
        this.keyupHandler = this.keyupHandler().bind(this);
        this.keydownHandler = this.keydownHandler().bind(this);
    }

    keydownHandler() {
        return (event) => {
            for (let key in this.actionsToBind) {
                if (this.enabled && this.actionsToBind[key].keys.includes(event.keyCode) && this.actionsToBind[key].active != true) {
                    this.actionsToBind[key].active = true;
                    this.target.dispatchEvent(this.activateEvent);
                }
            }
        };
    }

    keyupHandler() {
        return (event) => {
            for (let key in this.actionsToBind) {
                if (this.enabled && this.actionsToBind[key].keys.includes(event.keyCode)) {
                    this.target.dispatchEvent(this.deactivateEvent);
                }
            }
        };
    }

    bindActions(actionsToBind) {
        if (this.enabled) {
            this.actionsToBind = actionsToBind;
        }
    }

    enableAction(actionName) {
        if (this.enabled) {
            this.actionsToBind[actionName].enabled = true;
        }
    }

    disableAction(actionName) {
        if (this.enabled) {
            this.actionsToBind[actionName].enabled = false;
        }
    }

    attach(target, dontEnable = false) {
        if (this.enabled && !dontEnable && this.focused) {
            target.addEventListener("keydown", this.keydownHandler);
            target.addEventListener("keyup", this.keyupHandler);
        }
    }

    detach(target) {
        if (this.enabled) {
            target.removeEventListener("keydown", this.keydownHandler);
            target.removeEventListener("keyup", this.keyupHandler);
        }
    }

    isActionActive(action) {
        if (this.enabled && this.actionsToBind[action].enabled) {
            return this.actionsToBind[action].active;
        } else {
            return false;
        }
    }

    isKeyPressed(keyCode) {
        if (this.enabled) {
            return Object.values(this.actionsToBind).some((item) => item.keys.includes(keyCode) && item.active);
        }
    }

    checkActive() {
        if (this.enabled) {
            for (let key in this.actionsToBind) {
                if (this.actionsToBind.hasOwnProperty(key) && this.actionsToBind[key].active !== false) {
                    return false;
                }
            }
            return true;
        }
    }
}
