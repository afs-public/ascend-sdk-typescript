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
 * Retrieve Cash Journal Constraints
 *
 * @remarks
 * Retrieves retirement contribution and distribution constraints for a cash journal transfer
 */
export declare function journalsRetrieveCashJournalConstraints(client: ApexascendCore, request: components.RetrieveCashJournalConstraintsRequestCreate, options?: RequestOptions): Promise<Result<operations.RetirementConstraintsRetrieveCashJournalConstraintsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=journalsRetrieveCashJournalConstraints.d.ts.map