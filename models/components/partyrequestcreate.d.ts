import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { PhoneNumberCreate, PhoneNumberCreate$Outbound } from "./phonenumbercreate.js";
import { PostalAddressCreate, PostalAddressCreate$Outbound } from "./postaladdresscreate.js";
/**
 * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum ProspectusDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type ProspectusDeliveryPreferenceOpen = OpenEnum<typeof ProspectusDeliveryPreference>;
/**
 * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum ProxyDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type ProxyDeliveryPreferenceOpen = OpenEnum<typeof ProxyDeliveryPreference>;
/**
 * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
 */
export declare enum RelationType {
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
export type RelationTypeOpen = OpenEnum<typeof RelationType>;
/**
 * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyRequestCreateStatementDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyRequestCreateStatementDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestCreateStatementDeliveryPreference>;
/**
 * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
 */
export declare enum TaxDocumentDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
 */
export type TaxDocumentDeliveryPreferenceOpen = OpenEnum<typeof TaxDocumentDeliveryPreference>;
/**
 * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyRequestCreateTradeConfirmationDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen = OpenEnum<typeof PartyRequestCreateTradeConfirmationDeliveryPreference>;
/**
 * A single record representing an owner or manager of an Account. Contains fully populated Party Identity object.
 */
export type PartyRequestCreate = {
    /**
     * An email address indicated for account communications.
     */
    emailAddress: string;
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
    mailingAddress: PostalAddressCreate;
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
    phoneNumber: PhoneNumberCreate;
    /**
     * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    prospectusDeliveryPreference?: ProspectusDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    proxyDeliveryPreference?: ProxyDeliveryPreferenceOpen | undefined;
    /**
     * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
     */
    relationType: RelationTypeOpen;
    /**
     * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    statementDeliveryPreference?: PartyRequestCreateStatementDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
     */
    taxDocumentDeliveryPreference?: TaxDocumentDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    tradeConfirmationDeliveryPreference?: PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen | undefined;
};
/** @internal */
export declare const ProspectusDeliveryPreference$inboundSchema: z.ZodType<ProspectusDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ProspectusDeliveryPreference$outboundSchema: z.ZodType<ProspectusDeliveryPreferenceOpen, z.ZodTypeDef, ProspectusDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProspectusDeliveryPreference$ {
    /** @deprecated use `ProspectusDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProspectusDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProspectusDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProspectusDeliveryPreferenceOpen, z.ZodTypeDef, ProspectusDeliveryPreferenceOpen>;
}
/** @internal */
export declare const ProxyDeliveryPreference$inboundSchema: z.ZodType<ProxyDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ProxyDeliveryPreference$outboundSchema: z.ZodType<ProxyDeliveryPreferenceOpen, z.ZodTypeDef, ProxyDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProxyDeliveryPreference$ {
    /** @deprecated use `ProxyDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProxyDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProxyDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProxyDeliveryPreferenceOpen, z.ZodTypeDef, ProxyDeliveryPreferenceOpen>;
}
/** @internal */
export declare const RelationType$inboundSchema: z.ZodType<RelationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RelationType$outboundSchema: z.ZodType<RelationTypeOpen, z.ZodTypeDef, RelationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelationType$ {
    /** @deprecated use `RelationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelationTypeOpen, z.ZodTypeDef, RelationTypeOpen>;
}
/** @internal */
export declare const PartyRequestCreateStatementDeliveryPreference$inboundSchema: z.ZodType<PartyRequestCreateStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestCreateStatementDeliveryPreference$outboundSchema: z.ZodType<PartyRequestCreateStatementDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestCreateStatementDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestCreateStatementDeliveryPreference$ {
    /** @deprecated use `PartyRequestCreateStatementDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestCreateStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestCreateStatementDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestCreateStatementDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestCreateStatementDeliveryPreferenceOpen>;
}
/** @internal */
export declare const TaxDocumentDeliveryPreference$inboundSchema: z.ZodType<TaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaxDocumentDeliveryPreference$outboundSchema: z.ZodType<TaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, TaxDocumentDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxDocumentDeliveryPreference$ {
    /** @deprecated use `TaxDocumentDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxDocumentDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, TaxDocumentDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestCreateTradeConfirmationDeliveryPreference$inboundSchema: z.ZodType<PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRequestCreateTradeConfirmationDeliveryPreference$outboundSchema: z.ZodType<PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestCreateTradeConfirmationDeliveryPreference$ {
    /** @deprecated use `PartyRequestCreateTradeConfirmationDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestCreateTradeConfirmationDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, PartyRequestCreateTradeConfirmationDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRequestCreate$inboundSchema: z.ZodType<PartyRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyRequestCreate$Outbound = {
    email_address: string;
    legal_entity_id?: string | undefined;
    legal_natural_person_id?: string | undefined;
    mailing_address: PostalAddressCreate$Outbound;
    phone_number: PhoneNumberCreate$Outbound;
    prospectus_delivery_preference?: string | undefined;
    proxy_delivery_preference?: string | undefined;
    relation_type: string;
    statement_delivery_preference?: string | undefined;
    tax_document_delivery_preference?: string | undefined;
    trade_confirmation_delivery_preference?: string | undefined;
};
/** @internal */
export declare const PartyRequestCreate$outboundSchema: z.ZodType<PartyRequestCreate$Outbound, z.ZodTypeDef, PartyRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRequestCreate$ {
    /** @deprecated use `PartyRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRequestCreate$Outbound, z.ZodTypeDef, PartyRequestCreate>;
    /** @deprecated use `PartyRequestCreate$Outbound` instead. */
    type Outbound = PartyRequestCreate$Outbound;
}
//# sourceMappingURL=partyrequestcreate.d.ts.map