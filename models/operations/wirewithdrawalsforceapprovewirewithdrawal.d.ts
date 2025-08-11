import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalsForceApproveWireWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawal id.
     */
    wireWithdrawalId: string;
    forceApproveWireWithdrawalRequestCreate: components.ForceApproveWireWithdrawalRequestCreate;
};
export type WireWithdrawalsForceApproveWireWithdrawalResponse = {
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
export declare const WireWithdrawalsForceApproveWireWithdrawalRequest$inboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsForceApproveWireWithdrawalRequest$Outbound = {
    account_id: string;
    wireWithdrawal_id: string;
    ForceApproveWireWithdrawalRequestCreate: components.ForceApproveWireWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalsForceApproveWireWithdrawalRequest$outboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsForceApproveWireWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsForceApproveWireWithdrawalRequest$ {
    /** @deprecated use `WireWithdrawalsForceApproveWireWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsForceApproveWireWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsForceApproveWireWithdrawalRequest>;
    /** @deprecated use `WireWithdrawalsForceApproveWireWithdrawalRequest$Outbound` instead. */
    type Outbound = WireWithdrawalsForceApproveWireWithdrawalRequest$Outbound;
}
export declare function wireWithdrawalsForceApproveWireWithdrawalRequestToJSON(wireWithdrawalsForceApproveWireWithdrawalRequest: WireWithdrawalsForceApproveWireWithdrawalRequest): string;
export declare function wireWithdrawalsForceApproveWireWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalsForceApproveWireWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalsForceApproveWireWithdrawalResponse$inboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsForceApproveWireWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawal?: components.WireWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalsForceApproveWireWithdrawalResponse$outboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsForceApproveWireWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsForceApproveWireWithdrawalResponse$ {
    /** @deprecated use `WireWithdrawalsForceApproveWireWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsForceApproveWireWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsForceApproveWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsForceApproveWireWithdrawalResponse>;
    /** @deprecated use `WireWithdrawalsForceApproveWireWithdrawalResponse$Outbound` instead. */
    type Outbound = WireWithdrawalsForceApproveWireWithdrawalResponse$Outbound;
}
export declare function wireWithdrawalsForceApproveWireWithdrawalResponseToJSON(wireWithdrawalsForceApproveWireWithdrawalResponse: WireWithdrawalsForceApproveWireWithdrawalResponse): string;
export declare function wireWithdrawalsForceApproveWireWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalsForceApproveWireWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalsforceapprovewirewithdrawal.d.ts.map