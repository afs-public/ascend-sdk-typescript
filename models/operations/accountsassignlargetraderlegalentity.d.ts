import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsAssignLargeTraderLegalEntityRequest = {
    /**
     * The legalEntity id.
     */
    legalEntityId: string;
    assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate;
};
export type AccountsAssignLargeTraderLegalEntityResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    largeTrader?: components.LargeTrader | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityRequest$inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAssignLargeTraderLegalEntityRequest$Outbound = {
    legalEntity_id: string;
    AssignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityRequest$outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAssignLargeTraderLegalEntityRequest$ {
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityRequest>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$Outbound` instead. */
    type Outbound = AccountsAssignLargeTraderLegalEntityRequest$Outbound;
}
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityResponse$inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAssignLargeTraderLegalEntityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LargeTrader?: components.LargeTrader$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityResponse$outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAssignLargeTraderLegalEntityResponse$ {
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityResponse>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$Outbound` instead. */
    type Outbound = AccountsAssignLargeTraderLegalEntityResponse$Outbound;
}
//# sourceMappingURL=accountsassignlargetraderlegalentity.d.ts.map