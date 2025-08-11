import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Percentages for FPSL Enrollment, must equal 100
 */
export type FPSLEnrollmentMetaDataCreate = {};
/** @internal */
export declare const FPSLEnrollmentMetaDataCreate$inboundSchema: z.ZodType<FPSLEnrollmentMetaDataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type FPSLEnrollmentMetaDataCreate$Outbound = {};
/** @internal */
export declare const FPSLEnrollmentMetaDataCreate$outboundSchema: z.ZodType<FPSLEnrollmentMetaDataCreate$Outbound, z.ZodTypeDef, FPSLEnrollmentMetaDataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FPSLEnrollmentMetaDataCreate$ {
    /** @deprecated use `FPSLEnrollmentMetaDataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FPSLEnrollmentMetaDataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FPSLEnrollmentMetaDataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FPSLEnrollmentMetaDataCreate$Outbound, z.ZodTypeDef, FPSLEnrollmentMetaDataCreate>;
    /** @deprecated use `FPSLEnrollmentMetaDataCreate$Outbound` instead. */
    type Outbound = FPSLEnrollmentMetaDataCreate$Outbound;
}
export declare function fpslEnrollmentMetaDataCreateToJSON(fpslEnrollmentMetaDataCreate: FPSLEnrollmentMetaDataCreate): string;
export declare function fpslEnrollmentMetaDataCreateFromJSON(jsonString: string): SafeParseResult<FPSLEnrollmentMetaDataCreate, SDKValidationError>;
//# sourceMappingURL=fpslenrollmentmetadatacreate.d.ts.map