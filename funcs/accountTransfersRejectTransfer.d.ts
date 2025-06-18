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
 * Reject Transfer
 *
 * @remarks
 * Reject one side (incoming/outgoing) of an internal Ascend transfer. Rejecting one side automatically moves the contra side of the transfer to be rejected as well.
 */
export declare function accountTransfersRejectTransfer(client: ApexascendCore, rejectTransferRequestCreate: components.RejectTransferRequestCreate, correspondentId: string, accountId: string, transferId: string, options?: RequestOptions): Promise<Result<operations.AccountTransfersRejectTransferResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountTransfersRejectTransfer.d.ts.map