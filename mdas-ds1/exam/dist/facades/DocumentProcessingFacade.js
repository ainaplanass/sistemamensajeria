"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentProcessingFacade = void 0;
const DocumentFactory_1 = require("../factories/DocumentFactory");
const ValidatorFactory_1 = require("../factories/ValidatorFactory");
const DocumentProcessorFactory_1 = require("../factories/DocumentProcessorFactory");
class DocumentProcessingFacade {
    processDocument(filename, documentType, metadata) {
        let documentFactory = new DocumentFactory_1.DocumentFactory;
        let document = documentFactory.createDocument(filename, documentType, metadata);
        let validatorFactory = new ValidatorFactory_1.ValidatorFactory;
        let validatorFacory = validatorFactory.createValidator(document);
        let isValidDocument = validatorFacory.isValid(document);
        if (!isValidDocument) {
            console.log(" invalid document ");
            return false;
        }
        let documentProcessorFactory = new DocumentProcessorFactory_1.DocumentProcessorFactory();
        let processDocument = documentProcessorFactory.createDocumentProcessor(document);
        let documentProccessed = processDocument.process(document);
        if (isValidDocument && documentProccessed.getIsProcessed()) {
            console.log(" MUY BIEN ");
            return true;
        }
        return true;
    }
}
exports.DocumentProcessingFacade = DocumentProcessingFacade;
//# sourceMappingURL=DocumentProcessingFacade.js.map