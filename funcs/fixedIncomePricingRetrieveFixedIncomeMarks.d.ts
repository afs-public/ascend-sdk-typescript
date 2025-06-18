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
 * Retrieve Fixed Income Marks
 *
 * @remarks
 * Returns marks for a specified set of Fixed Income assets (up to 100 per request)
 */
export declare function fixedIncomePricingRetrieveFixedIncomeMarks(client: ApexascendCore, retrieveFixedIncomeMarksRequestCreate: components.RetrieveFixedIncomeMarksRequestCreate, correspondentId: string, options?: RequestOptions): Promise<Result<operations.OrderPriceServiceRetrieveFixedIncomeMarksResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=fixedIncomePricingRetrieveFixedIncomeMarks.d.ts.map