import * as z from "zod";
import * as components from "../components/index.js";
export type FeesCancelFeeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The fee id.
     */
    feeId: string;
    cancelFeeRequestCreate: components.CancelFeeRequestCreate;
};
export type FeesCancelFeeResponse = {
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
export declare const FeesCancelFeeRequest$inboundSchema: z.ZodType<FeesCancelFeeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FeesCancelFeeRequest$Outbound = {
    account_id: string;
    fee_id: string;
    CancelFeeRequestCreate: components.CancelFeeRequestCreate$Outbound;
};
/** @internal */
export declare const FeesCancelFeeRequest$outboundSchema: z.ZodType<FeesCancelFeeRequest$Outbound, z.ZodTypeDef, FeesCancelFeeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeesCancelFeeRequest$ {
    /** @deprecated use `FeesCancelFeeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeesCancelFeeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeesCancelFeeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeesCancelFeeRequest$Outbound, z.ZodTypeDef, FeesCancelFeeRequest>;
    /** @deprecated use `FeesCancelFeeRequest$Outbound` instead. */
    type Outbound = FeesCancelFeeRequest$Outbound;
}
/** @internal */
export declare const FeesCancelFeeResponse$inboundSchema: z.ZodType<FeesCancelFeeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FeesCancelFeeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TransfersFee?: components.TransfersFee$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const FeesCancelFeeResponse$outboundSchema: z.ZodType<FeesCancelFeeResponse$Outbound, z.ZodTypeDef, FeesCancelFeeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeesCancelFeeResponse$ {
    /** @deprecated use `FeesCancelFeeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeesCancelFeeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeesCancelFeeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeesCancelFeeResponse$Outbound, z.ZodTypeDef, FeesCancelFeeResponse>;
    /** @deprecated use `FeesCancelFeeResponse$Outbound` instead. */
    type Outbound = FeesCancelFeeResponse$Outbound;
}
//# sourceMappingURL=feescancelfee.d.ts.map