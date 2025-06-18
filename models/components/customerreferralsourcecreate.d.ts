import * as z from "zod";
/**
 * Customer Referral Source
 */
export type CustomerReferralSourceCreate = {
    /**
     * The name of the referrer
     */
    name: string;
    /**
     * The relationship of the referrer to the applicant
     */
    relationshipToApplicant: string;
    /**
     * The years the referrer has known the applicant If the referrer has known the applicant for less than a year, they must specify 1
     */
    relationshipYearsWithApplicant: number;
    /**
     * The years the referrer has known the broker If the referrer has known the broker for less than a year, they must specify 1
     */
    relationshipYearsWithBroker: number;
};
/** @internal */
export declare const CustomerReferralSourceCreate$inboundSchema: z.ZodType<CustomerReferralSourceCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerReferralSourceCreate$Outbound = {
    name: string;
    relationship_to_applicant: string;
    relationship_years_with_applicant: number;
    relationship_years_with_broker: number;
};
/** @internal */
export declare const CustomerReferralSourceCreate$outboundSchema: z.ZodType<CustomerReferralSourceCreate$Outbound, z.ZodTypeDef, CustomerReferralSourceCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerReferralSourceCreate$ {
    /** @deprecated use `CustomerReferralSourceCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerReferralSourceCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerReferralSourceCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerReferralSourceCreate$Outbound, z.ZodTypeDef, CustomerReferralSourceCreate>;
    /** @deprecated use `CustomerReferralSourceCreate$Outbound` instead. */
    type Outbound = CustomerReferralSourceCreate$Outbound;
}
//# sourceMappingURL=customerreferralsourcecreate.d.ts.map