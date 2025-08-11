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
 * Reissue Micro Deposits
 *
 * @remarks
 * Reissues micro deposits after micro deposit verification has failed. The user should have received a message that new micro deposits should be reissued.
 */
export declare function bankRelationshipsReissueMicroDeposits(client: ApexascendCore, reissueMicroDepositsRequestCreate: components.ReissueMicroDepositsRequestCreate, accountId: string, bankRelationshipId: string, options?: RequestOptions): APIPromise<Result<operations.BankRelationshipsReissueMicroDepositsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bankRelationshipsReissueMicroDeposits.d.ts.map