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
 * Force Approve ICT Deposit
 *
 * @remarks
 * Forces an approval on an existing ICT deposit pending review - FOR TESTING
 */
export declare function testSimulationForceApproveIctDeposit(client: ApexascendCore, forceApproveIctDepositRequestCreate: components.ForceApproveIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): APIPromise<Result<operations.IctDepositsForceApproveIctDepositResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=testSimulationForceApproveIctDeposit.d.ts.map