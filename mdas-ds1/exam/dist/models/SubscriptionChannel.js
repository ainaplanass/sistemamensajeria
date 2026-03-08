"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionChannel = void 0;
class SubscriptionChannel {
    constructor(type) {
        this.type = type;
        this.users = [];
    }
    getType() {
        return this.type;
    }
    subscribe(newUser) {
        this.users.push(newUser);
    }
    getUsers() {
        return this.users;
    }
}
exports.SubscriptionChannel = SubscriptionChannel;
//# sourceMappingURL=SubscriptionChannel.js.map