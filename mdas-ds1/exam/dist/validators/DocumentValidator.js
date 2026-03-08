"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentValidator = void 0;
class DocumentValidator {
    isValid(document) {
        let isValidBase = this.isValidBase(document);
        let isValidDocument = this.isValidDocument(document);
        if (!isValidBase || !isValidDocument) {
            return false;
        }
        return true;
    }
    isValidBase(document) {
        let size = document.getFileSize();
        let ext = document.getFileExtension();
        let name = document.getFilename();
        return !!(size && ext && name);
    }
}
exports.DocumentValidator = DocumentValidator;
//# sourceMappingURL=DocumentValidator.js.map