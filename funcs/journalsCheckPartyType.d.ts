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
 * Retrieve Cash Journal Party
 *
 * @remarks
 * Determines whether a potential cash journal will be considered first party or third party given a source and destination account
 */
export declare function journalsCheckPartyType(client: ApexascendCore, request: components.CheckPartyTypeRequestCreate, options?: RequestOptions): Promise<Result<operations.CashJournalsCheckPartyTypeResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=journalsCheckPartyType.d.ts.map