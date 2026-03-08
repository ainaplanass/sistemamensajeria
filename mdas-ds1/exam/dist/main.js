"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationFacade_1 = require("./facades/NotificationFacade");
const User_1 = require("./models/User");
const notifyService = new NotificationFacade_1.NotificationFacade();
const user1 = new User_1.User("Ana", "ana@email.com", "600000000");
notifyService.subscribe(user1, "SECURITY");
notifyService.broadcast("Intento de acceso detectado", "SECURITY", "URGENT");
//# sourceMappingURL=main.js.map