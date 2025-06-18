import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { PostalAddressUpdate, PostalAddressUpdate$Outbound } from "./postaladdressupdate.js";
/**
 * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export declare enum InterestedPartyUpdateStatementDeliveryPreference {
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export type InterestedPartyUpdateStatementDeliveryPreferenceOpen = OpenEnum<typeof InterestedPartyUpdateStatementDeliveryPreference>;
/**
 * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export declare enum InterestedPartyUpdateTradeConfirmationDeliveryPreference {
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export type InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen = OpenEnum<typeof InterestedPartyUpdateTradeConfirmationDeliveryPreference>;
/**
 * An interested party.
 */
export type InterestedPartyUpdate = {
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
     * The sending address name for mailings to Interested Parties The name of an Interested Party; Used for envelope/communication addressing
     */
    recipient?: string | undefined;
    /**
     * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
     */
    statementDeliveryPreference?: InterestedPartyUpdateStatementDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
     */
    tradeConfirmationDeliveryPreference?: InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen | undefined;
};
/** @internal */
export declare const InterestedPartyUpdateStatementDeliveryPreference$inboundSchema: z.ZodType<InterestedPartyUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InterestedPartyUpdateStatementDeliveryPreference$outboundSchema: z.ZodType<InterestedPartyUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyUpdateStatementDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyUpdateStatementDeliveryPreference$ {
    /** @deprecated use `InterestedPartyUpdateStatementDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyUpdateStatementDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyUpdateStatementDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyUpdateStatementDeliveryPreferenceOpen>;
}
/** @internal */
export declare const InterestedPartyUpdateTradeConfirmationDeliveryPreference$inboundSchema: z.ZodType<InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InterestedPartyUpdateTradeConfirmationDeliveryPreference$outboundSchema: z.ZodType<InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyUpdateTradeConfirmationDeliveryPreference$ {
    /** @deprecated use `InterestedPartyUpdateTradeConfirmationDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyUpdateTradeConfirmationDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyUpdateTradeConfirmationDeliveryPreferenceOpen>;
}
/** @internal */
export declare const InterestedPartyUpdate$inboundSchema: z.ZodType<InterestedPartyUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestedPartyUpdate$Outbound = {
    mailing_address?: PostalAddressUpdate$Outbound | undefined;
    recipient?: string | undefined;
    statement_delivery_preference?: string | undefined;
    trade_confirmation_delivery_preference?: string | undefined;
};
/** @internal */
export declare const InterestedPartyUpdate$outboundSchema: z.ZodType<InterestedPartyUpdate$Outbound, z.ZodTypeDef, InterestedPartyUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyUpdate$ {
    /** @deprecated use `InterestedPartyUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyUpdate$Outbound, z.ZodTypeDef, InterestedPartyUpdate>;
    /** @deprecated use `InterestedPartyUpdate$Outbound` instead. */
    type Outbound = InterestedPartyUpdate$Outbound;
}
//# sourceMappingURL=interestedpartyupdate.d.ts.map