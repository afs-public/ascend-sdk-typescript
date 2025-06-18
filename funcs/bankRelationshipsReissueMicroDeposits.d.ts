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
 * Reissue Micro Deposits
 *
 * @remarks
 * Reissues micro deposits after micro deposit verification has failed. The user should have received a message that new micro deposits should be reissued.
 */
export declare function bankRelationshipsReissueMicroDeposits(client: ApexascendCore, reissueMicroDepositsRequestCreate: components.ReissueMicroDepositsRequestCreate, accountId: string, bankRelationshipId: string, options?: RequestOptions): Promise<Result<operations.BankRelationshipsReissueMicroDepositsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankRelationshipsReissueMicroDeposits.d.ts.map