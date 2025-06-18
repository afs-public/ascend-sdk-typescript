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
 * Replace Party
 *
 * @remarks
 * Replaces a party on an account
 */
export declare function accountManagementReplaceParty(client: ApexascendCore, replacePartyRequestCreate: components.ReplacePartyRequestCreate, accountId: string, partyId: string, options?: RequestOptions): Promise<Result<operations.AccountsReplacePartyResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementReplaceParty.d.ts.map