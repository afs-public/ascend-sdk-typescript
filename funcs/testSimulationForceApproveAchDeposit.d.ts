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
 * ACH Deposit Approval
 *
 * @remarks
 * Forces approval of an existing ACH deposit that is pending review. FOR TESTING ONLY!
 */
export declare function testSimulationForceApproveAchDeposit(client: ApexascendCore, forceApproveAchDepositRequestCreate: components.ForceApproveAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<Result<operations.AchDepositsForceApproveAchDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceApproveAchDeposit.d.ts.map