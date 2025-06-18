import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class FixedIncomePricing extends ClientSDK {
    /**
     * Preview Order Cost
     *
     * @remarks
     * Returns a calculation estimating the costs involved in ordering a given quantity of a Fixed Income asset at a specified limit price.
     */
    previewOrderCost(orderCostPreviewRequestCreate: components.OrderCostPreviewRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.OrderPriceServicePreviewOrderCostResponse>;
    /**
     * Retrieve Quote
     *
     * @remarks
     * Returns quote information containing the best bid/ask for the given Fixed Income asset.
     */
    retrieveQuote(retrieveQuoteRequestCreate: components.RetrieveQuoteRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.OrderPriceServiceRetrieveQuoteResponse>;
    /**
     * Retrieve Fixed Income Marks
     *
     * @remarks
     * Returns marks for a specified set of Fixed Income assets (up to 100 per request)
     */
    retrieveFixedIncomeMarks(retrieveFixedIncomeMarksRequestCreate: components.RetrieveFixedIncomeMarksRequestCreate, correspondentId: string, options?: RequestOptions): Promise<operations.OrderPriceServiceRetrieveFixedIncomeMarksResponse>;
}
//# sourceMappingURL=fixedincomepricing.d.ts.map