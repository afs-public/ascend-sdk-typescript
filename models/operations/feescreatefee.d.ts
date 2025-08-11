import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type FeesCreateFeeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    transfersFeeCreate: components.TransfersFeeCreate;
};
export type FeesCreateFeeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    transfersFee?: components.TransfersFee | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const FeesCreateFeeRequest$inboundSchema: z.ZodType<FeesCreateFeeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FeesCreateFeeRequest$Outbound = {
    account_id: string;
    TransfersFeeCreate: components.TransfersFeeCreate$Outbound;
};
/** @internal */
export declare const FeesCreateFeeRequest$outboundSchema: z.ZodType<FeesCreateFeeRequest$Outbound, z.ZodTypeDef, FeesCreateFeeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeesCreateFeeRequest$ {
    /** @deprecated use `FeesCreateFeeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeesCreateFeeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeesCreateFeeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeesCreateFeeRequest$Outbound, z.ZodTypeDef, FeesCreateFeeRequest>;
    /** @deprecated use `FeesCreateFeeRequest$Outbound` instead. */
    type Outbound = FeesCreateFeeRequest$Outbound;
}
export declare function feesCreateFeeRequestToJSON(feesCreateFeeRequest: FeesCreateFeeRequest): string;
export declare function feesCreateFeeRequestFromJSON(jsonString: string): SafeParseResult<FeesCreateFeeRequest, SDKValidationError>;
/** @internal */
export declare const FeesCreateFeeResponse$inboundSchema: z.ZodType<FeesCreateFeeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FeesCreateFeeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TransfersFee?: components.TransfersFee$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const FeesCreateFeeResponse$outboundSchema: z.ZodType<FeesCreateFeeResponse$Outbound, z.ZodTypeDef, FeesCreateFeeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeesCreateFeeResponse$ {
    /** @deprecated use `FeesCreateFeeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeesCreateFeeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeesCreateFeeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeesCreateFeeResponse$Outbound, z.ZodTypeDef, FeesCreateFeeResponse>;
    /** @deprecated use `FeesCreateFeeResponse$Outbound` instead. */
    type Outbound = FeesCreateFeeResponse$Outbound;
}
export declare function feesCreateFeeResponseToJSON(feesCreateFeeResponse: FeesCreateFeeResponse): string;
export declare function feesCreateFeeResponseFromJSON(jsonString: string): SafeParseResult<FeesCreateFeeResponse, SDKValidationError>;
//# sourceMappingURL=feescreatefee.d.ts.map