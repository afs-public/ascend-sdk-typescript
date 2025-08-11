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
 * ACH Withdrawal Rejection
 *
 * @remarks
 * Forces rejection of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!
 */
export declare function testSimulationForceRejectAchWithdrawal(client: ApexascendCore, forceRejectAchWithdrawalRequestCreate: components.ForceRejectAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): APIPromise<Result<operations.AchWithdrawalsForceRejectAchWithdrawalResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=testSimulationForceRejectAchWithdrawal.d.ts.map