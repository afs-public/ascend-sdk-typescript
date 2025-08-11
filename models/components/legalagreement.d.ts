import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A legal Agreement for an Enrollment.
 */
export type LegalAgreement = {
    /**
     * The friendly name of the agreement; Typically mirrors the enrollment it is attached to (e.g., `LENDING_FULLY_PAID_STOCK_LOAN`)
     */
    agreementName?: string | undefined;
    /**
     * A URI referencing a static PDF containing the legalese of a given agreement; All agreements of the same nature link to the same publicly-available PDF.
     */
    agreementUri?: string | undefined;
    /**
     * An internal version number based on typographical revisions of the related agreement; Version numbers are automatically updated when new agreements are available and should be of no technical concern to the integrator
     */
    agreementVersion?: string | undefined;
};
/** @internal */
export declare const LegalAgreement$inboundSchema: z.ZodType<LegalAgreement, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalAgreement$Outbound = {
    agreement_name?: string | undefined;
    agreement_uri?: string | undefined;
    agreement_version?: string | undefined;
};
/** @internal */
export declare const LegalAgreement$outboundSchema: z.ZodType<LegalAgreement$Outbound, z.ZodTypeDef, LegalAgreement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalAgreement$ {
    /** @deprecated use `LegalAgreement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalAgreement, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalAgreement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalAgreement$Outbound, z.ZodTypeDef, LegalAgreement>;
    /** @deprecated use `LegalAgreement$Outbound` instead. */
    type Outbound = LegalAgreement$Outbound;
}
export declare function legalAgreementToJSON(legalAgreement: LegalAgreement): string;
export declare function legalAgreementFromJSON(jsonString: string): SafeParseResult<LegalAgreement, SDKValidationError>;
//# sourceMappingURL=legalagreement.d.ts.map