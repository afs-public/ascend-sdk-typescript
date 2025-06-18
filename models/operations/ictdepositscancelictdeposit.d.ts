import * as z from "zod";
import * as components from "../components/index.js";
export type IctDepositsCancelIctDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictDeposit id.
     */
    ictDepositId: string;
    cancelIctDepositRequestCreate: components.CancelIctDepositRequestCreate;
};
export type IctDepositsCancelIctDepositResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    ictDeposit?: components.IctDeposit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const IctDepositsCancelIctDepositRequest$inboundSchema: z.ZodType<IctDepositsCancelIctDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsCancelIctDepositRequest$Outbound = {
    account_id: string;
    ictDeposit_id: string;
    CancelIctDepositRequestCreate: components.CancelIctDepositRequestCreate$Outbound;
};
/** @internal */
export declare const IctDepositsCancelIctDepositRequest$outboundSchema: z.ZodType<IctDepositsCancelIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsCancelIctDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsCancelIctDepositRequest$ {
    /** @deprecated use `IctDepositsCancelIctDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsCancelIctDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsCancelIctDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsCancelIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsCancelIctDepositRequest>;
    /** @deprecated use `IctDepositsCancelIctDepositRequest$Outbound` instead. */
    type Outbound = IctDepositsCancelIctDepositRequest$Outbound;
}
/** @internal */
export declare const IctDepositsCancelIctDepositResponse$inboundSchema: z.ZodType<IctDepositsCancelIctDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsCancelIctDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctDeposit?: components.IctDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctDepositsCancelIctDepositResponse$outboundSchema: z.ZodType<IctDepositsCancelIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsCancelIctDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsCancelIctDepositResponse$ {
    /** @deprecated use `IctDepositsCancelIctDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsCancelIctDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsCancelIctDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsCancelIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsCancelIctDepositResponse>;
    /** @deprecated use `IctDepositsCancelIctDepositResponse$Outbound` instead. */
    type Outbound = IctDepositsCancelIctDepositResponse$Outbound;
}
//# sourceMappingURL=ictdepositscancelictdeposit.d.ts.map