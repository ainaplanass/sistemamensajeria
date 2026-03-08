"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessResult = void 0;
class ProcessResult {
    constructor(isValid, extractedData, messages) {
        this.isValid = isValid;
        this.extractedData = extractedData;
        this.messages = messages;
    }
    getIsProcessed() {
        return this.isValid;
    }
    getExtractedData() {
        return this.extractedData;
    }
    getMessages() {
        return this.messages;
    }
}
exports.ProcessResult = ProcessResult;
//# sourceMappingURL=ProcessResult.js.map