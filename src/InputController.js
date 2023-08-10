import { actions } from "./actions.js";

class InputController {
    ACTION_ACTIVATED = "input-controller:action-activated";

    ACTION_DEACTIVATED = "input-controller:action-deactivated";

    enabled = false;

    focused = false;

    constructor(actionsToBind) {
        this.actionsToBind = actionsToBind;

        this.target;

        this.activateEvent = new Event(this.ACTION_ACTIVATED);

        this.deactivateEvent = new Event(this.ACTION_DEACTIVATED);

        this.plugins = [];
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

    isActionActive(action) {
        if (this.enabled && this.actionsToBind[action].enabled) {
            return this.actionsToBind[action].active;
        } else {
            return false;
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

    attach(target, dontEnable = false) {
        if (this.enabled && !dontEnable && this.focused) {
            this.plugins.forEach((plugin) => {
                plugin.attachPlugin(target);
            });
        }
    }

    detach(target) {
        if (this.enabled) {
            this.plugins.forEach((plugin) => {
                plugin.detachPlugin(target);
            });
        }
    }

    registerPlugins(plugins) {
        if (this.enabled) {
            this.plugins.push(...plugins);
        }
    }

    setTarget(target) {
        this.target = target;
    }

    checkButtons(action) {
        return  this.plugins.some((plugin) => plugin.checkAction(action));
    }
}

export const game = new InputController(actions);
