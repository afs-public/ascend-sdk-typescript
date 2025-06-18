import * as z from "zod";
import { DepositedFundsCreate, DepositedFundsCreate$Outbound } from "./depositedfundscreate.js";
import { FinancialProfileCreate, FinancialProfileCreate$Outbound } from "./financialprofilecreate.js";
import { PlannedActivityCreate, PlannedActivityCreate$Outbound } from "./plannedactivitycreate.js";
import { RelatedPepDetailsCreate, RelatedPepDetailsCreate$Outbound } from "./relatedpepdetailscreate.js";
/**
 * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
 */
export type ForeignNaturalPersonAccountEnrollmentMetadataCreate = {
    /**
     * The initial amount of money placed into the account by the entity upon or after the account's establishment.
     */
    depositedFunds: DepositedFundsCreate;
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
};
/** @internal */
export declare const ForeignNaturalPersonAccountEnrollmentMetadataCreate$inboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound = {
    deposited_funds: DepositedFundsCreate$Outbound;
    financial_profile: FinancialProfileCreate$Outbound;
    planned_activity: PlannedActivityCreate$Outbound;
    related_pep_details: RelatedPepDetailsCreate$Outbound;
};
/** @internal */
export declare const ForeignNaturalPersonAccountEnrollmentMetadataCreate$outboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, ForeignNaturalPersonAccountEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignNaturalPersonAccountEnrollmentMetadataCreate$ {
    /** @deprecated use `ForeignNaturalPersonAccountEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignNaturalPersonAccountEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, ForeignNaturalPersonAccountEnrollmentMetadataCreate>;
    /** @deprecated use `ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=foreignnaturalpersonaccountenrollmentmetadatacreate.d.ts.map