/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

/**
 * The type of identifier
 */
export enum IdentifierUpdateType {
  IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
  OriginatingAccountId = "ORIGINATING_ACCOUNT_ID",
  OriginatingFdid = "ORIGINATING_FDID",
  OriginatingCatReporterCrd = "ORIGINATING_CAT_REPORTER_CRD",
  ClientAccountId = "CLIENT_ACCOUNT_ID",
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
export const IdentifierUpdateType$inboundSchema: z.ZodType<
  IdentifierUpdateTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(IdentifierUpdateType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const IdentifierUpdateType$outboundSchema: z.ZodType<
  IdentifierUpdateTypeOpen,
  z.ZodTypeDef,
  IdentifierUpdateTypeOpen
> = z.union([
  z.nativeEnum(IdentifierUpdateType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IdentifierUpdateType$ {
  /** @deprecated use `IdentifierUpdateType$inboundSchema` instead. */
  export const inboundSchema = IdentifierUpdateType$inboundSchema;
  /** @deprecated use `IdentifierUpdateType$outboundSchema` instead. */
  export const outboundSchema = IdentifierUpdateType$outboundSchema;
}

/** @internal */
export const IdentifierUpdate$inboundSchema: z.ZodType<
  IdentifierUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: IdentifierUpdateType$inboundSchema.optional(),
});

/** @internal */
export type IdentifierUpdate$Outbound = {
  type?: string | undefined;
};

/** @internal */
export const IdentifierUpdate$outboundSchema: z.ZodType<
  IdentifierUpdate$Outbound,
  z.ZodTypeDef,
  IdentifierUpdate
> = z.object({
  type: IdentifierUpdateType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IdentifierUpdate$ {
  /** @deprecated use `IdentifierUpdate$inboundSchema` instead. */
  export const inboundSchema = IdentifierUpdate$inboundSchema;
  /** @deprecated use `IdentifierUpdate$outboundSchema` instead. */
  export const outboundSchema = IdentifierUpdate$outboundSchema;
  /** @deprecated use `IdentifierUpdate$Outbound` instead. */
  export type Outbound = IdentifierUpdate$Outbound;
}
