import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The type of identifier
 */
export declare enum IdentifierUpdateType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    OriginatingAccountId = "ORIGINATING_ACCOUNT_ID",
    OriginatingFdid = "ORIGINATING_FDID",
    OriginatingCatReporterCrd = "ORIGINATING_CAT_REPORTER_CRD",
    ClientAccountId = "CLIENT_ACCOUNT_ID"
}
/**
 * The type of identifier
 */
export type IdentifierUpdateTypeOpen = OpenEnum<typeof IdentifierUpdateType>;
/**
 * An identifier associated with an account
 */
export type IdentifierUpdate = {
    /**
     * The type of identifier
     */
    type?: IdentifierUpdateTypeOpen | undefined;
};
/** @internal */
export declare const IdentifierUpdateType$inboundSchema: z.ZodType<IdentifierUpdateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentifierUpdateType$outboundSchema: z.ZodType<IdentifierUpdateTypeOpen, z.ZodTypeDef, IdentifierUpdateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentifierUpdateType$ {
    /** @deprecated use `IdentifierUpdateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentifierUpdateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentifierUpdateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentifierUpdateTypeOpen, z.ZodTypeDef, IdentifierUpdateTypeOpen>;
}
/** @internal */
export declare const IdentifierUpdate$inboundSchema: z.ZodType<IdentifierUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type IdentifierUpdate$Outbound = {
    type?: string | undefined;
};
/** @internal */
export declare const IdentifierUpdate$outboundSchema: z.ZodType<IdentifierUpdate$Outbound, z.ZodTypeDef, IdentifierUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentifierUpdate$ {
    /** @deprecated use `IdentifierUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentifierUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentifierUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentifierUpdate$Outbound, z.ZodTypeDef, IdentifierUpdate>;
    /** @deprecated use `IdentifierUpdate$Outbound` instead. */
    type Outbound = IdentifierUpdate$Outbound;
}
//# sourceMappingURL=identifierupdate.d.ts.map