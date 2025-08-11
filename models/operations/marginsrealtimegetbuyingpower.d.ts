import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type MarginsRealTimeGetBuyingPowerRequest = {
    /**
     * The account id.
     */
    accountId: string;
};
export type MarginsRealTimeGetBuyingPowerResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    buyingPower?: components.BuyingPower | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed. Check the error message for more details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const MarginsRealTimeGetBuyingPowerRequest$inboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type MarginsRealTimeGetBuyingPowerRequest$Outbound = {
    account_id: string;
};
/** @internal */
export declare const MarginsRealTimeGetBuyingPowerRequest$outboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerRequest$Outbound, z.ZodTypeDef, MarginsRealTimeGetBuyingPowerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MarginsRealTimeGetBuyingPowerRequest$ {
    /** @deprecated use `MarginsRealTimeGetBuyingPowerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `MarginsRealTimeGetBuyingPowerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerRequest$Outbound, z.ZodTypeDef, MarginsRealTimeGetBuyingPowerRequest>;
    /** @deprecated use `MarginsRealTimeGetBuyingPowerRequest$Outbound` instead. */
    type Outbound = MarginsRealTimeGetBuyingPowerRequest$Outbound;
}
export declare function marginsRealTimeGetBuyingPowerRequestToJSON(marginsRealTimeGetBuyingPowerRequest: MarginsRealTimeGetBuyingPowerRequest): string;
export declare function marginsRealTimeGetBuyingPowerRequestFromJSON(jsonString: string): SafeParseResult<MarginsRealTimeGetBuyingPowerRequest, SDKValidationError>;
/** @internal */
export declare const MarginsRealTimeGetBuyingPowerResponse$inboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type MarginsRealTimeGetBuyingPowerResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BuyingPower?: components.BuyingPower$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const MarginsRealTimeGetBuyingPowerResponse$outboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerResponse$Outbound, z.ZodTypeDef, MarginsRealTimeGetBuyingPowerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MarginsRealTimeGetBuyingPowerResponse$ {
    /** @deprecated use `MarginsRealTimeGetBuyingPowerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `MarginsRealTimeGetBuyingPowerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MarginsRealTimeGetBuyingPowerResponse$Outbound, z.ZodTypeDef, MarginsRealTimeGetBuyingPowerResponse>;
    /** @deprecated use `MarginsRealTimeGetBuyingPowerResponse$Outbound` instead. */
    type Outbound = MarginsRealTimeGetBuyingPowerResponse$Outbound;
}
export declare function marginsRealTimeGetBuyingPowerResponseToJSON(marginsRealTimeGetBuyingPowerResponse: MarginsRealTimeGetBuyingPowerResponse): string;
export declare function marginsRealTimeGetBuyingPowerResponseFromJSON(jsonString: string): SafeParseResult<MarginsRealTimeGetBuyingPowerResponse, SDKValidationError>;
//# sourceMappingURL=marginsrealtimegetbuyingpower.d.ts.map