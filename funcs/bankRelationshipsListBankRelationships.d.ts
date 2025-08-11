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
 * List Bank Relationships
 *
 * @remarks
 * Lists bank relationships for an account.
 */
export declare function bankRelationshipsListBankRelationships(client: ApexascendCore, accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, state?: operations.State | undefined, options?: RequestOptions): APIPromise<Result<operations.BankRelationshipsListBankRelationshipsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bankRelationshipsListBankRelationships.d.ts.map