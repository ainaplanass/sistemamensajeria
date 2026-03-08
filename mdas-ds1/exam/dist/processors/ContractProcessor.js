"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractProcessor = void 0;
const ProcessResult_1 = require("../models/ProcessResult");
class ContractProcessor {
    process(document) {
        const messages = [];
        const extractedData = {};
        messages.push("Contrato procesado exitosamente");
        extractedData["documentType"] = "Contrato Legal";
        extractedData["fileName"] = document.getFilename();
        return new ProcessResult_1.ProcessResult(true, extractedData, messages);
    }
}
exports.ContractProcessor = ContractProcessor;
//# sourceMappingURL=ContractProcessor.js.map