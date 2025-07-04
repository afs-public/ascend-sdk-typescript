"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedIncomePricing = void 0;
const fixedIncomePricingPreviewOrderCost_js_1 = require("../funcs/fixedIncomePricingPreviewOrderCost.js");
const fixedIncomePricingRetrieveFixedIncomeMarks_js_1 = require("../funcs/fixedIncomePricingRetrieveFixedIncomeMarks.js");
const fixedIncomePricingRetrieveQuote_js_1 = require("../funcs/fixedIncomePricingRetrieveQuote.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class FixedIncomePricing extends sdks_js_1.ClientSDK {
    /**
     * Preview Order Cost
     *
     * @remarks
     * Returns a calculation estimating the costs involved in ordering a given quantity of a Fixed Income asset at a specified limit price.
     */
    async previewOrderCost(orderCostPreviewRequestCreate, accountId, options) {
        return (0, fp_js_1.unwrapAsync)((0, fixedIncomePricingPreviewOrderCost_js_1.fixedIncomePricingPreviewOrderCost)(this, orderCostPreviewRequestCreate, accountId, options));
    }
    /**
     * Retrieve Quote
     *
     * @remarks
     * Returns quote information containing the best bid/ask for the given Fixed Income asset.
     */
    async retrieveQuote(retrieveQuoteRequestCreate, accountId, options) {
        return (0, fp_js_1.unwrapAsync)((0, fixedIncomePricingRetrieveQuote_js_1.fixedIncomePricingRetrieveQuote)(this, retrieveQuoteRequestCreate, accountId, options));
    }
    /**
     * Retrieve Fixed Income Marks
     *
     * @remarks
     * Returns marks for a specified set of Fixed Income assets (up to 100 per request)
     */
    async retrieveFixedIncomeMarks(retrieveFixedIncomeMarksRequestCreate, correspondentId, options) {
        return (0, fp_js_1.unwrapAsync)((0, fixedIncomePricingRetrieveFixedIncomeMarks_js_1.fixedIncomePricingRetrieveFixedIncomeMarks)(this, retrieveFixedIncomeMarksRequestCreate, correspondentId, options));
    }
}
exports.FixedIncomePricing = FixedIncomePricing;
//# sourceMappingURL=fixedincomepricing.js.map