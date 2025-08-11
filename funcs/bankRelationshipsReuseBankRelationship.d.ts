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
 * Reuse Bank Relationship
 *
 * @remarks
 * Reuses an existing bank relationship for a new account. The source bank relationship must be approved. The new account must be related to the parent account of the `source_bank_relationship`. The new relationship will be created with the `USE_EXISTING` verification method in place of the source bank relationship's verification method.
 */
export declare function bankRelationshipsReuseBankRelationship(client: ApexascendCore, reuseBankRelationshipRequestCreate: components.ReuseBankRelationshipRequestCreate, accountId: string, options?: RequestOptions): APIPromise<Result<operations.BankRelationshipsReuseBankRelationshipResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=bankRelationshipsReuseBankRelationship.d.ts.map