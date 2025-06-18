import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { PhoneNumberUpdate, PhoneNumberUpdate$Outbound } from "./phonenumberupdate.js";
import { PostalAddressUpdate, PostalAddressUpdate$Outbound } from "./postaladdressupdate.js";
/**
 * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyRequestUpdateProspectusDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyRequestUpdateProspectusDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestUpdateProspectusDeliveryPreference>;
/**
 * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyRequestUpdateProxyDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyRequestUpdateProxyDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestUpdateProxyDeliveryPreference>;
/**
 * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
 */
export declare enum PartyRequestUpdateRelationType {
    PartyRelationTypeUnspecified = "PARTY_RELATION_TYPE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    JointOwner = "JOINT_OWNER",
    Custodian = "CUSTODIAN",
    Executor = "EXECUTOR",
    AuthorizedSigner = "AUTHORIZED_SIGNER",
    BeneficialOwner = "BENEFICIAL_OWNER",
    ControlPerson = "CONTROL_PERSON",
    AuthorizedRepresentative = "AUTHORIZED_REPRESENTATIVE",
    Trustee = "TRUSTEE",
    AuthTrusteeRep = "AUTH_TRUSTEE_REP"
}
/**
 * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
 */
export type PartyRequestUpdateRelationTypeOpen = OpenEnum<typeof PartyRequestUpdateRelationType>;
/**
 * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyRequestUpdateStatementDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyRequestUpdateStatementDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestUpdateStatementDeliveryPreference>;
/**
 * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
 */
export declare enum PartyRequestUpdateTaxDocumentDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
 */
export type PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestUpdateTaxDocumentDeliveryPreference>;
/**
 * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyRequestUpdateTradeConfirmationDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestUpdateTradeConfirmationDeliveryPreference>;
/**
 * A single record representing an owner or manager of an Account. Contains fully populated Party Identity object.
 */
export type PartyRequestUpdate = {
    /**
     * An email address indicated for account communications.
     */
    emailAddress?: string | undefined;
    /**
     * Legal entity ID.
     */
    legalEntityId?: string | undefined;
    /**
     * Legal natural person ID.
     */
    legalNaturalPersonId?: string | undefined;
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
    mailingAddress?: PostalAddressUpdate | undefined;
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
    phoneNumber?: PhoneNumberUpdate | undefined;
    /**
     * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    prospectusDeliveryPreference?: PartyRequestUpdateProspectusDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    proxyDeliveryPreference?: PartyRequestUpdateProxyDeliveryPreferenceOpen | undefined;
    /**
     * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
     */
    relationType?: PartyRequestUpdateRelationTypeOpen | undefined;
    /**
     * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    statementDeliveryPreference?: PartyRequestUpdateStatementDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
     */
    taxDocumentDeliveryPreference?: PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    tradeConfirmationDeliveryPreference?: PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen | undefined;
};
/** @internal */
export declare const PartyRequestUpdateProspectusDeliveryPreference$inboundSchema: z.ZodType<PartyRequestUpdateProspectusDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestUpdateProspectusDeliveryPreference$outboundSchema: z.ZodType<PartyRequestUpdateProspectusDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateProspectusDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdateProspectusDeliveryPreference$ {
    /** @deprecated use `PartyRequestUpdateProspectusDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdateProspectusDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdateProspectusDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdateProspectusDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateProspectusDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestUpdateProxyDeliveryPreference$inboundSchema: z.ZodType<PartyRequestUpdateProxyDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestUpdateProxyDeliveryPreference$outboundSchema: z.ZodType<PartyRequestUpdateProxyDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateProxyDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdateProxyDeliveryPreference$ {
    /** @deprecated use `PartyRequestUpdateProxyDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdateProxyDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdateProxyDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdateProxyDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateProxyDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestUpdateRelationType$inboundSchema: z.ZodType<PartyRequestUpdateRelationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestUpdateRelationType$outboundSchema: z.ZodType<PartyRequestUpdateRelationTypeOpen, z.ZodTypeDef, PartyRequestUpdateRelationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdateRelationType$ {
    /** @deprecated use `PartyRequestUpdateRelationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdateRelationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdateRelationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdateRelationTypeOpen, z.ZodTypeDef, PartyRequestUpdateRelationTypeOpen>;
}
/** @internal */
export declare const PartyRequestUpdateStatementDeliveryPreference$inboundSchema: z.ZodType<PartyRequestUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestUpdateStatementDeliveryPreference$outboundSchema: z.ZodType<PartyRequestUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateStatementDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdateStatementDeliveryPreference$ {
    /** @deprecated use `PartyRequestUpdateStatementDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdateStatementDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateStatementDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestUpdateTaxDocumentDeliveryPreference$inboundSchema: z.ZodType<PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestUpdateTaxDocumentDeliveryPreference$outboundSchema: z.ZodType<PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdateTaxDocumentDeliveryPreference$ {
    /** @deprecated use `PartyRequestUpdateTaxDocumentDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdateTaxDocumentDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateTaxDocumentDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestUpdateTradeConfirmationDeliveryPreference$inboundSchema: z.ZodType<PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestUpdateTradeConfirmationDeliveryPreference$outboundSchema: z.ZodType<PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdateTradeConfirmationDeliveryPreference$ {
    /** @deprecated use `PartyRequestUpdateTradeConfirmationDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdateTradeConfirmationDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestUpdateTradeConfirmationDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestUpdate$inboundSchema: z.ZodType<PartyRequestUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyRequestUpdate$Outbound = {
    email_address?: string | undefined;
    legal_entity_id?: string | undefined;
    legal_natural_person_id?: string | undefined;
    mailing_address?: PostalAddressUpdate$Outbound | undefined;
    phone_number?: PhoneNumberUpdate$Outbound | undefined;
    prospectus_delivery_preference?: string | undefined;
    proxy_delivery_preference?: string | undefined;
    relation_type?: string | undefined;
    statement_delivery_preference?: string | undefined;
    tax_document_delivery_preference?: string | undefined;
    trade_confirmation_delivery_preference?: string | undefined;
};
/** @internal */
export declare const PartyRequestUpdate$outboundSchema: z.ZodType<PartyRequestUpdate$Outbound, z.ZodTypeDef, PartyRequestUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestUpdate$ {
    /** @deprecated use `PartyRequestUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestUpdate$Outbound, z.ZodTypeDef, PartyRequestUpdate>;
    /** @deprecated use `PartyRequestUpdate$Outbound` instead. */
    type Outbound = PartyRequestUpdate$Outbound;
}
//# sourceMappingURL=partyrequestupdate.d.ts.map