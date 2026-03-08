"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = exports.DocumentType = void 0;
var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Contract"] = 0] = "Contract";
    DocumentType[DocumentType["FinancialReport"] = 1] = "FinancialReport";
    DocumentType[DocumentType["Proposal"] = 2] = "Proposal";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
class Document {
    constructor(filename, documentType) {
        this.filename = filename;
        this.documentType = documentType;
    }
    getFilename() {
        return this.filename;
    }
    getDocumentType() {
        return this.documentType;
    }
    getFileExtension() {
        const name = this.getFilename();
        const lastDotIndex = name.lastIndexOf('.');
        if (lastDotIndex === -1)
            return "";
        return name.substring(lastDotIndex + 1);
    }
    getFileSize() {
        return 2;
    }
}
exports.Document = Document;
//# sourceMappingURL=Document.js.map