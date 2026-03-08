"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelValidator = void 0;
const BookingValidator_1 = require("./BookingValidator");
const ValidatonResult_1 = require("../models/ValidatonResult");
class HotelValidator extends BookingValidator_1.BookingValidator {
    isValidBooking(booking) {
        let data = booking.getData();
        if (!data.nights || data.nights === ' ' || data.nights < 0) {
            return ValidatonResult_1.ValidationResult.fail("Missing Nights.");
        }
        if (data.hotelName === ' ' || !data.hotelName) {
            return ValidatonResult_1.ValidationResult.fail("Missing hotelName.");
        }
        return ValidatonResult_1.ValidationResult.success();
    }
}
exports.HotelValidator = HotelValidator;
//# sourceMappingURL=HotelValidator.js.map