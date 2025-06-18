import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Delete Interested Party
 *
 * @remarks
 * Deletes an Interested Party associated from an Account.
 */
export declare function accountManagementDeleteInterestedParty(client: ApexascendCore, accountId: string, interestedPartyId: string, options?: RequestOptions): Promise<Result<operations.AccountsDeleteInterestedPartyResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementDeleteInterestedParty.d.ts.map