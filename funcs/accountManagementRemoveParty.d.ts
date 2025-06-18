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
 * Remove Party
 *
 * @remarks
 * Remove a party from an account
 */
export declare function accountManagementRemoveParty(client: ApexascendCore, removePartyRequestCreate: components.RemovePartyRequestCreate, accountId: string, partyId: string, options?: RequestOptions): Promise<Result<operations.AccountsRemovePartyResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementRemoveParty.d.ts.map