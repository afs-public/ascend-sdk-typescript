import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Account Enrollments
 *
 * @remarks
 * Gets a list of Enrollments for an Account.
 */
export declare function enrollmentsAndAgreementsListEnrollments(client: ApexascendCore, accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<Result<operations.AccountsListEnrollmentsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=enrollmentsAndAgreementsListEnrollments.d.ts.map