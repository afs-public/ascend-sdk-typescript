import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositsCancelAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDeposit id.
     */
    achDepositId: string;
    cancelAchDepositRequestCreate: components.CancelAchDepositRequestCreate;
};
export type AchDepositsCancelAchDepositResponse = {
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
export declare const AchDepositsCancelAchDepositRequest$inboundSchema: z.ZodType<AchDepositsCancelAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsCancelAchDepositRequest$Outbound = {
    account_id: string;
    achDeposit_id: string;
    CancelAchDepositRequestCreate: components.CancelAchDepositRequestCreate$Outbound;
};
/** @internal */
export declare const AchDepositsCancelAchDepositRequest$outboundSchema: z.ZodType<AchDepositsCancelAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsCancelAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsCancelAchDepositRequest$ {
    /** @deprecated use `AchDepositsCancelAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsCancelAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsCancelAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsCancelAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsCancelAchDepositRequest>;
    /** @deprecated use `AchDepositsCancelAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsCancelAchDepositRequest$Outbound;
}
export declare function achDepositsCancelAchDepositRequestToJSON(achDepositsCancelAchDepositRequest: AchDepositsCancelAchDepositRequest): string;
export declare function achDepositsCancelAchDepositRequestFromJSON(jsonString: string): SafeParseResult<AchDepositsCancelAchDepositRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositsCancelAchDepositResponse$inboundSchema: z.ZodType<AchDepositsCancelAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsCancelAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsCancelAchDepositResponse$outboundSchema: z.ZodType<AchDepositsCancelAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsCancelAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsCancelAchDepositResponse$ {
    /** @deprecated use `AchDepositsCancelAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsCancelAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsCancelAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsCancelAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsCancelAchDepositResponse>;
    /** @deprecated use `AchDepositsCancelAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsCancelAchDepositResponse$Outbound;
}
export declare function achDepositsCancelAchDepositResponseToJSON(achDepositsCancelAchDepositResponse: AchDepositsCancelAchDepositResponse): string;
export declare function achDepositsCancelAchDepositResponseFromJSON(jsonString: string): SafeParseResult<AchDepositsCancelAchDepositResponse, SDKValidationError>;
//# sourceMappingURL=achdepositscancelachdeposit.d.ts.map