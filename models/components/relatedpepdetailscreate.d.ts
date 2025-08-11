import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RelatedPepCreate, RelatedPepCreate$Outbound } from "./relatedpepcreate.js";
/**
 * Details surrounding the related politically exposed persons
 */
export type RelatedPepDetailsCreate = {
    /**
     * Indication as to whether or not an account has direct or indirect related politically exposed persons
     */
    directOrIndirectRelatedPeps: boolean;
    /**
     * Related Peps
     */
    relatedPeps?: Array<RelatedPepCreate> | undefined;
};
/** @internal */
export declare const RelatedPepDetailsCreate$inboundSchema: z.ZodType<RelatedPepDetailsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RelatedPepDetailsCreate$Outbound = {
    direct_or_indirect_related_peps: boolean;
    related_peps?: Array<RelatedPepCreate$Outbound> | undefined;
};
/** @internal */
export declare const RelatedPepDetailsCreate$outboundSchema: z.ZodType<RelatedPepDetailsCreate$Outbound, z.ZodTypeDef, RelatedPepDetailsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelatedPepDetailsCreate$ {
    /** @deprecated use `RelatedPepDetailsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelatedPepDetailsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelatedPepDetailsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelatedPepDetailsCreate$Outbound, z.ZodTypeDef, RelatedPepDetailsCreate>;
    /** @deprecated use `RelatedPepDetailsCreate$Outbound` instead. */
    type Outbound = RelatedPepDetailsCreate$Outbound;
}
export declare function relatedPepDetailsCreateToJSON(relatedPepDetailsCreate: RelatedPepDetailsCreate): string;
export declare function relatedPepDetailsCreateFromJSON(jsonString: string): SafeParseResult<RelatedPepDetailsCreate, SDKValidationError>;
//# sourceMappingURL=relatedpepdetailscreate.d.ts.map