"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentProcessorFactory = void 0;
const Document_1 = require("../models/Document");
const ContractProcessor_1 = require("../processors/ContractProcessor");
const FinancialReportProcessor_1 = require("../processors/FinancialReportProcessor");
const ProposalProcessor_1 = require("../processors/ProposalProcessor");
class DocumentProcessorFactory {
    createDocumentProcessor(document) {
        let documentType = document.getDocumentType();
        switch (documentType) {
            case (Document_1.DocumentType.Contract):
                return new ContractProcessor_1.ContractProcessor();
            case (Document_1.DocumentType.FinancialReport):
                return new FinancialReportProcessor_1.FinancialReportProcessor();
            case (Document_1.DocumentType.Proposal):
                return new ProposalProcessor_1.ProposalProcessor();
        }
    }
}
exports.DocumentProcessorFactory = DocumentProcessorFactory;
//# sourceMappingURL=DocumentProcessorFactory.js.map