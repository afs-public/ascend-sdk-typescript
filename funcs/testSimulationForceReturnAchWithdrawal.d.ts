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
 * ACH Withdrawal Return
 *
 * @remarks
 * Forces a Nacha return on a completed ACH withdrawal. FOR TESTING ONLY!
 */
export declare function testSimulationForceReturnAchWithdrawal(client: ApexascendCore, forceReturnAchWithdrawalRequestCreate: components.ForceReturnAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.AchWithdrawalsForceReturnAchWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceReturnAchWithdrawal.d.ts.map