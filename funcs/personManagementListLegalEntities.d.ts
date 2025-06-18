import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Legal Entity
 *
 * @remarks
 * Gets a list of Legal Entity records based on search criteria.
 */
export declare function personManagementListLegalEntities(client: ApexascendCore, pageSize?: number | undefined, pageToken?: string | undefined, orderBy?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<Result<operations.AccountsListLegalEntitiesResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=personManagementListLegalEntities.d.ts.map