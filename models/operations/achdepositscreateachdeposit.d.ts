import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositsCreateAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    achDepositCreate: components.AchDepositCreate;
};
export type AchDepositsCreateAchDepositResponse = {
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
export declare const AchDepositsCreateAchDepositRequest$inboundSchema: z.ZodType<AchDepositsCreateAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsCreateAchDepositRequest$Outbound = {
    account_id: string;
    AchDepositCreate: components.AchDepositCreate$Outbound;
};
/** @internal */
export declare const AchDepositsCreateAchDepositRequest$outboundSchema: z.ZodType<AchDepositsCreateAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsCreateAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsCreateAchDepositRequest$ {
    /** @deprecated use `AchDepositsCreateAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsCreateAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsCreateAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsCreateAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsCreateAchDepositRequest>;
    /** @deprecated use `AchDepositsCreateAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsCreateAchDepositRequest$Outbound;
}
export declare function achDepositsCreateAchDepositRequestToJSON(achDepositsCreateAchDepositRequest: AchDepositsCreateAchDepositRequest): string;
export declare function achDepositsCreateAchDepositRequestFromJSON(jsonString: string): SafeParseResult<AchDepositsCreateAchDepositRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositsCreateAchDepositResponse$inboundSchema: z.ZodType<AchDepositsCreateAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsCreateAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsCreateAchDepositResponse$outboundSchema: z.ZodType<AchDepositsCreateAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsCreateAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsCreateAchDepositResponse$ {
    /** @deprecated use `AchDepositsCreateAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsCreateAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsCreateAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsCreateAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsCreateAchDepositResponse>;
    /** @deprecated use `AchDepositsCreateAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsCreateAchDepositResponse$Outbound;
}
export declare function achDepositsCreateAchDepositResponseToJSON(achDepositsCreateAchDepositResponse: AchDepositsCreateAchDepositResponse): string;
export declare function achDepositsCreateAchDepositResponseFromJSON(jsonString: string): SafeParseResult<AchDepositsCreateAchDepositResponse, SDKValidationError>;
//# sourceMappingURL=achdepositscreateachdeposit.d.ts.map