import * as z from "zod";
import * as components from "../components/index.js";
export type WireDepositsGetWireDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireDeposit id.
     */
    wireDepositId: string;
};
export type WireDepositsGetWireDepositResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    wireDeposit?: components.WireDeposit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const WireDepositsGetWireDepositRequest$inboundSchema: z.ZodType<WireDepositsGetWireDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireDepositsGetWireDepositRequest$Outbound = {
    account_id: string;
    wireDeposit_id: string;
};
/** @internal */
export declare const WireDepositsGetWireDepositRequest$outboundSchema: z.ZodType<WireDepositsGetWireDepositRequest$Outbound, z.ZodTypeDef, WireDepositsGetWireDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositsGetWireDepositRequest$ {
    /** @deprecated use `WireDepositsGetWireDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositsGetWireDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositsGetWireDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositsGetWireDepositRequest$Outbound, z.ZodTypeDef, WireDepositsGetWireDepositRequest>;
    /** @deprecated use `WireDepositsGetWireDepositRequest$Outbound` instead. */
    type Outbound = WireDepositsGetWireDepositRequest$Outbound;
}
/** @internal */
export declare const WireDepositsGetWireDepositResponse$inboundSchema: z.ZodType<WireDepositsGetWireDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireDepositsGetWireDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireDeposit?: components.WireDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireDepositsGetWireDepositResponse$outboundSchema: z.ZodType<WireDepositsGetWireDepositResponse$Outbound, z.ZodTypeDef, WireDepositsGetWireDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositsGetWireDepositResponse$ {
    /** @deprecated use `WireDepositsGetWireDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositsGetWireDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositsGetWireDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositsGetWireDepositResponse$Outbound, z.ZodTypeDef, WireDepositsGetWireDepositResponse>;
    /** @deprecated use `WireDepositsGetWireDepositResponse$Outbound` instead. */
    type Outbound = WireDepositsGetWireDepositResponse$Outbound;
}
//# sourceMappingURL=wiredepositsgetwiredeposit.d.ts.map