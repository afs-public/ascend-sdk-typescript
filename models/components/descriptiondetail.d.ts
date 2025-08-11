import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Description detail used for Dow Jones Profile details
 */
export type DescriptionDetail = {
    /**
     * Dow Jones persons description
     */
    descriptionOne?: string | undefined;
    /**
     * Dow Jones persons description
     */
    descriptionThree?: string | undefined;
    /**
     * Dow Jones persons description
     */
    descriptionTwo?: string | undefined;
};
/** @internal */
export declare const DescriptionDetail$inboundSchema: z.ZodType<DescriptionDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type DescriptionDetail$Outbound = {
    description_one?: string | undefined;
    description_three?: string | undefined;
    description_two?: string | undefined;
};
/** @internal */
export declare const DescriptionDetail$outboundSchema: z.ZodType<DescriptionDetail$Outbound, z.ZodTypeDef, DescriptionDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DescriptionDetail$ {
    /** @deprecated use `DescriptionDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DescriptionDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `DescriptionDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DescriptionDetail$Outbound, z.ZodTypeDef, DescriptionDetail>;
    /** @deprecated use `DescriptionDetail$Outbound` instead. */
    type Outbound = DescriptionDetail$Outbound;
}
export declare function descriptionDetailToJSON(descriptionDetail: DescriptionDetail): string;
export declare function descriptionDetailFromJSON(jsonString: string): SafeParseResult<DescriptionDetail, SDKValidationError>;
//# sourceMappingURL=descriptiondetail.d.ts.map