import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The type of identifier
 */
export declare enum IdentifierType1 {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    OriginatingAccountId = "ORIGINATING_ACCOUNT_ID",
    OriginatingFdid = "ORIGINATING_FDID",
    OriginatingCatReporterCrd = "ORIGINATING_CAT_REPORTER_CRD",
    ClientAccountId = "CLIENT_ACCOUNT_ID"
}
/**
 * The type of identifier
 */
export type IdentifierType1Open = OpenEnum<typeof IdentifierType1>;
/**
 * An identifier associated with an account
 */
export type Identifier = {
    /**
     * The type of identifier
     */
    type?: IdentifierType1Open | undefined;
    /**
     * The value of the identifier
     */
    value?: string | undefined;
};
/** @internal */
export declare const IdentifierType1$inboundSchema: z.ZodType<IdentifierType1Open, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentifierType1$outboundSchema: z.ZodType<IdentifierType1Open, z.ZodTypeDef, IdentifierType1Open>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentifierType1$ {
    /** @deprecated use `IdentifierType1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentifierType1Open, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentifierType1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentifierType1Open, z.ZodTypeDef, IdentifierType1Open>;
}
/** @internal */
export declare const Identifier$inboundSchema: z.ZodType<Identifier, z.ZodTypeDef, unknown>;
/** @internal */
export type Identifier$Outbound = {
    type?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const Identifier$outboundSchema: z.ZodType<Identifier$Outbound, z.ZodTypeDef, Identifier>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Identifier$ {
    /** @deprecated use `Identifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Identifier, z.ZodTypeDef, unknown>;
    /** @deprecated use `Identifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Identifier$Outbound, z.ZodTypeDef, Identifier>;
    /** @deprecated use `Identifier$Outbound` instead. */
    type Outbound = Identifier$Outbound;
}
//# sourceMappingURL=identifier.d.ts.map