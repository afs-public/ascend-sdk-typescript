import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { PostalAddressUpdate, PostalAddressUpdate$Outbound } from "./postaladdressupdate.js";
/**
 * Classifies in what capacity (or if) the underlying natural person holds a job
 */
export declare enum EmploymentUpdateEmploymentStatus {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Employed = "EMPLOYED",
    SelfEmployed = "SELF_EMPLOYED",
    Unemployed = "UNEMPLOYED",
    Retired = "RETIRED",
    Student = "STUDENT"
}
/**
 * Classifies in what capacity (or if) the underlying natural person holds a job
 */
export type EmploymentUpdateEmploymentStatusOpen = OpenEnum<typeof EmploymentUpdateEmploymentStatus>;
/**
 * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
 */
export type EmploymentUpdate = {
    /**
     * The business name of an investor's employer.
     */
    employer?: string | undefined;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains).
     *
     * @remarks
     *
     *  In typical usage an address would be created via user input or from importing existing data, depending on the type of process.
     *
     *  Advice on address input / editing: - Use an i18n-ready address widget such as  https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of  fields outside countries where that field is used.
     *
     *  For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    employerAddress?: PostalAddressUpdate | undefined;
    /**
     * Classifies in what capacity (or if) the underlying natural person holds a job
     */
    employmentStatus?: EmploymentUpdateEmploymentStatusOpen | undefined;
    /**
     * The nature of work performed at an investor's place of employment. Required if the employment_status is `EMPLOYED` or `SELF_EMPLOYED`.
     */
    occupation?: string | undefined;
    /**
     * The start year of employment related to a person's stated employer Must be from birth year to current year, or 0 to clear start year value
     */
    startYear?: number | undefined;
};
/** @internal */
export declare const EmploymentUpdateEmploymentStatus$inboundSchema: z.ZodType<EmploymentUpdateEmploymentStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EmploymentUpdateEmploymentStatus$outboundSchema: z.ZodType<EmploymentUpdateEmploymentStatusOpen, z.ZodTypeDef, EmploymentUpdateEmploymentStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmploymentUpdateEmploymentStatus$ {
    /** @deprecated use `EmploymentUpdateEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmploymentUpdateEmploymentStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmploymentUpdateEmploymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmploymentUpdateEmploymentStatusOpen, z.ZodTypeDef, EmploymentUpdateEmploymentStatusOpen>;
}
/** @internal */
export declare const EmploymentUpdate$inboundSchema: z.ZodType<EmploymentUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type EmploymentUpdate$Outbound = {
    employer?: string | undefined;
    employer_address?: PostalAddressUpdate$Outbound | undefined;
    employment_status?: string | undefined;
    occupation?: string | undefined;
    start_year?: number | undefined;
};
/** @internal */
export declare const EmploymentUpdate$outboundSchema: z.ZodType<EmploymentUpdate$Outbound, z.ZodTypeDef, EmploymentUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmploymentUpdate$ {
    /** @deprecated use `EmploymentUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmploymentUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmploymentUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmploymentUpdate$Outbound, z.ZodTypeDef, EmploymentUpdate>;
    /** @deprecated use `EmploymentUpdate$Outbound` instead. */
    type Outbound = EmploymentUpdate$Outbound;
}
//# sourceMappingURL=employmentupdate.d.ts.map