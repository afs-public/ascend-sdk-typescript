import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EstateEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof EstateEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Enrollment metadata for estate enrollments
 */
export type EstateEnrollmentMetadataCreate = {
    /**
     * The document id for the certificate of appointment
     */
    certificateOfAppointmentDocumentId?: string | undefined;
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
};
/** @internal */
export declare const EstateEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EstateEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstateEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `EstateEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstateEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EstateEnrollmentMetadataCreate$inboundSchema: z.ZodType<EstateEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EstateEnrollmentMetadataCreate$Outbound = {
    certificate_of_appointment_document_id?: string | undefined;
    dividend_reinvestment_plan?: string | undefined;
};
/** @internal */
export declare const EstateEnrollmentMetadataCreate$outboundSchema: z.ZodType<EstateEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, EstateEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstateEnrollmentMetadataCreate$ {
    /** @deprecated use `EstateEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstateEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstateEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstateEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, EstateEnrollmentMetadataCreate>;
    /** @deprecated use `EstateEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = EstateEnrollmentMetadataCreate$Outbound;
}
export declare function estateEnrollmentMetadataCreateToJSON(estateEnrollmentMetadataCreate: EstateEnrollmentMetadataCreate): string;
export declare function estateEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<EstateEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=estateenrollmentmetadatacreate.d.ts.map