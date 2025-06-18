import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Preview Order Cost
 *
 * @remarks
 * Returns a calculation estimating the costs involved in ordering a given quantity of a Fixed Income asset at a specified limit price.
 */
export declare function fixedIncomePricingPreviewOrderCost(client: ApexascendCore, orderCostPreviewRequestCreate: components.OrderCostPreviewRequestCreate, accountId: string, options?: RequestOptions): Promise<Result<operations.OrderPriceServicePreviewOrderCostResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fixedIncomePricingPreviewOrderCost.d.ts.map