import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PostalAddressCreate, PostalAddressCreate$Outbound } from "./postaladdresscreate.js";
/**
 * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export declare enum StatementDeliveryPreference {
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export type StatementDeliveryPreferenceOpen = OpenEnum<typeof StatementDeliveryPreference>;
/**
 * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export declare enum TradeConfirmationDeliveryPreference {
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export type TradeConfirmationDeliveryPreferenceOpen = OpenEnum<typeof TradeConfirmationDeliveryPreference>;
/**
 * An interested party.
 */
export type InterestedPartyCreate = {
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
     * The sending address name for mailings to Interested Parties The name of an Interested Party; Used for envelope/communication addressing
     */
    recipient: string;
    /**
     * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
     */
    statementDeliveryPreference?: StatementDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
     */
    tradeConfirmationDeliveryPreference?: TradeConfirmationDeliveryPreferenceOpen | undefined;
};
/** @internal */
export declare const StatementDeliveryPreference$inboundSchema: z.ZodType<StatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const StatementDeliveryPreference$outboundSchema: z.ZodType<StatementDeliveryPreferenceOpen, z.ZodTypeDef, StatementDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StatementDeliveryPreference$ {
    /** @deprecated use `StatementDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `StatementDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StatementDeliveryPreferenceOpen, z.ZodTypeDef, StatementDeliveryPreferenceOpen>;
}
/** @internal */
export declare const TradeConfirmationDeliveryPreference$inboundSchema: z.ZodType<TradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeConfirmationDeliveryPreference$outboundSchema: z.ZodType<TradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, TradeConfirmationDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeConfirmationDeliveryPreference$ {
    /** @deprecated use `TradeConfirmationDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeConfirmationDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, TradeConfirmationDeliveryPreferenceOpen>;
}
/** @internal */
export declare const InterestedPartyCreate$inboundSchema: z.ZodType<InterestedPartyCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestedPartyCreate$Outbound = {
    mailing_address: PostalAddressCreate$Outbound;
    recipient: string;
    statement_delivery_preference?: string | undefined;
    trade_confirmation_delivery_preference?: string | undefined;
};
/** @internal */
export declare const InterestedPartyCreate$outboundSchema: z.ZodType<InterestedPartyCreate$Outbound, z.ZodTypeDef, InterestedPartyCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyCreate$ {
    /** @deprecated use `InterestedPartyCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyCreate$Outbound, z.ZodTypeDef, InterestedPartyCreate>;
    /** @deprecated use `InterestedPartyCreate$Outbound` instead. */
    type Outbound = InterestedPartyCreate$Outbound;
}
export declare function interestedPartyCreateToJSON(interestedPartyCreate: InterestedPartyCreate): string;
export declare function interestedPartyCreateFromJSON(jsonString: string): SafeParseResult<InterestedPartyCreate, SDKValidationError>;
//# sourceMappingURL=interestedpartycreate.d.ts.map