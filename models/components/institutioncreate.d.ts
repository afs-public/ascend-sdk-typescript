import * as z from "zod";
/**
 * Institution representing originator or recipient of funds from an Instant Cash Transfer
 */
export type InstitutionCreate = {
    /**
     * Account id at institution
     */
    accountId: string;
    /**
     * Name of the institution
     */
    title: string;
};
/** @internal */
export declare const InstitutionCreate$inboundSchema: z.ZodType<InstitutionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type InstitutionCreate$Outbound = {
    account_id: string;
    title: string;
};
/** @internal */
export declare const InstitutionCreate$outboundSchema: z.ZodType<InstitutionCreate$Outbound, z.ZodTypeDef, InstitutionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InstitutionCreate$ {
    /** @deprecated use `InstitutionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InstitutionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InstitutionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InstitutionCreate$Outbound, z.ZodTypeDef, InstitutionCreate>;
    /** @deprecated use `InstitutionCreate$Outbound` instead. */
    type Outbound = InstitutionCreate$Outbound;
}
//# sourceMappingURL=institutioncreate.d.ts.map