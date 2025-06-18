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
 * ACH Deposit Return
 *
 * @remarks
 * Forces a Nacha return on a completed ACH deposit. FOR TESTING ONLY!
 */
export declare function testSimulationForceReturnAchDeposit(client: ApexascendCore, forceReturnAchDepositRequestCreate: components.ForceReturnAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<Result<operations.AchDepositsForceReturnAchDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceReturnAchDeposit.d.ts.map