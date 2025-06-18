import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Legal Natural Persons
 *
 * @remarks
 * Gets a list of Legal Natural Person records based on search criteria.
 */
export declare function personManagementListLegalNaturalPersons(client: ApexascendCore, pageSize?: number | undefined, pageToken?: string | undefined, orderBy?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<Result<operations.AccountsListLegalNaturalPersonsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=personManagementListLegalNaturalPersons.d.ts.map