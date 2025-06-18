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
 * Create ACH Withdrawal Schedule
 *
 * @remarks
 * Creates an ACH withdrawal transfer schedule
 */
export declare function scheduleTransfersCreateAchWithdrawalSchedule(client: ApexascendCore, achWithdrawalScheduleCreate: components.AchWithdrawalScheduleCreate, accountId: string, options?: RequestOptions): Promise<Result<operations.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=scheduleTransfersCreateAchWithdrawalSchedule.d.ts.map