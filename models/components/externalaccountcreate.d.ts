import * as z from "zod";
/**
 * The external account information
 */
export type ExternalAccountCreate = {
    /**
     * The account identifier The account number for external communications
     */
    accountNumber: string;
    /**
     * The NSCC brokerage / clearing house identifier
     */
    participantNumber: string;
};
/** @internal */
export declare const ExternalAccountCreate$inboundSchema: z.ZodType<ExternalAccountCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalAccountCreate$Outbound = {
    account_number: string;
    participant_number: string;
};
/** @internal */
export declare const ExternalAccountCreate$outboundSchema: z.ZodType<ExternalAccountCreate$Outbound, z.ZodTypeDef, ExternalAccountCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalAccountCreate$ {
    /** @deprecated use `ExternalAccountCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalAccountCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalAccountCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalAccountCreate$Outbound, z.ZodTypeDef, ExternalAccountCreate>;
    /** @deprecated use `ExternalAccountCreate$Outbound` instead. */
    type Outbound = ExternalAccountCreate$Outbound;
}
//# sourceMappingURL=externalaccountcreate.d.ts.map