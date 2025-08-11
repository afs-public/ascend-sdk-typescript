import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctDepositsCreateIctDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    ictDepositCreate: components.IctDepositCreate;
};
export type IctDepositsCreateIctDepositResponse = {
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
export declare const IctDepositsCreateIctDepositRequest$inboundSchema: z.ZodType<IctDepositsCreateIctDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsCreateIctDepositRequest$Outbound = {
    account_id: string;
    IctDepositCreate: components.IctDepositCreate$Outbound;
};
/** @internal */
export declare const IctDepositsCreateIctDepositRequest$outboundSchema: z.ZodType<IctDepositsCreateIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsCreateIctDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsCreateIctDepositRequest$ {
    /** @deprecated use `IctDepositsCreateIctDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsCreateIctDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsCreateIctDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsCreateIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsCreateIctDepositRequest>;
    /** @deprecated use `IctDepositsCreateIctDepositRequest$Outbound` instead. */
    type Outbound = IctDepositsCreateIctDepositRequest$Outbound;
}
export declare function ictDepositsCreateIctDepositRequestToJSON(ictDepositsCreateIctDepositRequest: IctDepositsCreateIctDepositRequest): string;
export declare function ictDepositsCreateIctDepositRequestFromJSON(jsonString: string): SafeParseResult<IctDepositsCreateIctDepositRequest, SDKValidationError>;
/** @internal */
export declare const IctDepositsCreateIctDepositResponse$inboundSchema: z.ZodType<IctDepositsCreateIctDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsCreateIctDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctDeposit?: components.IctDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctDepositsCreateIctDepositResponse$outboundSchema: z.ZodType<IctDepositsCreateIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsCreateIctDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsCreateIctDepositResponse$ {
    /** @deprecated use `IctDepositsCreateIctDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsCreateIctDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsCreateIctDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsCreateIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsCreateIctDepositResponse>;
    /** @deprecated use `IctDepositsCreateIctDepositResponse$Outbound` instead. */
    type Outbound = IctDepositsCreateIctDepositResponse$Outbound;
}
export declare function ictDepositsCreateIctDepositResponseToJSON(ictDepositsCreateIctDepositResponse: IctDepositsCreateIctDepositResponse): string;
export declare function ictDepositsCreateIctDepositResponseFromJSON(jsonString: string): SafeParseResult<IctDepositsCreateIctDepositResponse, SDKValidationError>;
//# sourceMappingURL=ictdepositscreateictdeposit.d.ts.map