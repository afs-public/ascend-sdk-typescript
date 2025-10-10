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
 * Retrieve Quote
 *
 * @remarks
 * Returns quote information containing the best bid/ask for the given Fixed Income asset. For Fixed Income assets in the UAT environment, CUSIPS are subject to expiration. Therefore please refer to the [list available in the Market Simulator](https://developer.apexclearing.com/apex-fintech-solutions/docs/market-simulator#fixed-income-simulator-scenarios) for the most recent CUSIP list prior to testing.
 */
export declare function fixedIncomePricingRetrieveQuote(client: ApexascendCore, retrieveQuoteRequestCreate: components.RetrieveQuoteRequestCreate, accountId: string, options?: RequestOptions): APIPromise<Result<operations.OrderPriceServiceRetrieveQuoteResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=fixedIncomePricingRetrieveQuote.d.ts.map