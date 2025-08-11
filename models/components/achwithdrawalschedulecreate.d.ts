import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RetirementDistributionCreate, RetirementDistributionCreate$Outbound } from "./retirementdistributioncreate.js";
import { WithdrawalScheduleDetailsCreate, WithdrawalScheduleDetailsCreate$Outbound } from "./withdrawalscheduledetailscreate.js";
/**
 * A withdrawal transfer schedule using the ACH mechanism
 */
export type AchWithdrawalScheduleCreate = {
    /**
     * The name of the bank relationship to be used in the ACH transaction
     */
    bankRelationship: string;
    /**
     * A distribution from a retirement account.
     */
    iraDistribution?: RetirementDistributionCreate | undefined;
    /**
     * Details of withdrawal schedule transfers
     */
    scheduleDetails: WithdrawalScheduleDetailsCreate;
};
/** @internal */
export declare const AchWithdrawalScheduleCreate$inboundSchema: z.ZodType<AchWithdrawalScheduleCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleCreate$Outbound = {
    bank_relationship: string;
    ira_distribution?: RetirementDistributionCreate$Outbound | undefined;
    schedule_details: WithdrawalScheduleDetailsCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalScheduleCreate$outboundSchema: z.ZodType<AchWithdrawalScheduleCreate$Outbound, z.ZodTypeDef, AchWithdrawalScheduleCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleCreate$ {
    /** @deprecated use `AchWithdrawalScheduleCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleCreate$Outbound, z.ZodTypeDef, AchWithdrawalScheduleCreate>;
    /** @deprecated use `AchWithdrawalScheduleCreate$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleCreate$Outbound;
}
export declare function achWithdrawalScheduleCreateToJSON(achWithdrawalScheduleCreate: AchWithdrawalScheduleCreate): string;
export declare function achWithdrawalScheduleCreateFromJSON(jsonString: string): SafeParseResult<AchWithdrawalScheduleCreate, SDKValidationError>;
//# sourceMappingURL=achwithdrawalschedulecreate.d.ts.map