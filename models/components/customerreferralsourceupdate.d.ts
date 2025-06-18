import * as z from "zod";
/**
 * Customer Referral Source
 */
export type CustomerReferralSourceUpdate = {
    /**
     * The name of the referrer
     */
    name?: string | undefined;
    /**
     * The relationship of the referrer to the applicant
     */
    relationshipToApplicant?: string | undefined;
    /**
     * The years the referrer has known the applicant If the referrer has known the applicant for less than a year, they must specify 1
     */
    relationshipYearsWithApplicant?: number | undefined;
    /**
     * The years the referrer has known the broker If the referrer has known the broker for less than a year, they must specify 1
     */
    relationshipYearsWithBroker?: number | undefined;
};
/** @internal */
export declare const CustomerReferralSourceUpdate$inboundSchema: z.ZodType<CustomerReferralSourceUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerReferralSourceUpdate$Outbound = {
    name?: string | undefined;
    relationship_to_applicant?: string | undefined;
    relationship_years_with_applicant?: number | undefined;
    relationship_years_with_broker?: number | undefined;
};
/** @internal */
export declare const CustomerReferralSourceUpdate$outboundSchema: z.ZodType<CustomerReferralSourceUpdate$Outbound, z.ZodTypeDef, CustomerReferralSourceUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerReferralSourceUpdate$ {
    /** @deprecated use `CustomerReferralSourceUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerReferralSourceUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerReferralSourceUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerReferralSourceUpdate$Outbound, z.ZodTypeDef, CustomerReferralSourceUpdate>;
    /** @deprecated use `CustomerReferralSourceUpdate$Outbound` instead. */
    type Outbound = CustomerReferralSourceUpdate$Outbound;
}
//# sourceMappingURL=customerreferralsourceupdate.d.ts.map