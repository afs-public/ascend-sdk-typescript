import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ForeignBondTradingDetailsCreate, ForeignBondTradingDetailsCreate$Outbound } from "./foreignbondtradingdetailscreate.js";
import { LowPricedSecuritiesCreate, LowPricedSecuritiesCreate$Outbound } from "./lowpricedsecuritiescreate.js";
/**
 * The primary account activity type
 */
export declare enum PrimaryAccountActivityType {
    PrimaryAccountActivityTypeUnspecified = "PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED",
    ActiveTrading = "ACTIVE_TRADING",
    ShortTermInvesting = "SHORT_TERM_INVESTING",
    LongTermInvesting = "LONG_TERM_INVESTING"
}
/**
 * The primary account activity type
 */
export type PrimaryAccountActivityTypeOpen = OpenEnum<typeof PrimaryAccountActivityType>;
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export declare enum WithdrawalFrequency {
    WithdrawalFrequencyUnspecified = "WITHDRAWAL_FREQUENCY_UNSPECIFIED",
    Frequent = "FREQUENT",
    Occasional = "OCCASIONAL",
    Rare = "RARE"
}
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export type WithdrawalFrequencyOpen = OpenEnum<typeof WithdrawalFrequency>;
/**
 * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
 */
export type PlannedActivityCreate = {
    /**
     * Foreign bond trading detail
     */
    foreignBondTradingDetails: ForeignBondTradingDetailsCreate;
    /**
     * Low priced securities
     */
    lowPricedSecurities: LowPricedSecuritiesCreate;
    /**
     * The primary account activity type
     */
    primaryAccountActivityType: PrimaryAccountActivityTypeOpen;
    /**
     * The frequency by which cash is anticipated to be withdrawn from the account
     */
    withdrawalFrequency: WithdrawalFrequencyOpen;
};
/** @internal */
export declare const PrimaryAccountActivityType$inboundSchema: z.ZodType<PrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PrimaryAccountActivityType$outboundSchema: z.ZodType<PrimaryAccountActivityTypeOpen, z.ZodTypeDef, PrimaryAccountActivityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PrimaryAccountActivityType$ {
    /** @deprecated use `PrimaryAccountActivityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PrimaryAccountActivityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PrimaryAccountActivityTypeOpen, z.ZodTypeDef, PrimaryAccountActivityTypeOpen>;
}
/** @internal */
export declare const WithdrawalFrequency$inboundSchema: z.ZodType<WithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WithdrawalFrequency$outboundSchema: z.ZodType<WithdrawalFrequencyOpen, z.ZodTypeDef, WithdrawalFrequencyOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithdrawalFrequency$ {
    /** @deprecated use `WithdrawalFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithdrawalFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithdrawalFrequencyOpen, z.ZodTypeDef, WithdrawalFrequencyOpen>;
}
/** @internal */
export declare const PlannedActivityCreate$inboundSchema: z.ZodType<PlannedActivityCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type PlannedActivityCreate$Outbound = {
    foreign_bond_trading_details: ForeignBondTradingDetailsCreate$Outbound;
    low_priced_securities: LowPricedSecuritiesCreate$Outbound;
    primary_account_activity_type: string;
    withdrawal_frequency: string;
};
/** @internal */
export declare const PlannedActivityCreate$outboundSchema: z.ZodType<PlannedActivityCreate$Outbound, z.ZodTypeDef, PlannedActivityCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PlannedActivityCreate$ {
    /** @deprecated use `PlannedActivityCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PlannedActivityCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PlannedActivityCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PlannedActivityCreate$Outbound, z.ZodTypeDef, PlannedActivityCreate>;
    /** @deprecated use `PlannedActivityCreate$Outbound` instead. */
    type Outbound = PlannedActivityCreate$Outbound;
}
export declare function plannedActivityCreateToJSON(plannedActivityCreate: PlannedActivityCreate): string;
export declare function plannedActivityCreateFromJSON(jsonString: string): SafeParseResult<PlannedActivityCreate, SDKValidationError>;
//# sourceMappingURL=plannedactivitycreate.d.ts.map