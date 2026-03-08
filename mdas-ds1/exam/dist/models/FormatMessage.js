"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatMessage = void 0;
class FormatMessage {
    constructor(messageStrategy) {
        this.messageStrategy = messageStrategy;
    }
    formatMessage(message) {
        console.log(" formateando el puto mensaje ");
        let formatMessage = this.messageStrategy.format(message);
        return formatMessage;
    }
}
exports.FormatMessage = FormatMessage;
//# sourceMappingURL=FormatMessage.js.map