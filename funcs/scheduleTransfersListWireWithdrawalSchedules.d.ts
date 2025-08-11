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
 * List Wire Withdrawal Schedules
 *
 * @remarks
 * Return a list of Wire withdrawal schedules for the specified account and filter params
 */
export declare function scheduleTransfersListWireWithdrawalSchedules(client: ApexascendCore, accountId: string, filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): APIPromise<Result<operations.WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=scheduleTransfersListWireWithdrawalSchedules.d.ts.map