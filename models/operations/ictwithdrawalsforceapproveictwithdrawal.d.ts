import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctWithdrawalsForceApproveIctWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictWithdrawal id.
     */
    ictWithdrawalId: string;
    forceApproveIctWithdrawalRequestCreate: components.ForceApproveIctWithdrawalRequestCreate;
};
export type IctWithdrawalsForceApproveIctWithdrawalResponse = {
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
export declare const IctWithdrawalsForceApproveIctWithdrawalRequest$inboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsForceApproveIctWithdrawalRequest$Outbound = {
    account_id: string;
    ictWithdrawal_id: string;
    ForceApproveIctWithdrawalRequestCreate: components.ForceApproveIctWithdrawalRequestCreate$Outbound;
};
/** @internal */
export declare const IctWithdrawalsForceApproveIctWithdrawalRequest$outboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsForceApproveIctWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsForceApproveIctWithdrawalRequest$ {
    /** @deprecated use `IctWithdrawalsForceApproveIctWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsForceApproveIctWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsForceApproveIctWithdrawalRequest>;
    /** @deprecated use `IctWithdrawalsForceApproveIctWithdrawalRequest$Outbound` instead. */
    type Outbound = IctWithdrawalsForceApproveIctWithdrawalRequest$Outbound;
}
export declare function ictWithdrawalsForceApproveIctWithdrawalRequestToJSON(ictWithdrawalsForceApproveIctWithdrawalRequest: IctWithdrawalsForceApproveIctWithdrawalRequest): string;
export declare function ictWithdrawalsForceApproveIctWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsForceApproveIctWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const IctWithdrawalsForceApproveIctWithdrawalResponse$inboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsForceApproveIctWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctWithdrawal?: components.IctWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctWithdrawalsForceApproveIctWithdrawalResponse$outboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsForceApproveIctWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsForceApproveIctWithdrawalResponse$ {
    /** @deprecated use `IctWithdrawalsForceApproveIctWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsForceApproveIctWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsForceApproveIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsForceApproveIctWithdrawalResponse>;
    /** @deprecated use `IctWithdrawalsForceApproveIctWithdrawalResponse$Outbound` instead. */
    type Outbound = IctWithdrawalsForceApproveIctWithdrawalResponse$Outbound;
}
export declare function ictWithdrawalsForceApproveIctWithdrawalResponseToJSON(ictWithdrawalsForceApproveIctWithdrawalResponse: IctWithdrawalsForceApproveIctWithdrawalResponse): string;
export declare function ictWithdrawalsForceApproveIctWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsForceApproveIctWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=ictwithdrawalsforceapproveictwithdrawal.d.ts.map