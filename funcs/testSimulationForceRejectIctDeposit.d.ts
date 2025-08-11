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
 * Force Reject ICT Deposit
 *
 * @remarks
 * Forces a rejection on an existing ICT deposit pending review - FOR TESTING
 */
export declare function testSimulationForceRejectIctDeposit(client: ApexascendCore, forceRejectIctDepositRequestCreate: components.ForceRejectIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): APIPromise<Result<operations.IctDepositsForceRejectIctDepositResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=testSimulationForceRejectIctDeposit.d.ts.map