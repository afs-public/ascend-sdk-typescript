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
 * Link Documents
 *
 * @remarks
 * Use this endpoint to update identity verification document IDs.
 */
export declare function investigationsLinkDocuments(client: ApexascendCore, linkDocumentsRequestCreate: components.LinkDocumentsRequestCreate, investigationId: string, options?: RequestOptions): Promise<Result<operations.InvestigationServiceLinkDocumentsResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=investigationsLinkDocuments.d.ts.map