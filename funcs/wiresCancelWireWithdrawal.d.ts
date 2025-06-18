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
 * Cancel Wire Withdrawal
 *
 * @remarks
 * Cancels an existing wire withdrawal
 */
export declare function wiresCancelWireWithdrawal(client: ApexascendCore, cancelWireWithdrawalRequestCreate: components.CancelWireWithdrawalRequestCreate, accountId: string, wireWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.WireWithdrawalsCancelWireWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=wiresCancelWireWithdrawal.d.ts.map