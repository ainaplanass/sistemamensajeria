"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFactory = void 0;
const Booking_1 = require("../models/Booking");
const FlightValidator_1 = require("../validators/FlightValidator");
const CarRentaValidator_1 = require("../validators/CarRentaValidator");
const HotelValidator_1 = require("../validators/HotelValidator");
class ValidationFactory {
    createValidator(booking) {
        let bookingType = booking.getbookingType();
        switch (bookingType) {
            case (Booking_1.BookingType.Flight):
                return new FlightValidator_1.FlightValidator();
            case (Booking_1.BookingType.CarRental):
                return new CarRentaValidator_1.CarRentalValidator();
            case (Booking_1.BookingType.Hotel):
                return new HotelValidator_1.HotelValidator();
        }
    }
}
exports.ValidationFactory = ValidationFactory;
//# sourceMappingURL=ValidationFactory.js.map