import * as z from "zod";
import * as components from "../components/index.js";
export type WireWithdrawalsGetWireWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawal id.
     */
    wireWithdrawalId: string;
};
export type WireWithdrawalsGetWireWithdrawalResponse = {
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
export declare const WireWithdrawalsGetWireWithdrawalRequest$inboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsGetWireWithdrawalRequest$Outbound = {
    account_id: string;
    wireWithdrawal_id: string;
};
/** @internal */
export declare const WireWithdrawalsGetWireWithdrawalRequest$outboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsGetWireWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsGetWireWithdrawalRequest$ {
    /** @deprecated use `WireWithdrawalsGetWireWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsGetWireWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalRequest$Outbound, z.ZodTypeDef, WireWithdrawalsGetWireWithdrawalRequest>;
    /** @deprecated use `WireWithdrawalsGetWireWithdrawalRequest$Outbound` instead. */
    type Outbound = WireWithdrawalsGetWireWithdrawalRequest$Outbound;
}
/** @internal */
export declare const WireWithdrawalsGetWireWithdrawalResponse$inboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalsGetWireWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawal?: components.WireWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalsGetWireWithdrawalResponse$outboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsGetWireWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalsGetWireWithdrawalResponse$ {
    /** @deprecated use `WireWithdrawalsGetWireWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalsGetWireWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalsGetWireWithdrawalResponse$Outbound, z.ZodTypeDef, WireWithdrawalsGetWireWithdrawalResponse>;
    /** @deprecated use `WireWithdrawalsGetWireWithdrawalResponse$Outbound` instead. */
    type Outbound = WireWithdrawalsGetWireWithdrawalResponse$Outbound;
}
//# sourceMappingURL=wirewithdrawalsgetwirewithdrawal.d.ts.map