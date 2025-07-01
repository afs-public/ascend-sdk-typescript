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
 * Reuse Bank Relationship
 *
 * @remarks
 * Reuses an existing bank relationship for a new account. The source bank relationship must be approved. The new account must be related to the parent account of the `source_bank_relationship`. The new relationship will be created with the `USE_EXISTING` verification method in place of the source bank relationship's verification method.
 */
export declare function bankRelationshipsReuseBankRelationship(client: ApexascendCore, reuseBankRelationshipRequestCreate: components.ReuseBankRelationshipRequestCreate, accountId: string, options?: RequestOptions): Promise<Result<operations.BankRelationshipsReuseBankRelationshipResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=bankRelationshipsReuseBankRelationship.d.ts.map