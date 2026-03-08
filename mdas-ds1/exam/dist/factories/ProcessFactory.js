"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessFactory = void 0;
const Booking_1 = require("../models/Booking");
const FlightProcessor_1 = require("../processors/FlightProcessor");
const CarRentalProcessor_1 = require("../processors/CarRentalProcessor");
const HotelProcessor_1 = require("../processors/HotelProcessor");
class ProcessFactory {
    createProcessor(booking) {
        let bookingType = booking.getbookingType();
        switch (bookingType) {
            case (Booking_1.BookingType.Flight):
                return new FlightProcessor_1.FligthProcessor();
            case (Booking_1.BookingType.CarRental):
                return new CarRentalProcessor_1.CarRentalProcessor();
            case (Booking_1.BookingType.Hotel):
                return new HotelProcessor_1.HotelProcessor();
        }
    }
}
exports.ProcessFactory = ProcessFactory;
//# sourceMappingURL=ProcessFactory.js.map