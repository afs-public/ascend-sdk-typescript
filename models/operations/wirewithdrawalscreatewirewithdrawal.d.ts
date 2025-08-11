import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalsCreateWireWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    wireWithdrawalCreate: components.WireWithdrawalCreate;
};
export type WireWithdrawalsCreateWireWithdrawalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    wireWithdrawal?: components.WireWithdrawal | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const WireWithdrawalsCreateWireWithdrawalRequest$inboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsCreateWireWithdrawalRequest$Outbound = {
    account_id: string;
    WireWithdrawalCreate: components.WireWithdrawalCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalsCreateWireWithdrawalRequest$outboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsCreateWireWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsCreateWireWithdrawalRequest$ {
    /** @deprecated use `WireWithdrawalsCreateWireWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsCreateWireWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsCreateWireWithdrawalRequest>;
    /** @deprecated use `WireWithdrawalsCreateWireWithdrawalRequest$Outbound` instead. */
    type Outbound = WireWithdrawalsCreateWireWithdrawalRequest$Outbound;
}
export declare function wireWithdrawalsCreateWireWithdrawalRequestToJSON(wireWithdrawalsCreateWireWithdrawalRequest: WireWithdrawalsCreateWireWithdrawalRequest): string;
export declare function wireWithdrawalsCreateWireWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalsCreateWireWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalsCreateWireWithdrawalResponse$inboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsCreateWireWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawal?: components.WireWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalsCreateWireWithdrawalResponse$outboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsCreateWireWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsCreateWireWithdrawalResponse$ {
    /** @deprecated use `WireWithdrawalsCreateWireWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsCreateWireWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsCreateWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsCreateWireWithdrawalResponse>;
    /** @deprecated use `WireWithdrawalsCreateWireWithdrawalResponse$Outbound` instead. */
    type Outbound = WireWithdrawalsCreateWireWithdrawalResponse$Outbound;
}
export declare function wireWithdrawalsCreateWireWithdrawalResponseToJSON(wireWithdrawalsCreateWireWithdrawalResponse: WireWithdrawalsCreateWireWithdrawalResponse): string;
export declare function wireWithdrawalsCreateWireWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalsCreateWireWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalscreatewirewithdrawal.d.ts.map