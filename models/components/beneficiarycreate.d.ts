import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
import { PhoneNumberCreate, PhoneNumberCreate$Outbound } from "./phonenumbercreate.js";
import { PostalAddressCreate, PostalAddressCreate$Outbound } from "./postaladdresscreate.js";
/**
 * The entity type of the beneficiary; Required if the beneficiary is a legal entity.
 */
export declare enum BeneficiaryCreateEntityType {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    Corporation = "CORPORATION",
    LimitedLiabilityCompany = "LIMITED_LIABILITY_COMPANY",
    Partnership = "PARTNERSHIP",
    Trust = "TRUST",
    Estate = "ESTATE"
}
/**
 * The entity type of the beneficiary; Required if the beneficiary is a legal entity.
 */
export type BeneficiaryCreateEntityTypeOpen = OpenEnum<typeof BeneficiaryCreateEntityType>;
/**
 * The relationship of the beneficiary to the account owner
 */
export declare enum BeneficiaryCreateRelationType {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Spouse = "SPOUSE",
    Trust = "TRUST",
    Other = "OTHER"
}
/**
 * The relationship of the beneficiary to the account owner
 */
export type BeneficiaryCreateRelationTypeOpen = OpenEnum<typeof BeneficiaryCreateRelationType>;
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.
 */
export declare enum BeneficiaryCreateTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.
 */
export type BeneficiaryCreateTaxIdTypeOpen = OpenEnum<typeof BeneficiaryCreateTaxIdType>;
/**
 * The beneficiary for transfer on death.
 */
export type BeneficiaryCreate = {
    /**
     * An integer conveying the percentage of interest the related Beneficiary has in the account if the owner(s) become deceased; The sum of all beneficiary percentages must equal "100"
     */
    beneficiaryPercentage: number;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    birthDate?: DateCreate | undefined;
    /**
     * Beneficiaries may provide an email, a mailing_address, or both An email address indicated for account communications
     */
    email?: string | undefined;
    /**
     * The legal entity name; Required if the beneficiary is a legal entity.
     */
    entityName?: string | undefined;
    /**
     * The entity type of the beneficiary; Required if the beneficiary is a legal entity.
     */
    entityType?: BeneficiaryCreateEntityTypeOpen | undefined;
    /**
     * Family name of a natural person; Required if the beneficiary is a natural person.
     */
    familyName?: string | undefined;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries.Required if the beneficiary is a natural person.
     */
    givenName?: string | undefined;
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
    mailingAddress?: PostalAddressCreate | undefined;
    /**
     * Non-primary names representing a natural person; Name attributed to a person other than "Given" and "Family" names.
     */
    middleNames?: string | undefined;
    /**
     * An object representing a phone number, suitable as an API wire format.
     *
     * @remarks
     *
     *  This representation:
     *
     *  - should not be used for locale-specific formatting of a phone number, such  as "+1 (650) 253-0000 ext. 123"
     *
     *  - is not designed for efficient storage - may not be suitable for dialing - specialized libraries (see references)  should be used to parse the number for that purpose
     *
     *  To do something meaningful with this number, such as format it for various use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.
     *
     *  For instance, in Java this would be:
     *
     *   com.google.type.PhoneNumber wireProto =    com.google.type.PhoneNumber.newBuilder().build();  com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =    PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");  if (!wireProto.getExtension().isEmpty()) {   phoneNumber.setExtension(wireProto.getExtension());  }
     *
     *  Reference(s):
     *   - https://github.com/google/libphonenumber
     */
    phoneNumber?: PhoneNumberCreate | undefined;
    /**
     * The relationship of the beneficiary to the account owner
     */
    relationType: BeneficiaryCreateRelationTypeOpen;
    /**
     * The full U.S. tax ID for a related person; Tax ID is required if birth date is not provided.
     */
    taxId?: string | undefined;
    /**
     * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.
     */
    taxIdType?: BeneficiaryCreateTaxIdTypeOpen | undefined;
};
/** @internal */
export declare const BeneficiaryCreateEntityType$inboundSchema: z.ZodType<BeneficiaryCreateEntityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BeneficiaryCreateEntityType$outboundSchema: z.ZodType<BeneficiaryCreateEntityTypeOpen, z.ZodTypeDef, BeneficiaryCreateEntityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryCreateEntityType$ {
    /** @deprecated use `BeneficiaryCreateEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryCreateEntityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryCreateEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryCreateEntityTypeOpen, z.ZodTypeDef, BeneficiaryCreateEntityTypeOpen>;
}
/** @internal */
export declare const BeneficiaryCreateRelationType$inboundSchema: z.ZodType<BeneficiaryCreateRelationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BeneficiaryCreateRelationType$outboundSchema: z.ZodType<BeneficiaryCreateRelationTypeOpen, z.ZodTypeDef, BeneficiaryCreateRelationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryCreateRelationType$ {
    /** @deprecated use `BeneficiaryCreateRelationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryCreateRelationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryCreateRelationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryCreateRelationTypeOpen, z.ZodTypeDef, BeneficiaryCreateRelationTypeOpen>;
}
/** @internal */
export declare const BeneficiaryCreateTaxIdType$inboundSchema: z.ZodType<BeneficiaryCreateTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BeneficiaryCreateTaxIdType$outboundSchema: z.ZodType<BeneficiaryCreateTaxIdTypeOpen, z.ZodTypeDef, BeneficiaryCreateTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryCreateTaxIdType$ {
    /** @deprecated use `BeneficiaryCreateTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryCreateTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryCreateTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryCreateTaxIdTypeOpen, z.ZodTypeDef, BeneficiaryCreateTaxIdTypeOpen>;
}
/** @internal */
export declare const BeneficiaryCreate$inboundSchema: z.ZodType<BeneficiaryCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BeneficiaryCreate$Outbound = {
    beneficiary_percentage: number;
    birth_date?: DateCreate$Outbound | undefined;
    email?: string | undefined;
    entity_name?: string | undefined;
    entity_type?: string | undefined;
    family_name?: string | undefined;
    given_name?: string | undefined;
    mailing_address?: PostalAddressCreate$Outbound | undefined;
    middle_names?: string | undefined;
    phone_number?: PhoneNumberCreate$Outbound | undefined;
    relation_type: string;
    tax_id?: string | undefined;
    tax_id_type?: string | undefined;
};
/** @internal */
export declare const BeneficiaryCreate$outboundSchema: z.ZodType<BeneficiaryCreate$Outbound, z.ZodTypeDef, BeneficiaryCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryCreate$ {
    /** @deprecated use `BeneficiaryCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryCreate$Outbound, z.ZodTypeDef, BeneficiaryCreate>;
    /** @deprecated use `BeneficiaryCreate$Outbound` instead. */
    type Outbound = BeneficiaryCreate$Outbound;
}
//# sourceMappingURL=beneficiarycreate.d.ts.map