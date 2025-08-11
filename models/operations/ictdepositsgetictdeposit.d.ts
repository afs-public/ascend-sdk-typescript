import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctDepositsGetIctDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictDeposit id.
     */
    ictDepositId: string;
};
export type IctDepositsGetIctDepositResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    ictDeposit?: components.IctDeposit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const IctDepositsGetIctDepositRequest$inboundSchema: z.ZodType<IctDepositsGetIctDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsGetIctDepositRequest$Outbound = {
    account_id: string;
    ictDeposit_id: string;
};
/** @internal */
export declare const IctDepositsGetIctDepositRequest$outboundSchema: z.ZodType<IctDepositsGetIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsGetIctDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsGetIctDepositRequest$ {
    /** @deprecated use `IctDepositsGetIctDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsGetIctDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsGetIctDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsGetIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsGetIctDepositRequest>;
    /** @deprecated use `IctDepositsGetIctDepositRequest$Outbound` instead. */
    type Outbound = IctDepositsGetIctDepositRequest$Outbound;
}
export declare function ictDepositsGetIctDepositRequestToJSON(ictDepositsGetIctDepositRequest: IctDepositsGetIctDepositRequest): string;
export declare function ictDepositsGetIctDepositRequestFromJSON(jsonString: string): SafeParseResult<IctDepositsGetIctDepositRequest, SDKValidationError>;
/** @internal */
export declare const IctDepositsGetIctDepositResponse$inboundSchema: z.ZodType<IctDepositsGetIctDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsGetIctDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctDeposit?: components.IctDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctDepositsGetIctDepositResponse$outboundSchema: z.ZodType<IctDepositsGetIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsGetIctDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsGetIctDepositResponse$ {
    /** @deprecated use `IctDepositsGetIctDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsGetIctDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsGetIctDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsGetIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsGetIctDepositResponse>;
    /** @deprecated use `IctDepositsGetIctDepositResponse$Outbound` instead. */
    type Outbound = IctDepositsGetIctDepositResponse$Outbound;
}
export declare function ictDepositsGetIctDepositResponseToJSON(ictDepositsGetIctDepositResponse: IctDepositsGetIctDepositResponse): string;
export declare function ictDepositsGetIctDepositResponseFromJSON(jsonString: string): SafeParseResult<IctDepositsGetIctDepositResponse, SDKValidationError>;
//# sourceMappingURL=ictdepositsgetictdeposit.d.ts.map