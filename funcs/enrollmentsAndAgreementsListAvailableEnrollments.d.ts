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
/**
 * List Available Enrollments
 *
 * @remarks
 * Get a list of Enrollments available for an Account.
 */
export declare function enrollmentsAndAgreementsListAvailableEnrollments(client: ApexascendCore, accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): APIPromise<Result<operations.AccountsListAvailableEnrollmentsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=enrollmentsAndAgreementsListAvailableEnrollments.d.ts.map