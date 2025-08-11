import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Preview Order Cost
 *
 * @remarks
 * Returns a calculation estimating the costs involved in ordering a given quantity of a Fixed Income asset at a specified limit price.
 */
export declare function fixedIncomePricingPreviewOrderCost(client: ApexascendCore, orderCostPreviewRequestCreate: components.OrderCostPreviewRequestCreate, accountId: string, options?: RequestOptions): APIPromise<Result<operations.OrderPriceServicePreviewOrderCostResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=fixedIncomePricingPreviewOrderCost.d.ts.map