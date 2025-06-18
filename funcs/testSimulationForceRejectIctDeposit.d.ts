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
 * Force Reject ICT Deposit
 *
 * @remarks
 * Forces a rejection on an existing ICT deposit pending review - FOR TESTING
 */
export declare function testSimulationForceRejectIctDeposit(client: ApexascendCore, forceRejectIctDepositRequestCreate: components.ForceRejectIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): Promise<Result<operations.IctDepositsForceRejectIctDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceRejectIctDeposit.d.ts.map