import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Bank Relationships
 *
 * @remarks
 * Lists bank relationships for an account.
 */
export declare function bankRelationshipsListBankRelationships(client: ApexascendCore, accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, state?: operations.State | undefined, options?: RequestOptions): Promise<Result<operations.BankRelationshipsListBankRelationshipsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankRelationshipsListBankRelationships.d.ts.map