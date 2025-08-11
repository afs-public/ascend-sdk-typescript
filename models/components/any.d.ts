import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Any = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/** @internal */
export declare const Any$inboundSchema: z.ZodType<Any, z.ZodTypeDef, unknown>;
/** @internal */
export type Any$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const Any$outboundSchema: z.ZodType<Any$Outbound, z.ZodTypeDef, Any>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Any$ {
    /** @deprecated use `Any$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Any, z.ZodTypeDef, unknown>;
    /** @deprecated use `Any$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Any$Outbound, z.ZodTypeDef, Any>;
    /** @deprecated use `Any$Outbound` instead. */
    type Outbound = Any$Outbound;
}
export declare function anyToJSON(any: Any): string;
export declare function anyFromJSON(jsonString: string): SafeParseResult<Any, SDKValidationError>;
//# sourceMappingURL=any.d.ts.map