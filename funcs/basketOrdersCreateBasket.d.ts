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
 * Create Basket
 *
 * @remarks
 * Creates an empty basket
 *
 *  Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly created basket.
 */
export declare function basketOrdersCreateBasket(client: ApexascendCore, basketCreate: components.BasketCreate, correspondentId: string, options?: RequestOptions): APIPromise<Result<operations.BasketOrdersServiceCreateBasketResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=basketOrdersCreateBasket.d.ts.map