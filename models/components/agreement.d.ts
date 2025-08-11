import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * An internal indicator from where the agreement was generated; Typically `ACCOUNTS_SERVICE` if accessing our public APIs
 */
export declare enum AgreementSource {
    AgreementSourceUnspecified = "AGREEMENT_SOURCE_UNSPECIFIED",
    AtlasForm = "ATLAS_FORM",
    OtherSource = "OTHER_SOURCE",
    AccountsService = "ACCOUNTS_SERVICE"
}
/**
 * An internal indicator from where the agreement was generated; Typically `ACCOUNTS_SERVICE` if accessing our public APIs
 */
export type AgreementSourceOpen = OpenEnum<typeof AgreementSource>;
/**
 * The status of an agreement which blocks an enrollment; `REQUIRED` if not yet received, or `AFFIRMED` if acknowledgement has been received by AFS
 */
export declare enum AgreementState {
    AgreementStateUnspecified = "AGREEMENT_STATE_UNSPECIFIED",
    Required = "REQUIRED",
    Affirmed = "AFFIRMED",
    Voided = "VOIDED"
}
/**
 * The status of an agreement which blocks an enrollment; `REQUIRED` if not yet received, or `AFFIRMED` if acknowledgement has been received by AFS
 */
export type AgreementStateOpen = OpenEnum<typeof AgreementState>;
/**
 * A legal Agreement for an Account.
 */
export type Agreement = {
    /**
     * The time recorded relating to when a given agreement is `AFFIRMED` by the Customer; This is set to the time when the affirmation is processed by AFS
     */
    affirmationTime?: Date | null | undefined;
    /**
     * An Apex-generated identifier used to reference a single legal agreement associated with the account
     */
    agreementId?: string | undefined;
    /**
     * The friendly name of the agreement; Typically mirrors the enrollment it is attached to (e.g., `LENDING_FULLY_PAID_STOCK_LOAN`)
     */
    agreementName?: string | undefined;
    /**
     * An internal indicator from where the agreement was generated; Typically `ACCOUNTS_SERVICE` if accessing our public APIs
     */
    agreementSource?: AgreementSourceOpen | undefined;
    /**
     * The status of an agreement which blocks an enrollment; `REQUIRED` if not yet received, or `AFFIRMED` if acknowledgement has been received by AFS
     */
    agreementState?: AgreementStateOpen | undefined;
    /**
     * A URI referencing a static PDF containing the legalese of a given agreement; All agreements of the same nature link to the same publicly-available PDF.
     */
    agreementUri?: string | undefined;
    /**
     * An internal version number based on typographical revisions of the related agreement; Version numbers are automatically updated when new agreements are available and should be of no technical concern to the integrator
     */
    agreementVersion?: string | undefined;
    /**
     * A system-generated unique identifier referencing a single instance of an enrollment; Used to access the record after creation
     */
    enrollmentId?: string | undefined;
    /**
     * References a single entity
     */
    legalEntityId?: string | undefined;
    /**
     * References a single natural person
     */
    legalNaturalPersonId?: string | undefined;
    /**
     * The name field Format: accounts/{account}/agreements/{agreement}
     */
    name?: string | undefined;
};
/** @internal */
export declare const AgreementSource$inboundSchema: z.ZodType<AgreementSourceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AgreementSource$outboundSchema: z.ZodType<AgreementSourceOpen, z.ZodTypeDef, AgreementSourceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AgreementSource$ {
    /** @deprecated use `AgreementSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AgreementSourceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AgreementSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AgreementSourceOpen, z.ZodTypeDef, AgreementSourceOpen>;
}
/** @internal */
export declare const AgreementState$inboundSchema: z.ZodType<AgreementStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AgreementState$outboundSchema: z.ZodType<AgreementStateOpen, z.ZodTypeDef, AgreementStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AgreementState$ {
    /** @deprecated use `AgreementState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AgreementStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AgreementState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AgreementStateOpen, z.ZodTypeDef, AgreementStateOpen>;
}
/** @internal */
export declare const Agreement$inboundSchema: z.ZodType<Agreement, z.ZodTypeDef, unknown>;
/** @internal */
export type Agreement$Outbound = {
    affirmation_time?: string | null | undefined;
    agreement_id?: string | undefined;
    agreement_name?: string | undefined;
    agreement_source?: string | undefined;
    agreement_state?: string | undefined;
    agreement_uri?: string | undefined;
    agreement_version?: string | undefined;
    enrollment_id?: string | undefined;
    legal_entity_id?: string | undefined;
    legal_natural_person_id?: string | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const Agreement$outboundSchema: z.ZodType<Agreement$Outbound, z.ZodTypeDef, Agreement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Agreement$ {
    /** @deprecated use `Agreement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Agreement, z.ZodTypeDef, unknown>;
    /** @deprecated use `Agreement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Agreement$Outbound, z.ZodTypeDef, Agreement>;
    /** @deprecated use `Agreement$Outbound` instead. */
    type Outbound = Agreement$Outbound;
}
export declare function agreementToJSON(agreement: Agreement): string;
export declare function agreementFromJSON(jsonString: string): SafeParseResult<Agreement, SDKValidationError>;
//# sourceMappingURL=agreement.d.ts.map