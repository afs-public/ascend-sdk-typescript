import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Identification details used for Dow Jones Profile details
 */
export type IdentificationDetail = {
    /**
     * Notes relating to identification
     */
    idNotes?: string | undefined;
    /**
     * Identification type
     */
    idType?: string | undefined;
    /**
     * Identification value
     */
    idValue?: string | undefined;
};
/** @internal */
export declare const IdentificationDetail$inboundSchema: z.ZodType<IdentificationDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type IdentificationDetail$Outbound = {
    id_notes?: string | undefined;
    id_type?: string | undefined;
    id_value?: string | undefined;
};
/** @internal */
export declare const IdentificationDetail$outboundSchema: z.ZodType<IdentificationDetail$Outbound, z.ZodTypeDef, IdentificationDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentificationDetail$ {
    /** @deprecated use `IdentificationDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentificationDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentificationDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentificationDetail$Outbound, z.ZodTypeDef, IdentificationDetail>;
    /** @deprecated use `IdentificationDetail$Outbound` instead. */
    type Outbound = IdentificationDetail$Outbound;
}
export declare function identificationDetailToJSON(identificationDetail: IdentificationDetail): string;
export declare function identificationDetailFromJSON(jsonString: string): SafeParseResult<IdentificationDetail, SDKValidationError>;
//# sourceMappingURL=identificationdetail.d.ts.map