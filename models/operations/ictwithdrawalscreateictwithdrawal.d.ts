import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctWithdrawalsCreateIctWithdrawalRequest = {
    /**
     * The account id.
     */
    accountId: string;
    ictWithdrawalCreate: components.IctWithdrawalCreate;
};
export type IctWithdrawalsCreateIctWithdrawalResponse = {
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
export declare const IctWithdrawalsCreateIctWithdrawalRequest$inboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsCreateIctWithdrawalRequest$Outbound = {
    account_id: string;
    IctWithdrawalCreate: components.IctWithdrawalCreate$Outbound;
};
/** @internal */
export declare const IctWithdrawalsCreateIctWithdrawalRequest$outboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsCreateIctWithdrawalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsCreateIctWithdrawalRequest$ {
    /** @deprecated use `IctWithdrawalsCreateIctWithdrawalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsCreateIctWithdrawalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalRequest$Outbound, z.ZodTypeDef, IctWithdrawalsCreateIctWithdrawalRequest>;
    /** @deprecated use `IctWithdrawalsCreateIctWithdrawalRequest$Outbound` instead. */
    type Outbound = IctWithdrawalsCreateIctWithdrawalRequest$Outbound;
}
export declare function ictWithdrawalsCreateIctWithdrawalRequestToJSON(ictWithdrawalsCreateIctWithdrawalRequest: IctWithdrawalsCreateIctWithdrawalRequest): string;
export declare function ictWithdrawalsCreateIctWithdrawalRequestFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsCreateIctWithdrawalRequest, SDKValidationError>;
/** @internal */
export declare const IctWithdrawalsCreateIctWithdrawalResponse$inboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalsCreateIctWithdrawalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctWithdrawal?: components.IctWithdrawal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctWithdrawalsCreateIctWithdrawalResponse$outboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsCreateIctWithdrawalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalsCreateIctWithdrawalResponse$ {
    /** @deprecated use `IctWithdrawalsCreateIctWithdrawalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalsCreateIctWithdrawalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalsCreateIctWithdrawalResponse$Outbound, z.ZodTypeDef, IctWithdrawalsCreateIctWithdrawalResponse>;
    /** @deprecated use `IctWithdrawalsCreateIctWithdrawalResponse$Outbound` instead. */
    type Outbound = IctWithdrawalsCreateIctWithdrawalResponse$Outbound;
}
export declare function ictWithdrawalsCreateIctWithdrawalResponseToJSON(ictWithdrawalsCreateIctWithdrawalResponse: IctWithdrawalsCreateIctWithdrawalResponse): string;
export declare function ictWithdrawalsCreateIctWithdrawalResponseFromJSON(jsonString: string): SafeParseResult<IctWithdrawalsCreateIctWithdrawalResponse, SDKValidationError>;
//# sourceMappingURL=ictwithdrawalscreateictwithdrawal.d.ts.map