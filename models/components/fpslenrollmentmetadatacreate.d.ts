import * as z from "zod";
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
//# sourceMappingURL=fpslenrollmentmetadatacreate.d.ts.map