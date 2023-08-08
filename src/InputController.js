export class InputController {
    static ACTION_ACTIVATED = "input-controller:action-activated";

    static ACTION_DEACTIVATED = "input-controller:action-deactivated";
    
    enabled = false;

    focused = false;

    constructor(actionsToBind, target) {
        this.keyupHandler = this.keyupHandler.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);

        this.actionsToBind = actionsToBind;
        this.target = target;

        this.buttons = [];
        // Вынес это чтобы была возможность удалять обработчики
        this.activateEvent = new Event(this.ACTION_ACTIVATED);
        this.deactivateEvent = new Event(this.ACTION_DEACTIVATED);
    }

    keydownHandler(event) {
        if (!this.enabled) return;
        if (!this.isKeyPressed(event.keyCode)) {
            this.buttons.push(event.keyCode)
            console.log(this.buttons)
        }
        for (let action in this.actionsToBind) {
            if (this.actionsToBind[action].keys.includes(event.keyCode)) {
                if (this.actionsToBind[action].active != true) {
                    this.actionsToBind[action].active = true;
                    this.target.dispatchEvent(this.activateEvent);
                }
            }
        }
    }

    keyupHandler(event) {
        if (!this.enabled) return;
        for (let action in this.actionsToBind) {
            if (this.actionsToBind[action].keys.includes(event.keyCode)) {
                this.buttons = this.buttons.filter((item) => item !== event.keyCode);
                console.log(this.buttons.filter((item) => item == event.keyCode))
                if (this.checkArrays(this.actionsToBind[action].keys, this.buttons)) {
                    this.actionsToBind[action].active = false;
                    this.target.dispatchEvent(this.deactivateEvent);     
                }
                          
            }
             
        }
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
            return this.buttons.some((item) => item === keyCode);
        }
    }

    checkActive() {
        if (this.enabled) {
            for (let key in this.actionsToBind) {
                if (this.actionsToBind[key].active !== false) {
                    return false;
                }
            }
            return true;
        }
    }

    checkArrays(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            if (array2.includes(array1[i])) {
                return false;
            }
        }
        return true;
    }
}

