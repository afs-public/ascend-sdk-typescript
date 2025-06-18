import * as z from "zod";
import * as components from "../components/index.js";
export type AchWithdrawalsForceRejectAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawal id.
     */
    achWithdrawalId: string;
    forceRejectAchWithdrawalRequestCreate: components.ForceRejectAchWithdrawalRequestCreate;
};
export type AchWithdrawalsForceRejectAchWithdrawalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achWithdrawal?: components.AchWithdrawal | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchWithdrawalsForceRejectAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceRejectAchWithdrawalRequest$Outbound = {
    account_id: string;
    achWithdrawal_id: string;
    ForceRejectAchWithdrawalRequestCreate: components.ForceRejectAchWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalsForceRejectAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceRejectAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceRejectAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsForceRejectAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceRejectAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceRejectAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsForceRejectAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsForceRejectAchWithdrawalRequest$Outbound;
}
/** @internal */
export declare const AchWithdrawalsForceRejectAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceRejectAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsForceRejectAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceRejectAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceRejectAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsForceRejectAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceRejectAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceRejectAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceRejectAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsForceRejectAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsForceRejectAchWithdrawalResponse$Outbound;
}
//# sourceMappingURL=achwithdrawalsforcerejectachwithdrawal.d.ts.map