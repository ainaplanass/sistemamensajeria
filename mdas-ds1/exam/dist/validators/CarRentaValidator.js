"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRentalValidator = void 0;
const BookingValidator_1 = require("./BookingValidator");
const ValidatonResult_1 = require("../models/ValidatonResult");
class CarRentalValidator extends BookingValidator_1.BookingValidator {
    isValidBooking(booking) {
        let data = booking.getData();
        if (!data.carModel || data.carModel === ' ') {
            return ValidatonResult_1.ValidationResult.fail("Missing carModel.");
        }
        if (!data.days || data.days < 0 || data.days > 30) {
            return ValidatonResult_1.ValidationResult.fail("Missing days.");
        }
        if (!data.driverAge || data.driverAge < 25) {
            return ValidatonResult_1.ValidationResult.fail("Missing driverAge.");
        }
        return ValidatonResult_1.ValidationResult.success();
    }
}
exports.CarRentalValidator = CarRentalValidator;
//# sourceMappingURL=CarRentaValidator.js.map