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
 * Locate ICT Report
 *
 * @remarks
 * Returns a signed link pointing to a recon report file for a specific ICT batch.
 */
export declare function instantCashTransferICTLocateICTReport(client: ApexascendCore, request: operations.IctReconReportsLocateIctReportRequest, options?: RequestOptions): APIPromise<Result<operations.IctReconReportsLocateIctReportResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=instantCashTransferICTLocateICTReport.d.ts.map