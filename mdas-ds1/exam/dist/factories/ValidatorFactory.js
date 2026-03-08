"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorFactory = void 0;
const Document_1 = require("../models/Document");
const ContractValidator_1 = require("../validators/ContractValidator");
const FinancialReportValidator_1 = require("../validators/FinancialReportValidator");
const ProposalValidator_1 = require("../validators/ProposalValidator");
class ValidatorFactory {
    createValidator(document) {
        let documentType = document.getDocumentType();
        switch (documentType) {
            case (Document_1.DocumentType.Contract):
                return new ContractValidator_1.ContractValidator();
            case (Document_1.DocumentType.FinancialReport):
                return new FinancialReportValidator_1.FinancialReportValidator();
            case (Document_1.DocumentType.Proposal):
                return new ProposalValidator_1.ProposalValidator();
        }
    }
}
exports.ValidatorFactory = ValidatorFactory;
//# sourceMappingURL=ValidatorFactory.js.map