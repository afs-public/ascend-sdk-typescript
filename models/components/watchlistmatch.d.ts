import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
export declare enum MatchAttributes {
    MatchAttributeUnspecified = "MATCH_ATTRIBUTE_UNSPECIFIED",
    Name = "NAME",
    PhoneNumber = "PHONE_NUMBER",
    BirthDate = "BIRTH_DATE",
    Identification = "IDENTIFICATION",
    Email = "EMAIL",
    Address = "ADDRESS"
}
export type MatchAttributesOpen = OpenEnum<typeof MatchAttributes>;
/**
 * Match state - whether or not the match is confirmed
 */
export declare enum MatchState {
    MatchUnspecified = "MATCH_UNSPECIFIED",
    ConfirmedMatch = "CONFIRMED_MATCH",
    PotentialMatch = "POTENTIAL_MATCH",
    NoMatch = "NO_MATCH",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Match state - whether or not the match is confirmed
 */
export type MatchStateOpen = OpenEnum<typeof MatchState>;
export declare enum MatchTypes {
    MatchTypeUnspecified = "MATCH_TYPE_UNSPECIFIED",
    NonOfacSanctions = "NON_OFAC_SANCTIONS",
    RelativeOrCloseAssociate = "RELATIVE_OR_CLOSE_ASSOCIATE",
    OfacSanctions = "OFAC_SANCTIONS",
    PoliticallyExposedPerson = "POLITICALLY_EXPOSED_PERSON",
    Dndb = "DNDB",
    NegativeNews = "NEGATIVE_NEWS"
}
export type MatchTypesOpen = OpenEnum<typeof MatchTypes>;
/**
 * Matched profile details
 */
export type WatchlistMatch = {
    /**
     * Identifies if the entry is active or not
     */
    active?: boolean | undefined;
    /**
     * The time the watchlist match was created
     */
    createdAt?: Date | null | undefined;
    /**
     * Identifies that a confirmed watchlist match can be excluded when calculating the related screen state
     */
    excludeFromScreening?: boolean | undefined;
    /**
     * The attributes used to identify this watchlist match
     */
    matchAttributes?: Array<MatchAttributesOpen> | undefined;
    /**
     * Match state - whether or not the match is confirmed
     */
    matchState?: MatchStateOpen | undefined;
    /**
     * The types of watchlist matches
     */
    matchTypes?: Array<MatchTypesOpen> | undefined;
    /**
     * The time the watchlist match was last updated
     */
    updatedAt?: Date | null | undefined;
    /**
     * Indicates the watchlist source for a given match
     */
    watchlistId?: string | undefined;
    /**
     * Identification number for the watchlist item that was matched
     */
    watchlistItemId?: number | undefined;
};
/** @internal */
export declare const MatchAttributes$inboundSchema: z.ZodType<MatchAttributesOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MatchAttributes$outboundSchema: z.ZodType<MatchAttributesOpen, z.ZodTypeDef, MatchAttributesOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MatchAttributes$ {
    /** @deprecated use `MatchAttributes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MatchAttributesOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `MatchAttributes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MatchAttributesOpen, z.ZodTypeDef, MatchAttributesOpen>;
}
/** @internal */
export declare const MatchState$inboundSchema: z.ZodType<MatchStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MatchState$outboundSchema: z.ZodType<MatchStateOpen, z.ZodTypeDef, MatchStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MatchState$ {
    /** @deprecated use `MatchState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MatchStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `MatchState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MatchStateOpen, z.ZodTypeDef, MatchStateOpen>;
}
/** @internal */
export declare const MatchTypes$inboundSchema: z.ZodType<MatchTypesOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MatchTypes$outboundSchema: z.ZodType<MatchTypesOpen, z.ZodTypeDef, MatchTypesOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MatchTypes$ {
    /** @deprecated use `MatchTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MatchTypesOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `MatchTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MatchTypesOpen, z.ZodTypeDef, MatchTypesOpen>;
}
/** @internal */
export declare const WatchlistMatch$inboundSchema: z.ZodType<WatchlistMatch, z.ZodTypeDef, unknown>;
/** @internal */
export type WatchlistMatch$Outbound = {
    active?: boolean | undefined;
    created_at?: string | null | undefined;
    exclude_from_screening?: boolean | undefined;
    match_attributes?: Array<string> | undefined;
    match_state?: string | undefined;
    match_types?: Array<string> | undefined;
    updated_at?: string | null | undefined;
    watchlist_id?: string | undefined;
    watchlist_item_id?: number | undefined;
};
/** @internal */
export declare const WatchlistMatch$outboundSchema: z.ZodType<WatchlistMatch$Outbound, z.ZodTypeDef, WatchlistMatch>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistMatch$ {
    /** @deprecated use `WatchlistMatch$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistMatch, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistMatch$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistMatch$Outbound, z.ZodTypeDef, WatchlistMatch>;
    /** @deprecated use `WatchlistMatch$Outbound` instead. */
    type Outbound = WatchlistMatch$Outbound;
}
//# sourceMappingURL=watchlistmatch.d.ts.map