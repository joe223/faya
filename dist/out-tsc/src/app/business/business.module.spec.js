"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var business_module_1 = require("./business.module");
describe('BusinessModule', function () {
    var businessModule;
    beforeEach(function () {
        businessModule = new business_module_1.BusinessModule();
    });
    it('should create an instance', function () {
        expect(businessModule).toBeTruthy();
    });
});
//# sourceMappingURL=business.module.spec.js.map