"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalValidator = void 0;
const DocumentValidator_1 = require("./DocumentValidator");
class ProposalValidator extends DocumentValidator_1.DocumentValidator {
    isValidDocument(document) {
        let metadata = document.getMetadata();
        if (!metadata.client) {
            console.log('Missing client');
            return false;
        }
        if (!metadata.proposalDate) {
            console.log('Missing proposal Date');
            return false;
        }
        return true;
    }
}
exports.ProposalValidator = ProposalValidator;
//# sourceMappingURL=ProposalValidator.js.map