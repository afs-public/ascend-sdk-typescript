import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalsCancelWireWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawal id.
     */
    wireWithdrawalId: string;
    cancelWireWithdrawalRequestCreate: components.CancelWireWithdrawalRequestCreate;
};
export type WireWithdrawalsCancelWireWithdrawalResponse = {
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
export declare const WireWithdrawalsCancelWireWithdrawalRequest$inboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsCancelWireWithdrawalRequest$Outbound = {
    account_id: string;
    wireWithdrawal_id: string;
    CancelWireWithdrawalRequestCreate: components.CancelWireWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalsCancelWireWithdrawalRequest$outboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsCancelWireWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsCancelWireWithdrawalRequest$ {
    /** @deprecated use `WireWithdrawalsCancelWireWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsCancelWireWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsCancelWireWithdrawalRequest>;
    /** @deprecated use `WireWithdrawalsCancelWireWithdrawalRequest$Outbound` instead. */
    type Outbound = WireWithdrawalsCancelWireWithdrawalRequest$Outbound;
}
export declare function wireWithdrawalsCancelWireWithdrawalRequestToJSON(wireWithdrawalsCancelWireWithdrawalRequest: WireWithdrawalsCancelWireWithdrawalRequest): string;
export declare function wireWithdrawalsCancelWireWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalsCancelWireWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalsCancelWireWithdrawalResponse$inboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsCancelWireWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawal?: components.WireWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalsCancelWireWithdrawalResponse$outboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsCancelWireWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsCancelWireWithdrawalResponse$ {
    /** @deprecated use `WireWithdrawalsCancelWireWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsCancelWireWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsCancelWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsCancelWireWithdrawalResponse>;
    /** @deprecated use `WireWithdrawalsCancelWireWithdrawalResponse$Outbound` instead. */
    type Outbound = WireWithdrawalsCancelWireWithdrawalResponse$Outbound;
}
export declare function wireWithdrawalsCancelWireWithdrawalResponseToJSON(wireWithdrawalsCancelWireWithdrawalResponse: WireWithdrawalsCancelWireWithdrawalResponse): string;
export declare function wireWithdrawalsCancelWireWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalsCancelWireWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalscancelwirewithdrawal.d.ts.map