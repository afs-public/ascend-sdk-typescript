import * as z from "zod";
import * as components from "../components/index.js";
export type IctDepositsForceRejectIctDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictDeposit id.
     */
    ictDepositId: string;
    forceRejectIctDepositRequestCreate: components.ForceRejectIctDepositRequestCreate;
};
export type IctDepositsForceRejectIctDepositResponse = {
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
export declare const IctDepositsForceRejectIctDepositRequest$inboundSchema: z.ZodType<IctDepositsForceRejectIctDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsForceRejectIctDepositRequest$Outbound = {
    account_id: string;
    ictDeposit_id: string;
    ForceRejectIctDepositRequestCreate: components.ForceRejectIctDepositRequestCreate$Outbound;
};
/** @internal */
export declare const IctDepositsForceRejectIctDepositRequest$outboundSchema: z.ZodType<IctDepositsForceRejectIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsForceRejectIctDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsForceRejectIctDepositRequest$ {
    /** @deprecated use `IctDepositsForceRejectIctDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsForceRejectIctDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsForceRejectIctDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsForceRejectIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsForceRejectIctDepositRequest>;
    /** @deprecated use `IctDepositsForceRejectIctDepositRequest$Outbound` instead. */
    type Outbound = IctDepositsForceRejectIctDepositRequest$Outbound;
}
/** @internal */
export declare const IctDepositsForceRejectIctDepositResponse$inboundSchema: z.ZodType<IctDepositsForceRejectIctDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsForceRejectIctDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctDeposit?: components.IctDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctDepositsForceRejectIctDepositResponse$outboundSchema: z.ZodType<IctDepositsForceRejectIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsForceRejectIctDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsForceRejectIctDepositResponse$ {
    /** @deprecated use `IctDepositsForceRejectIctDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsForceRejectIctDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsForceRejectIctDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsForceRejectIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsForceRejectIctDepositResponse>;
    /** @deprecated use `IctDepositsForceRejectIctDepositResponse$Outbound` instead. */
    type Outbound = IctDepositsForceRejectIctDepositResponse$Outbound;
}
//# sourceMappingURL=ictdepositsforcerejectictdeposit.d.ts.map