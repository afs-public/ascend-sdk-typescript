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
 * Force Approve ICT Withdrawal
 *
 * @remarks
 * Forces an approval on an existing ICT withdrawal pending review - FOR TESTING
 */
export declare function testSimulationForceApproveIctWithdrawal(client: ApexascendCore, forceApproveIctWithdrawalRequestCreate: components.ForceApproveIctWithdrawalRequestCreate, accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.IctWithdrawalsForceApproveIctWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceApproveIctWithdrawal.d.ts.map