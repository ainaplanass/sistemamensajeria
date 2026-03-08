"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFacade = void 0;
const SubscriptionChannel_1 = require("../models/SubscriptionChannel");
const NotificationFactory_1 = require("../factories/NotificationFactory");
class NotificationFacade {
    constructor() {
        this.promotion = new SubscriptionChannel_1.SubscriptionChannel("PROMOTION");
        this.security = new SubscriptionChannel_1.SubscriptionChannel("SECURITY");
        this.system = new SubscriptionChannel_1.SubscriptionChannel("SYSTEM");
    }
    subscribe(user, theme) {
        switch (theme) {
            case "PROMOTION":
                this.promotion.subscribe(user);
                break;
            case "SECURITY":
                this.security.subscribe(user);
                break;
            case "SYSTEM":
                this.system.subscribe(user);
                break;
        }
    }
    broadcast(message, theme, urgency) {
        let notificationFactory = new NotificationFactory_1.NotificationFactory();
        switch (theme) {
            case "PROMOTION":
                this.promotion.getUsers().forEach(element => {
                    notificationFactory.createNotification(element, message, urgency);
                });
                break;
            case "SECURITY":
                this.security.getUsers().forEach(element => {
                    notificationFactory.createNotification(element, message, urgency);
                });
                break;
            case "SYSTEM":
                this.system.getUsers().forEach(element => {
                    notificationFactory.createNotification(element, message, urgency);
                });
        }
    }
}
exports.NotificationFacade = NotificationFacade;
//# sourceMappingURL=NotificationFacade.js.map