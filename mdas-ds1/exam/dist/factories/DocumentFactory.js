"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentFactory = void 0;
const Contract_1 = require("../models/Contract");
const Document_1 = require("../models/Document");
const FinancialReport_1 = require("../models/FinancialReport");
const Proposal_1 = require("../models/Proposal");
class DocumentFactory {
    createDocument(filename, documentType, metadata) {
        var _a, _b, _c, _d, _e, _f;
        switch (documentType) {
            case (Document_1.DocumentType.Contract):
                const contractMetadata = {
                    author: (_a = metadata === null || metadata === void 0 ? void 0 : metadata.author) !== null && _a !== void 0 ? _a : ' ',
                    version: (_b = metadata === null || metadata === void 0 ? void 0 : metadata.version) !== null && _b !== void 0 ? _b : ' '
                };
                return new Contract_1.Contract(filename, documentType, contractMetadata);
            case (Document_1.DocumentType.FinancialReport):
                const financialReportMetadata = {
                    fiscalYear: (_c = metadata === null || metadata === void 0 ? void 0 : metadata.fiscalYear) !== null && _c !== void 0 ? _c : ' ',
                    department: (_d = metadata === null || metadata === void 0 ? void 0 : metadata.department) !== null && _d !== void 0 ? _d : ' '
                };
                return new FinancialReport_1.FinancialReport(filename, documentType, financialReportMetadata);
            case (Document_1.DocumentType.Proposal):
                const proposalMetadata = {
                    proposalDate: (_e = metadata === null || metadata === void 0 ? void 0 : metadata.proposalDate) !== null && _e !== void 0 ? _e : ' ',
                    client: (_f = metadata === null || metadata === void 0 ? void 0 : metadata.client) !== null && _f !== void 0 ? _f : ' '
                };
                return new Proposal_1.Proposal(filename, documentType, proposalMetadata);
        }
    }
}
exports.DocumentFactory = DocumentFactory;
//# sourceMappingURL=DocumentFactory.js.map