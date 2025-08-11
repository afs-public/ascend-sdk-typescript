import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RetirementDistributionCreate, RetirementDistributionCreate$Outbound } from "./retirementdistributioncreate.js";
import { WireWithdrawalBeneficiaryCreate, WireWithdrawalBeneficiaryCreate$Outbound } from "./wirewithdrawalbeneficiarycreate.js";
import { WireWithdrawalIntermediaryCreate, WireWithdrawalIntermediaryCreate$Outbound } from "./wirewithdrawalintermediarycreate.js";
import { WireWithdrawalRecipientBankCreate, WireWithdrawalRecipientBankCreate$Outbound } from "./wirewithdrawalrecipientbankcreate.js";
import { WithdrawalScheduleDetailsCreate, WithdrawalScheduleDetailsCreate$Outbound } from "./withdrawalscheduledetailscreate.js";
/**
 * A withdrawal transfer schedule using the Wire mechanism
 */
export type WireWithdrawalScheduleCreate = {
    /**
     * The person or entity taking receipt of the wired funds
     */
    beneficiary: WireWithdrawalBeneficiaryCreate;
    /**
     * An intermediary party
     */
    intermediary?: WireWithdrawalIntermediaryCreate | undefined;
    /**
     * A recipient bank / financial institution
     */
    recipientBank: WireWithdrawalRecipientBankCreate;
    /**
     * A distribution from a retirement account.
     */
    retirementDistribution?: RetirementDistributionCreate | undefined;
    /**
     * Details of withdrawal schedule transfers
     */
    scheduleDetails: WithdrawalScheduleDetailsCreate;
};
/** @internal */
export declare const WireWithdrawalScheduleCreate$inboundSchema: z.ZodType<WireWithdrawalScheduleCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleCreate$Outbound = {
    beneficiary: WireWithdrawalBeneficiaryCreate$Outbound;
    intermediary?: WireWithdrawalIntermediaryCreate$Outbound | undefined;
    recipient_bank: WireWithdrawalRecipientBankCreate$Outbound;
    retirement_distribution?: RetirementDistributionCreate$Outbound | undefined;
    schedule_details: WithdrawalScheduleDetailsCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalScheduleCreate$outboundSchema: z.ZodType<WireWithdrawalScheduleCreate$Outbound, z.ZodTypeDef, WireWithdrawalScheduleCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleCreate$ {
    /** @deprecated use `WireWithdrawalScheduleCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleCreate$Outbound, z.ZodTypeDef, WireWithdrawalScheduleCreate>;
    /** @deprecated use `WireWithdrawalScheduleCreate$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleCreate$Outbound;
}
export declare function wireWithdrawalScheduleCreateToJSON(wireWithdrawalScheduleCreate: WireWithdrawalScheduleCreate): string;
export declare function wireWithdrawalScheduleCreateFromJSON(jsonString: string): SafeParseResult<WireWithdrawalScheduleCreate, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalschedulecreate.d.ts.map