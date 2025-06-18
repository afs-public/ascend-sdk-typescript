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
 * End Large Trader
 *
 * @remarks
 * Removes a person's Large Trader ID.
 */
export declare function personManagementEndLargeTraderLegalNaturalPerson(client: ApexascendCore, endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate, legalNaturalPersonId: string, options?: RequestOptions): Promise<Result<operations.AccountsEndLargeTraderLegalNaturalPersonResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=personManagementEndLargeTraderLegalNaturalPerson.d.ts.map