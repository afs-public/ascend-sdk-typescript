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
 * Retrieve Cash Journal Constraints
 *
 * @remarks
 * Retrieves retirement contribution and distribution constraints for a cash journal transfer
 */
export declare function journalsRetrieveCashJournalConstraints(client: ApexascendCore, request: components.RetrieveCashJournalConstraintsRequestCreate, options?: RequestOptions): APIPromise<Result<operations.RetirementConstraintsRetrieveCashJournalConstraintsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=journalsRetrieveCashJournalConstraints.d.ts.map