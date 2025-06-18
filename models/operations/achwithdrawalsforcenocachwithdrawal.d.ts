import * as z from "zod";
import * as components from "../components/index.js";
export type AchWithdrawalsForceNocAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawal id.
     */
    achWithdrawalId: string;
    forceNocAchWithdrawalRequestCreate: components.ForceNocAchWithdrawalRequestCreate;
};
export type AchWithdrawalsForceNocAchWithdrawalResponse = {
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
export declare const AchWithdrawalsForceNocAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceNocAchWithdrawalRequest$Outbound = {
    account_id: string;
    achWithdrawal_id: string;
    ForceNocAchWithdrawalRequestCreate: components.ForceNocAchWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalsForceNocAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceNocAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceNocAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceNocAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsForceNocAchWithdrawalRequest$Outbound;
}
/** @internal */
export declare const AchWithdrawalsForceNocAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceNocAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsForceNocAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceNocAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceNocAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceNocAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceNocAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsForceNocAchWithdrawalResponse$Outbound;
}
//# sourceMappingURL=achwithdrawalsforcenocachwithdrawal.d.ts.map