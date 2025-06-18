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
 * Update Interested Party
 *
 * @remarks
 * Updates an Interested Party.
 */
export declare function accountManagementUpdateInterestedParty(client: ApexascendCore, interestedPartyUpdate: components.InterestedPartyUpdate, accountId: string, interestedPartyId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<Result<operations.AccountsUpdateInterestedPartyResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementUpdateInterestedParty.d.ts.map