import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Accounts
 *
 * @remarks
 * Gets a list of Accounts based on search criteria.
 */
export declare function accountManagementListAccounts(client: ApexascendCore, request: operations.AccountsListAccountsRequest, options?: RequestOptions): Promise<Result<operations.AccountsListAccountsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=accountManagementListAccounts.d.ts.map