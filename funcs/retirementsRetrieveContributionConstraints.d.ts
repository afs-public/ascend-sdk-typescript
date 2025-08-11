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
 * Retrieve Contribution Constraints
 *
 * @remarks
 * Retrieves retirement contribution constraints for an account
 */
export declare function retirementsRetrieveContributionConstraints(client: ApexascendCore, retrieveContributionConstraintsRequestCreate: components.RetrieveContributionConstraintsRequestCreate, accountId: string, options?: RequestOptions): APIPromise<Result<operations.RetirementConstraintsRetrieveContributionConstraintsResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=retirementsRetrieveContributionConstraints.d.ts.map