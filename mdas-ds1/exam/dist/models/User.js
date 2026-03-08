"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username, email, number) {
        this.username = username,
            this.email = email,
            this.number = number;
        this.favoriteContactMethod = this.getFavoriteContactMethod();
    }
    getFavoriteContactMethod() {
        return "EMAIL";
    }
    getUsername() {
        return this.username;
    }
    getEmail() {
        return this.email;
    }
    getNumber() {
        return this.number;
    }
    update() {
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map