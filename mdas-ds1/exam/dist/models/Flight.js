"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
const Booking_1 = require("./Booking");
class Flight extends Booking_1.Booking {
    constructor(type, reservationNumber, data) {
        super(type, reservationNumber);
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
exports.Flight = Flight;
//# sourceMappingURL=Flight.js.map