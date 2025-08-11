import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalsCancelAchWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawal id.
     */
    achWithdrawalId: string;
    cancelAchWithdrawalRequestCreate: components.CancelAchWithdrawalRequestCreate;
};
export type AchWithdrawalsCancelAchWithdrawalResponse = {
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
export declare const AchWithdrawalsCancelAchWithdrawalRequest$inboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsCancelAchWithdrawalRequest$Outbound = {
    account_id: string;
    achWithdrawal_id: string;
    CancelAchWithdrawalRequestCreate: components.CancelAchWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalsCancelAchWithdrawalRequest$outboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsCancelAchWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsCancelAchWithdrawalRequest$ {
    /** @deprecated use `AchWithdrawalsCancelAchWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsCancelAchWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalRequest$Outbound, z.ZodTypeDef, AchWithdrawalsCancelAchWithdrawalRequest>;
    /** @deprecated use `AchWithdrawalsCancelAchWithdrawalRequest$Outbound` instead. */
    type Outbound = AchWithdrawalsCancelAchWithdrawalRequest$Outbound;
}
export declare function achWithdrawalsCancelAchWithdrawalRequestToJSON(achWithdrawalsCancelAchWithdrawalRequest: AchWithdrawalsCancelAchWithdrawalRequest): string;
export declare function achWithdrawalsCancelAchWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalsCancelAchWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalsCancelAchWithdrawalResponse$inboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalsCancelAchWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawal?: components.AchWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalsCancelAchWithdrawalResponse$outboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsCancelAchWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalsCancelAchWithdrawalResponse$ {
    /** @deprecated use `AchWithdrawalsCancelAchWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalsCancelAchWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalsCancelAchWithdrawalResponse$Outbound, z.ZodTypeDef, AchWithdrawalsCancelAchWithdrawalResponse>;
    /** @deprecated use `AchWithdrawalsCancelAchWithdrawalResponse$Outbound` instead. */
    type Outbound = AchWithdrawalsCancelAchWithdrawalResponse$Outbound;
}
export declare function achWithdrawalsCancelAchWithdrawalResponseToJSON(achWithdrawalsCancelAchWithdrawalResponse: AchWithdrawalsCancelAchWithdrawalResponse): string;
export declare function achWithdrawalsCancelAchWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalsCancelAchWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalscancelachwithdrawal.d.ts.map