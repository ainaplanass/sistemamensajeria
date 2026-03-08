"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingFactory = void 0;
const Booking_1 = require("../models/Booking");
const Flight_1 = require("../models/Flight");
const Hotel_1 = require("../models/Hotel");
const CarRental_1 = require("../models/CarRental");
class BookingFactory {
    createBooking(type, reservationNum, data) {
        switch (type) {
            case (Booking_1.BookingType.Flight):
                return new Flight_1.Flight(Booking_1.BookingType.Flight, reservationNum, data);
            case (Booking_1.BookingType.Hotel):
                return new Hotel_1.Hotel(Booking_1.BookingType.Hotel, reservationNum, data);
            case (Booking_1.BookingType.CarRental):
                return new CarRental_1.CarRental(Booking_1.BookingType.CarRental, reservationNum, data);
            default:
                throw new Error(`Booking type '${type}' is not recognized by the Factory.`);
        }
    }
}
exports.BookingFactory = BookingFactory;
//# sourceMappingURL=BookingFactory.js.map