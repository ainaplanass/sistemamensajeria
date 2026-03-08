"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractValidator = void 0;
const DocumentValidator_1 = require("./DocumentValidator");
class ContractValidator extends DocumentValidator_1.DocumentValidator {
    isValidDocument(document) {
        let metadata = document.getMetadata();
        if (!metadata.author) {
            console.log('Missing author');
            return false;
        }
        if (!metadata.version) {
            console.log('Missing version');
            return false;
        }
        return true;
    }
}
exports.ContractValidator = ContractValidator;
//# sourceMappingURL=ContractValidator.js.map