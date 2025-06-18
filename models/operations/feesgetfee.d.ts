import * as z from "zod";
import * as components from "../components/index.js";
export type FeesGetFeeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The fee id.
     */
    feeId: string;
};
export type FeesGetFeeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    transfersFee?: components.TransfersFee | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const FeesGetFeeRequest$inboundSchema: z.ZodType<FeesGetFeeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FeesGetFeeRequest$Outbound = {
    account_id: string;
    fee_id: string;
};
/** @internal */
export declare const FeesGetFeeRequest$outboundSchema: z.ZodType<FeesGetFeeRequest$Outbound, z.ZodTypeDef, FeesGetFeeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeesGetFeeRequest$ {
    /** @deprecated use `FeesGetFeeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeesGetFeeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeesGetFeeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeesGetFeeRequest$Outbound, z.ZodTypeDef, FeesGetFeeRequest>;
    /** @deprecated use `FeesGetFeeRequest$Outbound` instead. */
    type Outbound = FeesGetFeeRequest$Outbound;
}
/** @internal */
export declare const FeesGetFeeResponse$inboundSchema: z.ZodType<FeesGetFeeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FeesGetFeeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TransfersFee?: components.TransfersFee$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const FeesGetFeeResponse$outboundSchema: z.ZodType<FeesGetFeeResponse$Outbound, z.ZodTypeDef, FeesGetFeeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeesGetFeeResponse$ {
    /** @deprecated use `FeesGetFeeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeesGetFeeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeesGetFeeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeesGetFeeResponse$Outbound, z.ZodTypeDef, FeesGetFeeResponse>;
    /** @deprecated use `FeesGetFeeResponse$Outbound` instead. */
    type Outbound = FeesGetFeeResponse$Outbound;
}
//# sourceMappingURL=feesgetfee.d.ts.map