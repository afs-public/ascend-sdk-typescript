import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The type of identifier
 */
export declare enum IdentifierCreateType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    OriginatingAccountId = "ORIGINATING_ACCOUNT_ID",
    OriginatingFdid = "ORIGINATING_FDID",
    OriginatingCatReporterCrd = "ORIGINATING_CAT_REPORTER_CRD",
    ClientAccountId = "CLIENT_ACCOUNT_ID"
}
/**
 * The type of identifier
 */
export type IdentifierCreateTypeOpen = OpenEnum<typeof IdentifierCreateType>;
/**
 * An identifier associated with an account
 */
export type IdentifierCreate = {
    /**
     * The type of identifier
     */
    type: IdentifierCreateTypeOpen;
    /**
     * The value of the identifier
     */
    value: string;
};
/** @internal */
export declare const IdentifierCreateType$inboundSchema: z.ZodType<IdentifierCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentifierCreateType$outboundSchema: z.ZodType<IdentifierCreateTypeOpen, z.ZodTypeDef, IdentifierCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentifierCreateType$ {
    /** @deprecated use `IdentifierCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentifierCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentifierCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentifierCreateTypeOpen, z.ZodTypeDef, IdentifierCreateTypeOpen>;
}
/** @internal */
export declare const IdentifierCreate$inboundSchema: z.ZodType<IdentifierCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IdentifierCreate$Outbound = {
    type: string;
    value: string;
};
/** @internal */
export declare const IdentifierCreate$outboundSchema: z.ZodType<IdentifierCreate$Outbound, z.ZodTypeDef, IdentifierCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentifierCreate$ {
    /** @deprecated use `IdentifierCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentifierCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentifierCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentifierCreate$Outbound, z.ZodTypeDef, IdentifierCreate>;
    /** @deprecated use `IdentifierCreate$Outbound` instead. */
    type Outbound = IdentifierCreate$Outbound;
}
//# sourceMappingURL=identifiercreate.d.ts.map