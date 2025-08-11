import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsEndLargeTrader1Request = {
    /**
     * The legalEntity id.
     */
    legalEntityId: string;
    endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate;
};
export type AccountsEndLargeTrader1Response = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsEndLargeTrader1Request$inboundSchema: z.ZodType<AccountsEndLargeTrader1Request, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEndLargeTrader1Request$Outbound = {
    legalEntity_id: string;
    EndLargeTraderRequestCreate: components.EndLargeTraderRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsEndLargeTrader1Request$outboundSchema: z.ZodType<AccountsEndLargeTrader1Request$Outbound, z.ZodTypeDef, AccountsEndLargeTrader1Request>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEndLargeTrader1Request$ {
    /** @deprecated use `AccountsEndLargeTrader1Request$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEndLargeTrader1Request, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEndLargeTrader1Request$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEndLargeTrader1Request$Outbound, z.ZodTypeDef, AccountsEndLargeTrader1Request>;
    /** @deprecated use `AccountsEndLargeTrader1Request$Outbound` instead. */
    type Outbound = AccountsEndLargeTrader1Request$Outbound;
}
export declare function accountsEndLargeTrader1RequestToJSON(accountsEndLargeTrader1Request: AccountsEndLargeTrader1Request): string;
export declare function accountsEndLargeTrader1RequestFromJSON(jsonString: string): SafeParseResult<AccountsEndLargeTrader1Request, SDKValidationError>;
/** @internal */
export declare const AccountsEndLargeTrader1Response$inboundSchema: z.ZodType<AccountsEndLargeTrader1Response, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEndLargeTrader1Response$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsEndLargeTrader1Response$outboundSchema: z.ZodType<AccountsEndLargeTrader1Response$Outbound, z.ZodTypeDef, AccountsEndLargeTrader1Response>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEndLargeTrader1Response$ {
    /** @deprecated use `AccountsEndLargeTrader1Response$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEndLargeTrader1Response, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEndLargeTrader1Response$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEndLargeTrader1Response$Outbound, z.ZodTypeDef, AccountsEndLargeTrader1Response>;
    /** @deprecated use `AccountsEndLargeTrader1Response$Outbound` instead. */
    type Outbound = AccountsEndLargeTrader1Response$Outbound;
}
export declare function accountsEndLargeTrader1ResponseToJSON(accountsEndLargeTrader1Response: AccountsEndLargeTrader1Response): string;
export declare function accountsEndLargeTrader1ResponseFromJSON(jsonString: string): SafeParseResult<AccountsEndLargeTrader1Response, SDKValidationError>;
//# sourceMappingURL=accountsendlargetrader1.d.ts.map