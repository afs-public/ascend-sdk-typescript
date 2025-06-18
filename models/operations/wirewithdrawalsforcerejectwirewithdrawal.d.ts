import * as z from "zod";
import * as components from "../components/index.js";
export type WireWithdrawalsForceRejectWireWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawal id.
     */
    wireWithdrawalId: string;
    forceRejectWireWithdrawalRequestCreate: components.ForceRejectWireWithdrawalRequestCreate;
};
export type WireWithdrawalsForceRejectWireWithdrawalResponse = {
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
export declare const WireWithdrawalsForceRejectWireWithdrawalRequest$inboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsForceRejectWireWithdrawalRequest$Outbound = {
    account_id: string;
    wireWithdrawal_id: string;
    ForceRejectWireWithdrawalRequestCreate: components.ForceRejectWireWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalsForceRejectWireWithdrawalRequest$outboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsForceRejectWireWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsForceRejectWireWithdrawalRequest$ {
    /** @deprecated use `WireWithdrawalsForceRejectWireWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsForceRejectWireWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsForceRejectWireWithdrawalRequest>;
    /** @deprecated use `WireWithdrawalsForceRejectWireWithdrawalRequest$Outbound` instead. */
    type Outbound = WireWithdrawalsForceRejectWireWithdrawalRequest$Outbound;
}
/** @internal */
export declare const WireWithdrawalsForceRejectWireWithdrawalResponse$inboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsForceRejectWireWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawal?: components.WireWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalsForceRejectWireWithdrawalResponse$outboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsForceRejectWireWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsForceRejectWireWithdrawalResponse$ {
    /** @deprecated use `WireWithdrawalsForceRejectWireWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsForceRejectWireWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsForceRejectWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsForceRejectWireWithdrawalResponse>;
    /** @deprecated use `WireWithdrawalsForceRejectWireWithdrawalResponse$Outbound` instead. */
    type Outbound = WireWithdrawalsForceRejectWireWithdrawalResponse$Outbound;
}
//# sourceMappingURL=wirewithdrawalsforcerejectwirewithdrawal.d.ts.map