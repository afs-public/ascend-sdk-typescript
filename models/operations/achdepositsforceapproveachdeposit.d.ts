import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositsForceApproveAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDeposit id.
     */
    achDepositId: string;
    forceApproveAchDepositRequestCreate: components.ForceApproveAchDepositRequestCreate;
};
export type AchDepositsForceApproveAchDepositResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achDeposit?: components.AchDeposit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchDepositsForceApproveAchDepositRequest$inboundSchema: z.ZodType<AchDepositsForceApproveAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceApproveAchDepositRequest$Outbound = {
    account_id: string;
    achDeposit_id: string;
    ForceApproveAchDepositRequestCreate: components.ForceApproveAchDepositRequestCreate$Outbound;
};
/** @internal */
export declare const AchDepositsForceApproveAchDepositRequest$outboundSchema: z.ZodType<AchDepositsForceApproveAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceApproveAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceApproveAchDepositRequest$ {
    /** @deprecated use `AchDepositsForceApproveAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceApproveAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceApproveAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceApproveAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceApproveAchDepositRequest>;
    /** @deprecated use `AchDepositsForceApproveAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsForceApproveAchDepositRequest$Outbound;
}
export declare function achDepositsForceApproveAchDepositRequestToJSON(achDepositsForceApproveAchDepositRequest: AchDepositsForceApproveAchDepositRequest): string;
export declare function achDepositsForceApproveAchDepositRequestFromJSON(jsonString: string): SafeParseResult<AchDepositsForceApproveAchDepositRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositsForceApproveAchDepositResponse$inboundSchema: z.ZodType<AchDepositsForceApproveAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceApproveAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsForceApproveAchDepositResponse$outboundSchema: z.ZodType<AchDepositsForceApproveAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceApproveAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceApproveAchDepositResponse$ {
    /** @deprecated use `AchDepositsForceApproveAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceApproveAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceApproveAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceApproveAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceApproveAchDepositResponse>;
    /** @deprecated use `AchDepositsForceApproveAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsForceApproveAchDepositResponse$Outbound;
}
export declare function achDepositsForceApproveAchDepositResponseToJSON(achDepositsForceApproveAchDepositResponse: AchDepositsForceApproveAchDepositResponse): string;
export declare function achDepositsForceApproveAchDepositResponseFromJSON(jsonString: string): SafeParseResult<AchDepositsForceApproveAchDepositResponse, SDKValidationError>;
//# sourceMappingURL=achdepositsforceapproveachdeposit.d.ts.map