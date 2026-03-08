"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = exports.BookingType = void 0;
var BookingType;
(function (BookingType) {
    BookingType["Hotel"] = "Hotel";
    BookingType["Flight"] = "Flight";
    BookingType["CarRental"] = "CarRental";
})(BookingType || (exports.BookingType = BookingType = {}));
class Booking {
    constructor(type, reservationNumber) {
        this.reservationNumber = reservationNumber;
        this.type = type;
    }
    getbookingType() {
        return this.type;
    }
    getReservationNumber() {
        return this.reservationNumber;
    }
}
exports.Booking = Booking;
//# sourceMappingURL=Booking.js.map