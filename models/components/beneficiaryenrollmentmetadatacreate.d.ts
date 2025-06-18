import * as z from "zod";
import { BeneficiaryCreate, BeneficiaryCreate$Outbound } from "./beneficiarycreate.js";
/**
 * Enrollment metadata for the BENEFICIARY_DESIGNATION enrollment type.
 */
export type BeneficiaryEnrollmentMetadataCreate = {
    /**
     * Contingent Beneficiary list is optional, with a maximum of five contingent beneficiaries.
     */
    contingentBeneficiaries?: Array<BeneficiaryCreate> | undefined;
    /**
     * At least one primary beneficiary must be provided, with a maximum of five primary beneficiaries.
     */
    primaryBeneficiaries: Array<BeneficiaryCreate>;
};
/** @internal */
export declare const BeneficiaryEnrollmentMetadataCreate$inboundSchema: z.ZodType<BeneficiaryEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BeneficiaryEnrollmentMetadataCreate$Outbound = {
    contingent_beneficiaries?: Array<BeneficiaryCreate$Outbound> | undefined;
    primary_beneficiaries: Array<BeneficiaryCreate$Outbound>;
};
/** @internal */
export declare const BeneficiaryEnrollmentMetadataCreate$outboundSchema: z.ZodType<BeneficiaryEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, BeneficiaryEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryEnrollmentMetadataCreate$ {
    /** @deprecated use `BeneficiaryEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, BeneficiaryEnrollmentMetadataCreate>;
    /** @deprecated use `BeneficiaryEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = BeneficiaryEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=beneficiaryenrollmentmetadatacreate.d.ts.map