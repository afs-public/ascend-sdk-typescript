import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalsCreateAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    achWithdrawalCreate: components.AchWithdrawalCreate;
};
export type AchWithdrawalsCreateAchWithdrawalResponse = {
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
export declare const AchWithdrawalsCreateAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsCreateAchWithdrawalRequest$Outbound = {
    account_id: string;
    AchWithdrawalCreate: components.AchWithdrawalCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalsCreateAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsCreateAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsCreateAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsCreateAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsCreateAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsCreateAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsCreateAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsCreateAchWithdrawalRequest$Outbound;
}
export declare function achWithdrawalsCreateAchWithdrawalRequestToJSON(achWithdrawalsCreateAchWithdrawalRequest: AchWithdrawalsCreateAchWithdrawalRequest): string;
export declare function achWithdrawalsCreateAchWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalsCreateAchWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalsCreateAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsCreateAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsCreateAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsCreateAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsCreateAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsCreateAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsCreateAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsCreateAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsCreateAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsCreateAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsCreateAchWithdrawalResponse$Outbound;
}
export declare function achWithdrawalsCreateAchWithdrawalResponseToJSON(achWithdrawalsCreateAchWithdrawalResponse: AchWithdrawalsCreateAchWithdrawalResponse): string;
export declare function achWithdrawalsCreateAchWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalsCreateAchWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalscreateachwithdrawal.d.ts.map