import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctWithdrawalsGetIctWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictWithdrawal id.
     */
    ictWithdrawalId: string;
};
export type IctWithdrawalsGetIctWithdrawalResponse = {
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
export declare const IctWithdrawalsGetIctWithdrawalRequest$inboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsGetIctWithdrawalRequest$Outbound = {
    account_id: string;
    ictWithdrawal_id: string;
};
/** @internal */
export declare const IctWithdrawalsGetIctWithdrawalRequest$outboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsGetIctWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsGetIctWithdrawalRequest$ {
    /** @deprecated use `IctWithdrawalsGetIctWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsGetIctWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsGetIctWithdrawalRequest>;
    /** @deprecated use `IctWithdrawalsGetIctWithdrawalRequest$Outbound` instead. */
    type Outbound = IctWithdrawalsGetIctWithdrawalRequest$Outbound;
}
export declare function ictWithdrawalsGetIctWithdrawalRequestToJSON(ictWithdrawalsGetIctWithdrawalRequest: IctWithdrawalsGetIctWithdrawalRequest): string;
export declare function ictWithdrawalsGetIctWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsGetIctWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const IctWithdrawalsGetIctWithdrawalResponse$inboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsGetIctWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctWithdrawal?: components.IctWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctWithdrawalsGetIctWithdrawalResponse$outboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsGetIctWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsGetIctWithdrawalResponse$ {
    /** @deprecated use `IctWithdrawalsGetIctWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsGetIctWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsGetIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsGetIctWithdrawalResponse>;
    /** @deprecated use `IctWithdrawalsGetIctWithdrawalResponse$Outbound` instead. */
    type Outbound = IctWithdrawalsGetIctWithdrawalResponse$Outbound;
}
export declare function ictWithdrawalsGetIctWithdrawalResponseToJSON(ictWithdrawalsGetIctWithdrawalResponse: IctWithdrawalsGetIctWithdrawalResponse): string;
export declare function ictWithdrawalsGetIctWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsGetIctWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=ictwithdrawalsgetictwithdrawal.d.ts.map