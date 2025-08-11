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
 * NOC for a Deposit
 *
 * @remarks
 * Forces a Nacha notice of change (NOC) on a completed ACH deposit. FOR TESTING ONLY!
 */
export declare function testSimulationForceNocAchDeposit(client: ApexascendCore, forceNocAchDepositRequestCreate: components.ForceNocAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): APIPromise<Result<operations.AchDepositsForceNocAchDepositResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=testSimulationForceNocAchDeposit.d.ts.map