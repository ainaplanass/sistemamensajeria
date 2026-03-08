"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialReportValidator = void 0;
const DocumentValidator_1 = require("./DocumentValidator");
class FinancialReportValidator extends DocumentValidator_1.DocumentValidator {
    isValidDocument(document) {
        let metadata = document.getMetadata();
        if (!metadata.fiscalYear) {
            console.log('Missing fiscalYear');
            return false;
        }
        if (!metadata.department) {
            console.log('Missing department');
            return false;
        }
        return true;
    }
}
exports.FinancialReportValidator = FinancialReportValidator;
//# sourceMappingURL=FinancialReportValidator.js.map