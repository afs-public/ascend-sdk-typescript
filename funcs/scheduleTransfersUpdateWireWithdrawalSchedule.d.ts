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
 * Update Wire Withdrawal Schedule
 *
 * @remarks
 * Updates the amount of a Wire withdrawal transfer schedule
 */
export declare function scheduleTransfersUpdateWireWithdrawalSchedule(client: ApexascendCore, wireWithdrawalScheduleUpdate: components.WireWithdrawalScheduleUpdate, accountId: string, wireWithdrawalScheduleId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<Result<operations.WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=scheduleTransfersUpdateWireWithdrawalSchedule.d.ts.map