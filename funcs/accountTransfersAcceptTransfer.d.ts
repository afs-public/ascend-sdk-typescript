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
 * Accept Transfer
 *
 * @remarks
 * Accept one side (incoming/outgoing) of an internal Ascend transfer. When both the incoming side and outgoing side of the transfer have been accepted then bookkeeping is done immediately. If neither, or only one side of a transfer is accepted, then both sides of the internal perform bookkeeping one full settlement day after they went into the bookkeeping queue.
 */
export declare function accountTransfersAcceptTransfer(client: ApexascendCore, acceptTransferRequestCreate: components.AcceptTransferRequestCreate, correspondentId: string, accountId: string, transferId: string, options?: RequestOptions): APIPromise<Result<operations.AccountTransfersAcceptTransferResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=accountTransfersAcceptTransfer.d.ts.map