"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightValidator = void 0;
const BookingValidator_1 = require("./BookingValidator");
const ValidatonResult_1 = require("../models/ValidatonResult");
class FlightValidator extends BookingValidator_1.BookingValidator {
    isValidBooking(booking) {
        let data = booking.getData();
        if (!data.flightNumber || data.flightNumber <= 0) {
            return ValidatonResult_1.ValidationResult.fail("Missing fligthNumber.");
        }
        if (data.airline === ' ' || !data.airline) {
            return ValidatonResult_1.ValidationResult.fail("Missing airline.");
        }
        if (!data.luggageWeight || data.luggageWeight > 25) {
            return ValidatonResult_1.ValidationResult.fail("Missing luggageWeight.");
        }
        return ValidatonResult_1.ValidationResult.success();
    }
}
exports.FlightValidator = FlightValidator;
//# sourceMappingURL=FlightValidator.js.map