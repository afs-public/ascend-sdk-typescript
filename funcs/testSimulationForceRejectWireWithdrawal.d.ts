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
 * Force Reject Wire Withdrawal
 *
 * @remarks
 * Forces a rejection on an existing wire withdrawal pending review - FOR TESTING
 */
export declare function testSimulationForceRejectWireWithdrawal(client: ApexascendCore, forceRejectWireWithdrawalRequestCreate: components.ForceRejectWireWithdrawalRequestCreate, accountId: string, wireWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.WireWithdrawalsForceRejectWireWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceRejectWireWithdrawal.d.ts.map