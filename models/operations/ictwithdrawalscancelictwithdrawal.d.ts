import * as z from "zod";
import * as components from "../components/index.js";
export type IctWithdrawalsCancelIctWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictWithdrawal id.
     */
    ictWithdrawalId: string;
    cancelIctWithdrawalRequestCreate: components.CancelIctWithdrawalRequestCreate;
};
export type IctWithdrawalsCancelIctWithdrawalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    ictWithdrawal?: components.IctWithdrawal | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const IctWithdrawalsCancelIctWithdrawalRequest$inboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsCancelIctWithdrawalRequest$Outbound = {
    account_id: string;
    ictWithdrawal_id: string;
    CancelIctWithdrawalRequestCreate: components.CancelIctWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const IctWithdrawalsCancelIctWithdrawalRequest$outboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsCancelIctWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsCancelIctWithdrawalRequest$ {
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsCancelIctWithdrawalRequest>;
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalRequest$Outbound` instead. */
    type Outbound = IctWithdrawalsCancelIctWithdrawalRequest$Outbound;
}
/** @internal */
export declare const IctWithdrawalsCancelIctWithdrawalResponse$inboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsCancelIctWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctWithdrawal?: components.IctWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctWithdrawalsCancelIctWithdrawalResponse$outboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsCancelIctWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsCancelIctWithdrawalResponse$ {
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsCancelIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsCancelIctWithdrawalResponse>;
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalResponse$Outbound` instead. */
    type Outbound = IctWithdrawalsCancelIctWithdrawalResponse$Outbound;
}
//# sourceMappingURL=ictwithdrawalscancelictwithdrawal.d.ts.map