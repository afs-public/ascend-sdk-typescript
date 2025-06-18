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
 * Batch Create Upload Links
 *
 * @remarks
 * Create a batch of signed links that can be used to upload files.
 */
export declare function investorDocsBatchCreateUploadLinks(client: ApexascendCore, request: components.BatchCreateUploadLinksRequestCreate, options?: RequestOptions): Promise<Result<operations.InvestorCommunicationServiceBatchCreateUploadLinksResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=investorDocsBatchCreateUploadLinks.d.ts.map