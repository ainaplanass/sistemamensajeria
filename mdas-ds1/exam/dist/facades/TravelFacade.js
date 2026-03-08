"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelFacade = void 0;
const BookingFactory_1 = require("../factories/BookingFactory");
const ProcessFactory_1 = require("../factories/ProcessFactory");
const ValidationFactory_1 = require("../factories/ValidationFactory");
class TravelFacade {
    processBooking(type, reservationNum, data) {
        try {
            const bookingFactory = new BookingFactory_1.BookingFactory();
            const booking = bookingFactory.createBooking(type, reservationNum, data);
            const validationFactory = new ValidationFactory_1.ValidationFactory();
            const validator = validationFactory.createValidator(booking);
            const validationResult = validator.validate(booking);
            if (!validationResult.isValid) {
                return `❌ Validation Error: ${validationResult.message}`;
            }
            const processorFactory = new ProcessFactory_1.ProcessFactory();
            const processor = processorFactory.createProcessor(booking);
            const success = processor.process(booking);
            return success
                ? `✅ ${type} processed successfully! ID: ${reservationNum}`
                : `⚠️ ${type} processing failed.`;
        }
        catch (error) {
            return `🚨 System Error: ${error.message}`;
        }
    }
}
exports.TravelFacade = TravelFacade;
//# sourceMappingURL=TravelFacade.js.map