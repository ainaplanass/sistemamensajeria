"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proposal = void 0;
const Document_1 = require("./Document");
class Proposal extends Document_1.Document {
    constructor(filename, documentType, metadata) {
        super(filename, documentType);
        this.metadata = metadata !== null && metadata !== void 0 ? metadata : null;
    }
    getMetadata() {
        var _a;
        return (_a = this.metadata) !== null && _a !== void 0 ? _a : null;
    }
}
exports.Proposal = Proposal;
//# sourceMappingURL=Proposal.js.map