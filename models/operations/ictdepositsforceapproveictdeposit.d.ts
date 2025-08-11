import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type IctDepositsForceApproveIctDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The ictDeposit id.
     */
    ictDepositId: string;
    forceApproveIctDepositRequestCreate: components.ForceApproveIctDepositRequestCreate;
};
export type IctDepositsForceApproveIctDepositResponse = {
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
export declare const IctDepositsForceApproveIctDepositRequest$inboundSchema: z.ZodType<IctDepositsForceApproveIctDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsForceApproveIctDepositRequest$Outbound = {
    account_id: string;
    ictDeposit_id: string;
    ForceApproveIctDepositRequestCreate: components.ForceApproveIctDepositRequestCreate$Outbound;
};
/** @internal */
export declare const IctDepositsForceApproveIctDepositRequest$outboundSchema: z.ZodType<IctDepositsForceApproveIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsForceApproveIctDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsForceApproveIctDepositRequest$ {
    /** @deprecated use `IctDepositsForceApproveIctDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsForceApproveIctDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsForceApproveIctDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsForceApproveIctDepositRequest$Outbound, z.ZodTypeDef, IctDepositsForceApproveIctDepositRequest>;
    /** @deprecated use `IctDepositsForceApproveIctDepositRequest$Outbound` instead. */
    type Outbound = IctDepositsForceApproveIctDepositRequest$Outbound;
}
export declare function ictDepositsForceApproveIctDepositRequestToJSON(ictDepositsForceApproveIctDepositRequest: IctDepositsForceApproveIctDepositRequest): string;
export declare function ictDepositsForceApproveIctDepositRequestFromJSON(jsonString: string): SafeParseResult<IctDepositsForceApproveIctDepositRequest, SDKValidationError>;
/** @internal */
export declare const IctDepositsForceApproveIctDepositResponse$inboundSchema: z.ZodType<IctDepositsForceApproveIctDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositsForceApproveIctDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    IctDeposit?: components.IctDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctDepositsForceApproveIctDepositResponse$outboundSchema: z.ZodType<IctDepositsForceApproveIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsForceApproveIctDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositsForceApproveIctDepositResponse$ {
    /** @deprecated use `IctDepositsForceApproveIctDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositsForceApproveIctDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositsForceApproveIctDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositsForceApproveIctDepositResponse$Outbound, z.ZodTypeDef, IctDepositsForceApproveIctDepositResponse>;
    /** @deprecated use `IctDepositsForceApproveIctDepositResponse$Outbound` instead. */
    type Outbound = IctDepositsForceApproveIctDepositResponse$Outbound;
}
export declare function ictDepositsForceApproveIctDepositResponseToJSON(ictDepositsForceApproveIctDepositResponse: IctDepositsForceApproveIctDepositResponse): string;
export declare function ictDepositsForceApproveIctDepositResponseFromJSON(jsonString: string): SafeParseResult<IctDepositsForceApproveIctDepositResponse, SDKValidationError>;
//# sourceMappingURL=ictdepositsforceapproveictdeposit.d.ts.map