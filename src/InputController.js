export class InputController {
    enabled = false;
    focused = false;
    ACTION_ACTIVATED = "input-controller:action-activated";
    ACTION_DEACTIVATED = "input-controller:action-deactivated";

    constructor(actionsToBind, target) {
        this.actionsToBind = actionsToBind;
        this.target = target;

        //Вынес это чтобы была возможность удалять обработчики
        this.activateEvent = new Event(this.ACTION_ACTIVATED);
        this.deactivateEvent = new Event(this.ACTION_DEACTIVATED);
        this.keydownHandler = keydownHandler(target, this.activateEvent, this.actionsToBind).bind(this);
        this.keyupHandler = keyupHandler(target, this.deactivateEvent, this.actionsToBind).bind(this);
    }

    bindActions(actionsToBind) {
        this.actionsToBind = actionsToBind;
    }

    enableAction(actionName) {
        this.actionsToBind[actionName].enabled = true;
    }

    disableAction(actionName) {
        this.actionsToBind[actionName].enabled = false;
    }

    attach(target, dontEnable = false) {
        if (!dontEnable) {
            target.addEventListener("keydown", this.keydownHandler);

            target.addEventListener("keyup", this.keyupHandler);
        }
    }

    detach(target) {
        target.removeEventListener("keydown", this.keydownHandler);
    }

    isActionActive(action) {
        if (this.actionsToBind[action].enabled) {
            return this.actionsToBind[action].active ? true : false;
        } else {
            return false;
        }
    }

    isKeyPressed(keyCode) {
        if (Object.values(this.actionsToBind).find((item) => item.keys.includes(keyCode) && item.active)) {
            return true;
        } else {
            return false;
        }
    }
}

function keydownHandler(target, activateEvent, actions) {
    return (event) => {
        for (let key in actions) {
            if (actions[key].keys.includes(event.keyCode)) {
                if (actions[key].active != true) {
                    actions[key].active = true;
                    target.dispatchEvent(activateEvent);
                }
            }
        }
    };
}

function keyupHandler(target, deactivateEvent, actions) {
    return (event) => {
        target.dispatchEvent(deactivateEvent);
        for (let key in actions) {
            if (actions[key].keys.includes(event.keyCode)) {
                actions[key].active = false;
            }
        }
    };
}
