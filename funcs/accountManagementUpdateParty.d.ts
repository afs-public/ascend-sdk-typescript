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
 * Update Party
 *
 * @remarks
 * Updates a Party.
 */
export declare function accountManagementUpdateParty(client: ApexascendCore, partyRequestUpdate: components.PartyRequestUpdate, accountId: string, partyId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<Result<operations.AccountsUpdatePartyResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementUpdateParty.d.ts.map