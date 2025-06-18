import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DepositedFundsCreate, DepositedFundsCreate$Outbound } from "./depositedfundscreate.js";
import { FinancialProfileCreate, FinancialProfileCreate$Outbound } from "./financialprofilecreate.js";
import { PlannedActivityCreate, PlannedActivityCreate$Outbound } from "./plannedactivitycreate.js";
import { RelatedPepDetailsCreate, RelatedPepDetailsCreate$Outbound } from "./relatedpepdetailscreate.js";
/**
 * The client determined account risk rating of the entity customer
 */
export declare enum DeterminedAccountRiskRating {
    DeterminedAccountRiskRatingUnspecified = "DETERMINED_ACCOUNT_RISK_RATING_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * The client determined account risk rating of the entity customer
 */
export type DeterminedAccountRiskRatingOpen = OpenEnum<typeof DeterminedAccountRiskRating>;
/**
 * Enrollment metadata for Entity Accounts
 */
export type EddAccountEnrollmentMetadataCreate = {
    /**
     * The initial amount of money placed into the account by the entity upon or after the account's establishment.
     */
    depositedFunds: DepositedFundsCreate;
    /**
     * The client determined account risk rating of the entity customer
     */
    determinedAccountRiskRating: DeterminedAccountRiskRatingOpen;
    /**
     * Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
     */
    financialProfile: FinancialProfileCreate;
    /**
     * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
     */
    plannedActivity: PlannedActivityCreate;
    /**
     * Details surrounding the related politically exposed persons
     */
    relatedPepDetails: RelatedPepDetailsCreate;
    /**
     * The scope of the business for the entity customer
     */
    scopeOfBusiness: string;
};
/** @internal */
export declare const DeterminedAccountRiskRating$inboundSchema: z.ZodType<DeterminedAccountRiskRatingOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DeterminedAccountRiskRating$outboundSchema: z.ZodType<DeterminedAccountRiskRatingOpen, z.ZodTypeDef, DeterminedAccountRiskRatingOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeterminedAccountRiskRating$ {
    /** @deprecated use `DeterminedAccountRiskRating$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeterminedAccountRiskRatingOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeterminedAccountRiskRating$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeterminedAccountRiskRatingOpen, z.ZodTypeDef, DeterminedAccountRiskRatingOpen>;
}
/** @internal */
export declare const EddAccountEnrollmentMetadataCreate$inboundSchema: z.ZodType<EddAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EddAccountEnrollmentMetadataCreate$Outbound = {
    deposited_funds: DepositedFundsCreate$Outbound;
    determined_account_risk_rating: string;
    financial_profile: FinancialProfileCreate$Outbound;
    planned_activity: PlannedActivityCreate$Outbound;
    related_pep_details: RelatedPepDetailsCreate$Outbound;
    scope_of_business: string;
};
/** @internal */
export declare const EddAccountEnrollmentMetadataCreate$outboundSchema: z.ZodType<EddAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, EddAccountEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EddAccountEnrollmentMetadataCreate$ {
    /** @deprecated use `EddAccountEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EddAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EddAccountEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EddAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, EddAccountEnrollmentMetadataCreate>;
    /** @deprecated use `EddAccountEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = EddAccountEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=eddaccountenrollmentmetadatacreate.d.ts.map