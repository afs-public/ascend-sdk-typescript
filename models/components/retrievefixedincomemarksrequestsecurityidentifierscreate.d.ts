import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The identifier type of the asset being sought
 */
export declare enum RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType {
    AssetId = "ASSET_ID",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being sought
 */
export type RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen = OpenEnum<typeof RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType>;
/**
 * The identifier for the asset.
 */
export type RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate = {
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier: string;
    /**
     * The identifier type of the asset being sought
     */
    identifierType: RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen, z.ZodTypeDef, RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType$ {
    /** @deprecated use `RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen, z.ZodTypeDef, RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierTypeOpen>;
}
/** @internal */
export declare const RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound = {
    identifier: string;
    identifier_type: string;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$ {
    /** @deprecated use `RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate>;
    /** @deprecated use `RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound` instead. */
    type Outbound = RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound;
}
//# sourceMappingURL=retrievefixedincomemarksrequestsecurityidentifierscreate.d.ts.map