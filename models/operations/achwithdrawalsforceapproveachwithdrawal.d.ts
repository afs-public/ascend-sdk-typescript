import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalsForceApproveAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawal id.
     */
    achWithdrawalId: string;
    forceApproveAchWithdrawalRequestCreate: components.ForceApproveAchWithdrawalRequestCreate;
};
export type AchWithdrawalsForceApproveAchWithdrawalResponse = {
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
export declare const AchWithdrawalsForceApproveAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceApproveAchWithdrawalRequest$Outbound = {
    account_id: string;
    achWithdrawal_id: string;
    ForceApproveAchWithdrawalRequestCreate: components.ForceApproveAchWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalsForceApproveAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceApproveAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceApproveAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsForceApproveAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceApproveAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsForceApproveAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsForceApproveAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsForceApproveAchWithdrawalRequest$Outbound;
}
export declare function achWithdrawalsForceApproveAchWithdrawalRequestToJSON(achWithdrawalsForceApproveAchWithdrawalRequest: AchWithdrawalsForceApproveAchWithdrawalRequest): string;
export declare function achWithdrawalsForceApproveAchWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalsForceApproveAchWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalsForceApproveAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsForceApproveAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsForceApproveAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceApproveAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsForceApproveAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsForceApproveAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsForceApproveAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsForceApproveAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsForceApproveAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsForceApproveAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsForceApproveAchWithdrawalResponse$Outbound;
}
export declare function achWithdrawalsForceApproveAchWithdrawalResponseToJSON(achWithdrawalsForceApproveAchWithdrawalResponse: AchWithdrawalsForceApproveAchWithdrawalResponse): string;
export declare function achWithdrawalsForceApproveAchWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalsForceApproveAchWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalsforceapproveachwithdrawal.d.ts.map