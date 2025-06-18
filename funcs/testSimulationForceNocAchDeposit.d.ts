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
 * NOC for a Deposit
 *
 * @remarks
 * Forces a Nacha notice of change (NOC) on a completed ACH deposit. FOR TESTING ONLY!
 */
export declare function testSimulationForceNocAchDeposit(client: ApexascendCore, forceNocAchDepositRequestCreate: components.ForceNocAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<Result<operations.AchDepositsForceNocAchDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=testSimulationForceNocAchDeposit.d.ts.map