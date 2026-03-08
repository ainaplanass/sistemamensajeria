"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRental = void 0;
const Booking_1 = require("./Booking");
class CarRental extends Booking_1.Booking {
    constructor(type, reservationNumber, data) {
        super(type, reservationNumber);
        this.data = data;
    }
    getData() {
        return this.data;
    }
}
exports.CarRental = CarRental;
//# sourceMappingURL=CarRental.js.map