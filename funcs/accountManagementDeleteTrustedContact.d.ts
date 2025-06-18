import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Delete Trusted Contact
 *
 * @remarks
 * DELETE Deletes a Trusted Contact for an Account.
 */
export declare function accountManagementDeleteTrustedContact(client: ApexascendCore, accountId: string, trustedContactId: string, options?: RequestOptions): Promise<Result<operations.AccountsDeleteTrustedContactResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementDeleteTrustedContact.d.ts.map