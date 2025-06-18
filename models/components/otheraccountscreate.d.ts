import * as z from "zod";
/**
 * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
 */
export type OtherAccountsCreate = {
    /**
     * Other account names held at Apex
     */
    accountNames?: Array<string> | undefined;
    /**
     * Other account numbers held at Apex
     */
    accountNumbers?: Array<string> | undefined;
    /**
     * The owner has other accounts at Apex
     */
    ownerHasOtherAccountsAtApex: boolean;
};
/** @internal */
export declare const OtherAccountsCreate$inboundSchema: z.ZodType<OtherAccountsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type OtherAccountsCreate$Outbound = {
    account_names?: Array<string> | undefined;
    account_numbers?: Array<string> | undefined;
    owner_has_other_accounts_at_apex: boolean;
};
/** @internal */
export declare const OtherAccountsCreate$outboundSchema: z.ZodType<OtherAccountsCreate$Outbound, z.ZodTypeDef, OtherAccountsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OtherAccountsCreate$ {
    /** @deprecated use `OtherAccountsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OtherAccountsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OtherAccountsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OtherAccountsCreate$Outbound, z.ZodTypeDef, OtherAccountsCreate>;
    /** @deprecated use `OtherAccountsCreate$Outbound` instead. */
    type Outbound = OtherAccountsCreate$Outbound;
}
//# sourceMappingURL=otheraccountscreate.d.ts.map