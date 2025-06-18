import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Identity Verification
 *
 * @remarks
 * Gets a CustomerIdentification by CustomerIdentification ID.
 */
export declare function investigationsGetCustomerIdentification(client: ApexascendCore, correspondentId: string, customerIdentificationId: string, view?: operations.CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView | undefined, options?: RequestOptions): Promise<Result<operations.CustomerIdentificationResultServiceGetCustomerIdentificationResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=investigationsGetCustomerIdentification.d.ts.map