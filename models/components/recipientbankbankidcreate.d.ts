import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The type of bank identifier specified
 */
export declare enum RecipientBankBankIdCreateType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Aba = "ABA",
    Bic = "BIC"
}
/**
 * The type of bank identifier specified
 */
export type RecipientBankBankIdCreateTypeOpen = OpenEnum<typeof RecipientBankBankIdCreateType>;
/**
 * A bank identifier
 */
export type RecipientBankBankIdCreate = {
    /**
     * The bank identifier
     */
    id: string;
    /**
     * The type of bank identifier specified
     */
    type: RecipientBankBankIdCreateTypeOpen;
};
/** @internal */
export declare const RecipientBankBankIdCreateType$inboundSchema: z.ZodType<RecipientBankBankIdCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RecipientBankBankIdCreateType$outboundSchema: z.ZodType<RecipientBankBankIdCreateTypeOpen, z.ZodTypeDef, RecipientBankBankIdCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecipientBankBankIdCreateType$ {
    /** @deprecated use `RecipientBankBankIdCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecipientBankBankIdCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecipientBankBankIdCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecipientBankBankIdCreateTypeOpen, z.ZodTypeDef, RecipientBankBankIdCreateTypeOpen>;
}
/** @internal */
export declare const RecipientBankBankIdCreate$inboundSchema: z.ZodType<RecipientBankBankIdCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RecipientBankBankIdCreate$Outbound = {
    id: string;
    type: string;
};
/** @internal */
export declare const RecipientBankBankIdCreate$outboundSchema: z.ZodType<RecipientBankBankIdCreate$Outbound, z.ZodTypeDef, RecipientBankBankIdCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecipientBankBankIdCreate$ {
    /** @deprecated use `RecipientBankBankIdCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecipientBankBankIdCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecipientBankBankIdCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecipientBankBankIdCreate$Outbound, z.ZodTypeDef, RecipientBankBankIdCreate>;
    /** @deprecated use `RecipientBankBankIdCreate$Outbound` instead. */
    type Outbound = RecipientBankBankIdCreate$Outbound;
}
//# sourceMappingURL=recipientbankbankidcreate.d.ts.map