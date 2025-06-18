import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get ACH Deposit Schedule
 *
 * @remarks
 * Gets an ACH deposit transfer schedule
 */
export declare function scheduleTransfersGetAchDepositSchedule(client: ApexascendCore, accountId: string, achDepositScheduleId: string, options?: RequestOptions): Promise<Result<operations.AchDepositSchedulesGetAchDepositScheduleResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=scheduleTransfersGetAchDepositSchedule.d.ts.map