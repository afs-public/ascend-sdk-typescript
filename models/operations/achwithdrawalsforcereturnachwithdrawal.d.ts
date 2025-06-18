import * as z from "zod";
import * as components from "../components/index.js";
export type AchWithdrawalsForceReturnAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawal id.
     */
    achWithdrawalId: string;
    forceReturnAchWithdrawalRequestCreate: components.ForceReturnAchWithdrawalRequestCreate;
};
export type AchWithdrawalsForceReturnAchWithdrawalResponse = {
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
export declare const AchWithdrawalsForceReturnAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceReturnAchWithdrawalRequest$Outbound = {
    account_id: string;
    achWithdrawal_id: string;
    ForceReturnAchWithdrawalRequestCreate: components.ForceReturnAchWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalsForceReturnAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceReturnAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceReturnAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsForceReturnAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceReturnAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceReturnAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsForceReturnAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsForceReturnAchWithdrawalRequest$Outbound;
}
/** @internal */
export declare const AchWithdrawalsForceReturnAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceReturnAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsForceReturnAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceReturnAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceReturnAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsForceReturnAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceReturnAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceReturnAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceReturnAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsForceReturnAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsForceReturnAchWithdrawalResponse$Outbound;
}
//# sourceMappingURL=achwithdrawalsforcereturnachwithdrawal.d.ts.map