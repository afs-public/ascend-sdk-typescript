import * as z from "zod";
import * as components from "../components/index.js";
export type AchWithdrawalsGetAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawal id.
     */
    achWithdrawalId: string;
};
export type AchWithdrawalsGetAchWithdrawalResponse = {
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
export declare const AchWithdrawalsGetAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsGetAchWithdrawalRequest$Outbound = {
    account_id: string;
    achWithdrawal_id: string;
};
/** @internal */
export declare const AchWithdrawalsGetAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsGetAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsGetAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsGetAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsGetAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsGetAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsGetAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsGetAchWithdrawalRequest$Outbound;
}
/** @internal */
export declare const AchWithdrawalsGetAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsGetAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsGetAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsGetAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsGetAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsGetAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsGetAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsGetAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsGetAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsGetAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsGetAchWithdrawalResponse$Outbound;
}
//# sourceMappingURL=achwithdrawalsgetachwithdrawal.d.ts.map