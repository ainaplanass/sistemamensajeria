"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingValidator = void 0;
const ValidatonResult_1 = require("../models/ValidatonResult");
class BookingValidator {
    validate(booking) {
        let reservationNumValid = this.isReservationNumberValid(booking);
        let isValidBooking = this.isValidBooking(booking);
        if (reservationNumValid && isValidBooking) {
            return this.isValidBooking(booking);
            ;
        }
        return ValidatonResult_1.ValidationResult.fail("Invalid Reservation Number: Must be greater than 0");
    }
    isReservationNumberValid(booking) {
        let numberReservation = booking.getReservationNumber();
        return numberReservation > 0 ? true : false;
    }
}
exports.BookingValidator = BookingValidator;
//# sourceMappingURL=BookingValidator.js.map