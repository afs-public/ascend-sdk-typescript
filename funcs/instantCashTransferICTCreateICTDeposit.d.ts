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
 * Create ICT Deposit
 *
 * @remarks
 * Creates an ICT deposit
 */
export declare function instantCashTransferICTCreateICTDeposit(client: ApexascendCore, ictDepositCreate: components.IctDepositCreate, accountId: string, options?: RequestOptions): Promise<Result<operations.IctDepositsCreateIctDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=instantCashTransferICTCreateICTDeposit.d.ts.map