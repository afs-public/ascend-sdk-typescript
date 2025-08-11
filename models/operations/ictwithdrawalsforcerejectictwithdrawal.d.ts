import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctWithdrawalsForceRejectIctWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictWithdrawal id.
     */
    ictWithdrawalId: string;
    forceRejectIctWithdrawalRequestCreate: components.ForceRejectIctWithdrawalRequestCreate;
};
export type IctWithdrawalsForceRejectIctWithdrawalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    ictWithdrawal?: components.IctWithdrawal | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const IctWithdrawalsForceRejectIctWithdrawalRequest$inboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsForceRejectIctWithdrawalRequest$Outbound = {
    account_id: string;
    ictWithdrawal_id: string;
    ForceRejectIctWithdrawalRequestCreate: components.ForceRejectIctWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const IctWithdrawalsForceRejectIctWithdrawalRequest$outboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsForceRejectIctWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsForceRejectIctWithdrawalRequest$ {
    /** @deprecated use `IctWithdrawalsForceRejectIctWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsForceRejectIctWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsForceRejectIctWithdrawalRequest>;
    /** @deprecated use `IctWithdrawalsForceRejectIctWithdrawalRequest$Outbound` instead. */
    type Outbound = IctWithdrawalsForceRejectIctWithdrawalRequest$Outbound;
}
export declare function ictWithdrawalsForceRejectIctWithdrawalRequestToJSON(ictWithdrawalsForceRejectIctWithdrawalRequest: IctWithdrawalsForceRejectIctWithdrawalRequest): string;
export declare function ictWithdrawalsForceRejectIctWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsForceRejectIctWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const IctWithdrawalsForceRejectIctWithdrawalResponse$inboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsForceRejectIctWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctWithdrawal?: components.IctWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctWithdrawalsForceRejectIctWithdrawalResponse$outboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsForceRejectIctWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsForceRejectIctWithdrawalResponse$ {
    /** @deprecated use `IctWithdrawalsForceRejectIctWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsForceRejectIctWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsForceRejectIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsForceRejectIctWithdrawalResponse>;
    /** @deprecated use `IctWithdrawalsForceRejectIctWithdrawalResponse$Outbound` instead. */
    type Outbound = IctWithdrawalsForceRejectIctWithdrawalResponse$Outbound;
}
export declare function ictWithdrawalsForceRejectIctWithdrawalResponseToJSON(ictWithdrawalsForceRejectIctWithdrawalResponse: IctWithdrawalsForceRejectIctWithdrawalResponse): string;
export declare function ictWithdrawalsForceRejectIctWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsForceRejectIctWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=ictwithdrawalsforcerejectictwithdrawal.d.ts.map