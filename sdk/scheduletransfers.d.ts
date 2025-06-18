import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class ScheduleTransfers extends ClientSDK {
    /**
     * List Schedule Summaries
     *
     * @remarks
     * Lists transfer schedule summaries that match the filter in the request
     */
    listScheduleSummaries(filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.TransferScheduleSummariesListScheduleSummariesResponse>;
    /**
     * Create ACH Deposit Schedule
     *
     * @remarks
     * Creates an ACH deposit transfer schedule
     */
    createAchDepositSchedule(achDepositScheduleCreate: components.AchDepositScheduleCreate, accountId: string, options?: RequestOptions): Promise<operations.AchDepositSchedulesCreateAchDepositScheduleResponse>;
    /**
     * List ACH Deposit Schedules
     *
     * @remarks
     * Return a list of ACH deposit schedules for the specified account and filter params
     */
    listAchDepositSchedules(accountId: string, filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.AchDepositSchedulesListAchDepositSchedulesResponse>;
    /**
     * Get ACH Deposit Schedule
     *
     * @remarks
     * Gets an ACH deposit transfer schedule
     */
    getAchDepositSchedule(accountId: string, achDepositScheduleId: string, options?: RequestOptions): Promise<operations.AchDepositSchedulesGetAchDepositScheduleResponse>;
    /**
     * Update ACH Deposit Schedules
     *
     * @remarks
     * Updates the amount of an ACH deposit transfer schedule
     */
    updateAchDepositSchedule(achDepositScheduleUpdate: components.AchDepositScheduleUpdate, accountId: string, achDepositScheduleId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AchDepositSchedulesUpdateAchDepositScheduleResponse>;
    /**
     * Cancel ACH Deposit Schedule
     *
     * @remarks
     * Cancels an ACH deposit transfer schedule
     */
    cancelAchDepositSchedule(cancelAchDepositScheduleRequestCreate: components.CancelAchDepositScheduleRequestCreate, accountId: string, achDepositScheduleId: string, options?: RequestOptions): Promise<operations.AchDepositSchedulesCancelAchDepositScheduleResponse>;
    /**
     * Create ACH Withdrawal Schedule
     *
     * @remarks
     * Creates an ACH withdrawal transfer schedule
     */
    createAchWithdrawalSchedule(achWithdrawalScheduleCreate: components.AchWithdrawalScheduleCreate, accountId: string, options?: RequestOptions): Promise<operations.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse>;
    /**
     * List ACH Withdrawal Schedules
     *
     * @remarks
     * Return a list of ACH withdrawal schedules for the specified account and filter params
     */
    listAchWithdrawalSchedules(accountId: string, filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse>;
    /**
     * Get ACH Withdrawal Schedule
     *
     * @remarks
     * Gets an ACH withdrawal transfer schedule
     */
    getAchWithdrawalSchedule(accountId: string, achWithdrawalScheduleId: string, options?: RequestOptions): Promise<operations.AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse>;
    /**
     * Update ACH Withdrawal Schedule
     *
     * @remarks
     * Updates the amount of an ACH withdrawal transfer schedule
     */
    updateAchWithdrawalSchedule(achWithdrawalScheduleUpdate: components.AchWithdrawalScheduleUpdate, accountId: string, achWithdrawalScheduleId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse>;
    /**
     * Cancel ACH Withdrawal Schedule
     *
     * @remarks
     * Cancels an ACH withdrawal transfer schedule
     */
    cancelAchWithdrawalSchedule(cancelAchWithdrawalScheduleRequestCreate: components.CancelAchWithdrawalScheduleRequestCreate, accountId: string, achWithdrawalScheduleId: string, options?: RequestOptions): Promise<operations.AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse>;
    /**
     * Create Wire Withdrawal Schedule
     *
     * @remarks
     * Creates a Wire withdrawal transfer schedule
     */
    createWireWithdrawalSchedule(wireWithdrawalScheduleCreate: components.WireWithdrawalScheduleCreate, accountId: string, options?: RequestOptions): Promise<operations.WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse>;
    /**
     * List Wire Withdrawal Schedules
     *
     * @remarks
     * Return a list of Wire withdrawal schedules for the specified account and filter params
     */
    listWireWithdrawalSchedules(accountId: string, filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse>;
    /**
     * Get Wire Withdrawal Schedule
     *
     * @remarks
     * Gets a Wire withdrawal transfer schedule
     */
    getWireWithdrawalSchedule(accountId: string, wireWithdrawalScheduleId: string, options?: RequestOptions): Promise<operations.WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse>;
    /**
     * Update Wire Withdrawal Schedule
     *
     * @remarks
     * Updates the amount of a Wire withdrawal transfer schedule
     */
    updateWireWithdrawalSchedule(wireWithdrawalScheduleUpdate: components.WireWithdrawalScheduleUpdate, accountId: string, wireWithdrawalScheduleId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse>;
    /**
     * Cancel Wire Withdrawal Schedule
     *
     * @remarks
     * Cancels a Wire withdrawal transfer schedule
     */
    cancelWireWithdrawalSchedule(cancelWireWithdrawalScheduleRequestCreate: components.CancelWireWithdrawalScheduleRequestCreate, accountId: string, wireWithdrawalScheduleId: string, options?: RequestOptions): Promise<operations.WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse>;
}
//# sourceMappingURL=scheduletransfers.d.ts.map