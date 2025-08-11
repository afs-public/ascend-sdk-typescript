import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Affirm Agreements
 *
 * @remarks
 * Affirm Agreements for an Account.
 */
export declare function enrollmentsAndAgreementsAffirmAgreements(client: ApexascendCore, affirmAgreementsRequestCreate: components.AffirmAgreementsRequestCreate, accountId: string, options?: RequestOptions): APIPromise<Result<operations.AccountsAffirmAgreementsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=enrollmentsAndAgreementsAffirmAgreements.d.ts.map