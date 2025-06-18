import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Legal Natural Persons
 *
 * @remarks
 * Get Legal Natural Person
 */
export declare function personManagementGetLegalNaturalPerson(client: ApexascendCore, legalNaturalPersonId: string, options?: RequestOptions): Promise<Result<operations.AccountsGetLegalNaturalPersonResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=personManagementGetLegalNaturalPerson.d.ts.map