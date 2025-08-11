import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Get Relationship Micro Deposit Verification
 *
 * @remarks
 * Gets micro deposit amounts for bank relationships with the `MICRO_DEPOSIT` verification method. FOR TESTING ONLY!
 */
export declare function testSimulationGetMicroDepositAmounts(client: ApexascendCore, accountId: string, bankRelationshipId: string, options?: RequestOptions): APIPromise<Result<operations.BankRelationshipsGetMicroDepositAmountsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=testSimulationGetMicroDepositAmounts.d.ts.map