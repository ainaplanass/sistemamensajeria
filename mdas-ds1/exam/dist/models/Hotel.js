"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
const Booking_1 = require("./Booking");
class Hotel extends Booking_1.Booking {
    constructor(type, reservationNumber, data) {
        super(type, reservationNumber);
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
exports.Hotel = Hotel;
//# sourceMappingURL=Hotel.js.map