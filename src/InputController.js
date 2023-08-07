export class InputController {
    enabled = false;
    focused = false;
    ACTION_ACTIVATED = "input-controller:action-activated";
    ACTION_DEACTIVATED = "input-controller:action-deactivated";

    constructor(actionsToBind, target) {
        this.actionsToBind = actionsToBind;
        this.target = target;
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
        const activateEvent = new Event(this.ACTION_ACTIVATED);
        const deactivateEvent = new Event(this.ACTION_DEACTIVATED);

        if (!dontEnable) {
            target.addEventListener("keydown", (event) => {
                for (let key in this.actionsToBind) {
                    if (this.actionsToBind[key].keys.includes(event.keyCode)) {
                        if (this.actionsToBind[key].active != true) {
                            this.actionsToBind[key].active = true;
                            target.dispatchEvent(activateEvent);
                        }
                    }
                }
            });

            target.addEventListener("keyup", (event) => {
                target.dispatchEvent(deactivateEvent);
                for (let key in this.actionsToBind) {
                    if (this.actionsToBind[key].keys.includes(event.keyCode)) {
                        this.actionsToBind[key].active = false;
                    }
                }
            });
        }
    }

    detach(target) {
        const newTarget = target.cloneNode(true);
        target.replaceWith(newTarget);
    }

    isActionActive(action) {
        if (this.actionsToBind[action].enabled) {
            return this.actionsToBind[action].active ? true : false;
        } else {
            return false
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
