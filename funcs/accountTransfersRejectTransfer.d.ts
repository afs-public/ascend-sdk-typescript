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
 * Reject Transfer
 *
 * @remarks
 * Reject one side (incoming/outgoing) of an internal Ascend transfer. Rejecting one side automatically moves the contra side of the transfer to be rejected as well.
 */
export declare function accountTransfersRejectTransfer(client: ApexascendCore, rejectTransferRequestCreate: components.RejectTransferRequestCreate, correspondentId: string, accountId: string, transferId: string, options?: RequestOptions): APIPromise<Result<operations.AccountTransfersRejectTransferResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=accountTransfersRejectTransfer.d.ts.map