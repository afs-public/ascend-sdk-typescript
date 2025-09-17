import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
import { PageIterator } from "../types/operations.js";
/**
 * List Legal Entity
 *
 * @remarks
 * Gets a list of Legal Entity records based on search criteria.
 */
export declare function personManagementListLegalEntities(client: ApexascendCore, pageSize?: number | undefined, pageToken?: string | undefined, orderBy?: string | undefined, filter?: string | undefined, options?: RequestOptions): APIPromise<PageIterator<Result<operations.AccountsListLegalEntitiesResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>, {
    cursor: string;
}>>;
//# sourceMappingURL=personManagementListLegalEntities.d.ts.map