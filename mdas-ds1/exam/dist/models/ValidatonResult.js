"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = void 0;
class ValidationResult {
    constructor(isValid, message = "") {
        this.isValid = isValid;
        this.message = message;
    }
    static success() {
        return new ValidationResult(true);
    }
    static fail(message) {
        return new ValidationResult(false, message);
    }
}
exports.ValidationResult = ValidationResult;
//# sourceMappingURL=ValidatonResult.js.map