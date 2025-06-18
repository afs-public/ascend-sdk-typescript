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
 * Update Investigation
 *
 * @remarks
 * Use this endpoint to update the details of an investigation by request reference UUID.
 */
export declare function investigationsUpdateInvestigation(client: ApexascendCore, investigationUpdate: components.InvestigationUpdate, investigationId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<Result<operations.InvestigationServiceUpdateInvestigationResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=investigationsUpdateInvestigation.d.ts.map