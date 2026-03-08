"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = void 0;
const Email_1 = require("../models/Email");
const Push_1 = require("../models/Push");
const SMS_1 = require("../models/SMS");
const MarketingMessageStrategy_1 = require("../strategies/MarketingMessageStrategy");
const UrgentMessageStrategy_1 = require("../strategies/UrgentMessageStrategy");
class NotificationFactory {
    createNotification(user, message, urgency) {
        let contactMethod = user.getFavoriteContactMethod();
        switch (contactMethod) {
            case "EMAIL":
                new Email_1.Email(message);
                break;
            case "SMS":
                new SMS_1.SMS(message);
                break;
            case "PUSH":
                new Push_1.Push(message);
                break;
        }
        switch (urgency) {
            case "MARKETING":
                let marketingStrategy = new MarketingMessageStrategy_1.MarketingMessageStrategy();
                message = marketingStrategy.format(message);
            case "URGENT":
                let urgencyStrategy = new UrgentMessageStrategy_1.UrgentMessageStrategy();
                message = urgencyStrategy.format(message);
        }
        console.log(message);
    }
}
exports.NotificationFactory = NotificationFactory;
//# sourceMappingURL=NotificationFactory.js.map