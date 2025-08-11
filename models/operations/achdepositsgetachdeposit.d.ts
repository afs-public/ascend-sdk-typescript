import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositsGetAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDeposit id.
     */
    achDepositId: string;
};
export type AchDepositsGetAchDepositResponse = {
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
export declare const AchDepositsGetAchDepositRequest$inboundSchema: z.ZodType<AchDepositsGetAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsGetAchDepositRequest$Outbound = {
    account_id: string;
    achDeposit_id: string;
};
/** @internal */
export declare const AchDepositsGetAchDepositRequest$outboundSchema: z.ZodType<AchDepositsGetAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsGetAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsGetAchDepositRequest$ {
    /** @deprecated use `AchDepositsGetAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsGetAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsGetAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsGetAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsGetAchDepositRequest>;
    /** @deprecated use `AchDepositsGetAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsGetAchDepositRequest$Outbound;
}
export declare function achDepositsGetAchDepositRequestToJSON(achDepositsGetAchDepositRequest: AchDepositsGetAchDepositRequest): string;
export declare function achDepositsGetAchDepositRequestFromJSON(jsonString: string): SafeParseResult<AchDepositsGetAchDepositRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositsGetAchDepositResponse$inboundSchema: z.ZodType<AchDepositsGetAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsGetAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsGetAchDepositResponse$outboundSchema: z.ZodType<AchDepositsGetAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsGetAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsGetAchDepositResponse$ {
    /** @deprecated use `AchDepositsGetAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsGetAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsGetAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsGetAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsGetAchDepositResponse>;
    /** @deprecated use `AchDepositsGetAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsGetAchDepositResponse$Outbound;
}
export declare function achDepositsGetAchDepositResponseToJSON(achDepositsGetAchDepositResponse: AchDepositsGetAchDepositResponse): string;
export declare function achDepositsGetAchDepositResponseFromJSON(jsonString: string): SafeParseResult<AchDepositsGetAchDepositResponse, SDKValidationError>;
//# sourceMappingURL=achdepositsgetachdeposit.d.ts.map