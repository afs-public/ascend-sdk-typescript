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
 * End Restriction
 *
 * @remarks
 * Ends a Restriction on an Account.
 */
export declare function accountManagementEndRestriction(client: ApexascendCore, endRestrictionRequestCreate: components.EndRestrictionRequestCreate, accountId: string, restrictionId: string, options?: RequestOptions): Promise<Result<operations.AccountsEndRestrictionResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementEndRestriction.d.ts.map