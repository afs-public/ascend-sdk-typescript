import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AddressDetail, AddressDetail$Outbound } from "./addressdetail.js";
import { CountryDetail, CountryDetail$Outbound } from "./countrydetail.js";
import { DescriptionDetail, DescriptionDetail$Outbound } from "./descriptiondetail.js";
import { DowJonesDate, DowJonesDate$Outbound } from "./dowjonesdate.js";
import { IdentificationDetail, IdentificationDetail$Outbound } from "./identificationdetail.js";
import { NameDetail, NameDetail$Outbound } from "./namedetail.js";
import { RelatedProfile, RelatedProfile$Outbound } from "./relatedprofile.js";
import { RoleDetail, RoleDetail$Outbound } from "./roledetail.js";
import { SanctionsListDetail, SanctionsListDetail$Outbound } from "./sanctionslistdetail.js";
/**
 * date this person was added to the DNDB list
 */
export type CreatedDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * DNDB persons date of birth
 */
export type Dob = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * date this person will be removed from the DNDB list
 */
export type EndDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Dndb details
 */
export type DndbDetails = {
    /**
     * DNDB persons business name
     */
    businessNm?: string | undefined;
    /**
     * reason why person exists in DNDB list
     */
    comments?: string | undefined;
    /**
     * person that created this record for the DNDB list
     */
    createUser?: string | undefined;
    /**
     * date this person was added to the DNDB list
     */
    createdDate?: CreatedDate | null | undefined;
    /**
     * DNDB persons date of birth
     */
    dob?: Dob | null | undefined;
    /**
     * DNDB persons email address
     */
    email?: string | undefined;
    /**
     * date this person will be removed from the DNDB list
     */
    endDate?: EndDate | null | undefined;
    /**
     * DNDB persons first name
     */
    firstNm?: string | undefined;
    /**
     * DNDB profile person id
     */
    id?: number | undefined;
    /**
     * DNDB persons last name
     */
    lastNm?: string | undefined;
    /**
     * DNDB persons middle name
     */
    middleNm?: string | undefined;
    /**
     * DNDB persons ssn number
     */
    ssn?: string | undefined;
    /**
     * DNDB persons telephone number
     */
    telephone?: string | undefined;
    /**
     * DNDB persons tin number
     */
    tin?: string | undefined;
};
/**
 * Date profile was last updated
 */
export type LastChangedDate = {
    /**
     * Day
     */
    day?: string | undefined;
    /**
     * Month
     */
    month?: string | undefined;
    /**
     * Year
     */
    year?: string | undefined;
};
/**
 * Dow Jones details
 */
export type DowJonesDetails = {
    /**
     * Active status of matched profile
     */
    activeStatus?: string | undefined;
    /**
     * Corresponding address details
     */
    addressDetails?: Array<AddressDetail> | undefined;
    /**
     * Dates of birth
     */
    birthDates?: Array<DowJonesDate> | undefined;
    /**
     * Corresponding birth places
     */
    birthPlaces?: Array<string> | undefined;
    /**
     * Corresponding country details
     */
    countryDetails?: Array<CountryDetail> | undefined;
    /**
     * If corresponding person is deceased
     */
    deceased?: string | undefined;
    /**
     * Dates of death
     */
    deceasedDates?: Array<DowJonesDate> | undefined;
    /**
     * Corresponding description details
     */
    descriptionDetails?: Array<DescriptionDetail> | undefined;
    /**
     * Dow Jones profile person id
     */
    dowJonesPersonId?: number | undefined;
    /**
     * Gender of person
     */
    gender?: string | undefined;
    /**
     * Corresponding identifications
     */
    identifications?: Array<IdentificationDetail> | undefined;
    /**
     * Images relating to profile
     */
    images?: Array<string> | undefined;
    /**
     * Date profile was last updated
     */
    lastChangedDate?: LastChangedDate | null | undefined;
    /**
     * Name details associated with profile
     */
    nameDetails?: Array<NameDetail> | undefined;
    /**
     * Associated profile notes
     */
    profileNotes?: string | undefined;
    /**
     * Related profiles
     */
    relatedProfiles?: Array<RelatedProfile> | undefined;
    /**
     * Corresponding role details
     */
    roleDetails?: Array<RoleDetail> | undefined;
    /**
     * Corresponding sanctions list details
     */
    sanctionsListDetails?: Array<SanctionsListDetail> | undefined;
    /**
     * Sources relating to profile
     */
    sources?: Array<string> | undefined;
};
/**
 * Watchlist details response
 */
export type WatchlistItem = {
    /**
     * Dndb details
     */
    dndbDetails?: DndbDetails | null | undefined;
    /**
     * Dow Jones details
     */
    dowJonesDetails?: DowJonesDetails | null | undefined;
    /**
     * The resource identifier for the WatchlistItem The format is "watchlists/{watchlist_id}/items/{watchlist_item_id}"
     */
    name?: string | undefined;
    /**
     * Indicates the watchlist source for a given match
     */
    watchlist?: string | undefined;
    /**
     * Identification number for the watchlist item that was matched
     */
    watchlistItem?: number | undefined;
};
/** @internal */
export declare const CreatedDate$inboundSchema: z.ZodType<CreatedDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CreatedDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CreatedDate$outboundSchema: z.ZodType<CreatedDate$Outbound, z.ZodTypeDef, CreatedDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreatedDate$ {
    /** @deprecated use `CreatedDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreatedDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreatedDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreatedDate$Outbound, z.ZodTypeDef, CreatedDate>;
    /** @deprecated use `CreatedDate$Outbound` instead. */
    type Outbound = CreatedDate$Outbound;
}
export declare function createdDateToJSON(createdDate: CreatedDate): string;
export declare function createdDateFromJSON(jsonString: string): SafeParseResult<CreatedDate, SDKValidationError>;
/** @internal */
export declare const Dob$inboundSchema: z.ZodType<Dob, z.ZodTypeDef, unknown>;
/** @internal */
export type Dob$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const Dob$outboundSchema: z.ZodType<Dob$Outbound, z.ZodTypeDef, Dob>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Dob$ {
    /** @deprecated use `Dob$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Dob, z.ZodTypeDef, unknown>;
    /** @deprecated use `Dob$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Dob$Outbound, z.ZodTypeDef, Dob>;
    /** @deprecated use `Dob$Outbound` instead. */
    type Outbound = Dob$Outbound;
}
export declare function dobToJSON(dob: Dob): string;
export declare function dobFromJSON(jsonString: string): SafeParseResult<Dob, SDKValidationError>;
/** @internal */
export declare const EndDate$inboundSchema: z.ZodType<EndDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EndDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EndDate$outboundSchema: z.ZodType<EndDate$Outbound, z.ZodTypeDef, EndDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EndDate$ {
    /** @deprecated use `EndDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EndDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EndDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EndDate$Outbound, z.ZodTypeDef, EndDate>;
    /** @deprecated use `EndDate$Outbound` instead. */
    type Outbound = EndDate$Outbound;
}
export declare function endDateToJSON(endDate: EndDate): string;
export declare function endDateFromJSON(jsonString: string): SafeParseResult<EndDate, SDKValidationError>;
/** @internal */
export declare const DndbDetails$inboundSchema: z.ZodType<DndbDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type DndbDetails$Outbound = {
    business_nm?: string | undefined;
    comments?: string | undefined;
    create_user?: string | undefined;
    created_date?: CreatedDate$Outbound | null | undefined;
    dob?: Dob$Outbound | null | undefined;
    email?: string | undefined;
    end_date?: EndDate$Outbound | null | undefined;
    first_nm?: string | undefined;
    id?: number | undefined;
    last_nm?: string | undefined;
    middle_nm?: string | undefined;
    ssn?: string | undefined;
    telephone?: string | undefined;
    tin?: string | undefined;
};
/** @internal */
export declare const DndbDetails$outboundSchema: z.ZodType<DndbDetails$Outbound, z.ZodTypeDef, DndbDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DndbDetails$ {
    /** @deprecated use `DndbDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DndbDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `DndbDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DndbDetails$Outbound, z.ZodTypeDef, DndbDetails>;
    /** @deprecated use `DndbDetails$Outbound` instead. */
    type Outbound = DndbDetails$Outbound;
}
export declare function dndbDetailsToJSON(dndbDetails: DndbDetails): string;
export declare function dndbDetailsFromJSON(jsonString: string): SafeParseResult<DndbDetails, SDKValidationError>;
/** @internal */
export declare const LastChangedDate$inboundSchema: z.ZodType<LastChangedDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LastChangedDate$Outbound = {
    day?: string | undefined;
    month?: string | undefined;
    year?: string | undefined;
};
/** @internal */
export declare const LastChangedDate$outboundSchema: z.ZodType<LastChangedDate$Outbound, z.ZodTypeDef, LastChangedDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LastChangedDate$ {
    /** @deprecated use `LastChangedDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LastChangedDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LastChangedDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LastChangedDate$Outbound, z.ZodTypeDef, LastChangedDate>;
    /** @deprecated use `LastChangedDate$Outbound` instead. */
    type Outbound = LastChangedDate$Outbound;
}
export declare function lastChangedDateToJSON(lastChangedDate: LastChangedDate): string;
export declare function lastChangedDateFromJSON(jsonString: string): SafeParseResult<LastChangedDate, SDKValidationError>;
/** @internal */
export declare const DowJonesDetails$inboundSchema: z.ZodType<DowJonesDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type DowJonesDetails$Outbound = {
    active_status?: string | undefined;
    address_details?: Array<AddressDetail$Outbound> | undefined;
    birth_dates?: Array<DowJonesDate$Outbound> | undefined;
    birth_places?: Array<string> | undefined;
    country_details?: Array<CountryDetail$Outbound> | undefined;
    deceased?: string | undefined;
    deceased_dates?: Array<DowJonesDate$Outbound> | undefined;
    description_details?: Array<DescriptionDetail$Outbound> | undefined;
    dow_jones_person_id?: number | undefined;
    gender?: string | undefined;
    identifications?: Array<IdentificationDetail$Outbound> | undefined;
    images?: Array<string> | undefined;
    last_changed_date?: LastChangedDate$Outbound | null | undefined;
    name_details?: Array<NameDetail$Outbound> | undefined;
    profile_notes?: string | undefined;
    related_profiles?: Array<RelatedProfile$Outbound> | undefined;
    role_details?: Array<RoleDetail$Outbound> | undefined;
    sanctions_list_details?: Array<SanctionsListDetail$Outbound> | undefined;
    sources?: Array<string> | undefined;
};
/** @internal */
export declare const DowJonesDetails$outboundSchema: z.ZodType<DowJonesDetails$Outbound, z.ZodTypeDef, DowJonesDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DowJonesDetails$ {
    /** @deprecated use `DowJonesDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DowJonesDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `DowJonesDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DowJonesDetails$Outbound, z.ZodTypeDef, DowJonesDetails>;
    /** @deprecated use `DowJonesDetails$Outbound` instead. */
    type Outbound = DowJonesDetails$Outbound;
}
export declare function dowJonesDetailsToJSON(dowJonesDetails: DowJonesDetails): string;
export declare function dowJonesDetailsFromJSON(jsonString: string): SafeParseResult<DowJonesDetails, SDKValidationError>;
/** @internal */
export declare const WatchlistItem$inboundSchema: z.ZodType<WatchlistItem, z.ZodTypeDef, unknown>;
/** @internal */
export type WatchlistItem$Outbound = {
    dndb_details?: DndbDetails$Outbound | null | undefined;
    dow_jones_details?: DowJonesDetails$Outbound | null | undefined;
    name?: string | undefined;
    watchlist?: string | undefined;
    watchlist_item?: number | undefined;
};
/** @internal */
export declare const WatchlistItem$outboundSchema: z.ZodType<WatchlistItem$Outbound, z.ZodTypeDef, WatchlistItem>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistItem$ {
    /** @deprecated use `WatchlistItem$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistItem, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistItem$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistItem$Outbound, z.ZodTypeDef, WatchlistItem>;
    /** @deprecated use `WatchlistItem$Outbound` instead. */
    type Outbound = WatchlistItem$Outbound;
}
export declare function watchlistItemToJSON(watchlistItem: WatchlistItem): string;
export declare function watchlistItemFromJSON(jsonString: string): SafeParseResult<WatchlistItem, SDKValidationError>;
//# sourceMappingURL=watchlistitem.d.ts.map