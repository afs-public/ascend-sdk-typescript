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
 * Cancel Fee
 *
 * @remarks
 * Cancel an existing fee
 */
export declare function feesAndCreditsCancelFee(client: ApexascendCore, cancelFeeRequestCreate: components.CancelFeeRequestCreate, accountId: string, feeId: string, options?: RequestOptions): Promise<Result<operations.FeesCancelFeeResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=feesAndCreditsCancelFee.d.ts.map