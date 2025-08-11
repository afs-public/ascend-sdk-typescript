import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type HTTPMetadata = {
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    response: Response;
    /**
     * Raw HTTP request; suitable for debugging
     */
    request: Request;
};
/** @internal */
export declare const HTTPMetadata$inboundSchema: z.ZodType<HTTPMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type HTTPMetadata$Outbound = {
    Response: never;
    Request: never;
};
/** @internal */
export declare const HTTPMetadata$outboundSchema: z.ZodType<HTTPMetadata$Outbound, z.ZodTypeDef, HTTPMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HTTPMetadata$ {
    /** @deprecated use `HTTPMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HTTPMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `HTTPMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HTTPMetadata$Outbound, z.ZodTypeDef, HTTPMetadata>;
    /** @deprecated use `HTTPMetadata$Outbound` instead. */
    type Outbound = HTTPMetadata$Outbound;
}
export declare function httpMetadataToJSON(httpMetadata: HTTPMetadata): string;
export declare function httpMetadataFromJSON(jsonString: string): SafeParseResult<HTTPMetadata, SDKValidationError>;
//# sourceMappingURL=httpmetadata.d.ts.map