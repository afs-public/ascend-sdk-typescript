import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This field shows settled positions that have been adjusted to account for as-of transactions (transactions recorded after their actual occurrence). Unlike the settled field, which remains unchanged for historical dates when as-of transactions are recorded, the adjusted_settled field updates to reflect what the position would have been if all transactions had been recorded on their actual dates of occurrence.
 */
export type AdjustedSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * This value reflects trade positions that have been adjusted due to the recording of transactions after their actual occurrence (as-of transactions). The key difference between this field and the trade field is that when an as-of transaction is recorded to the Ledger, the trade field will not change for historical dates, but the adjusted_trade field will update to reflect what the position would have been if the as-of transaction had been recorded on the date of its occurrence
 */
export type AdjustedTrade = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date for which positions were calculated
 */
export type DateT = {
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
 * Represents the amount of an asset that has been loaned out via the fully paid securities lending program
 */
export type PositionFpsl = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Represents the amount of an asset that is available to loan by the fully paid securities lending program.
 */
export type Free = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The most recent date a position changed in any way
 */
export type LastAdjustedDate = {
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
 * Represents the amount of cash that has been paid to an account due to a dividend or capital gain but is due to be reinvested in the security that paid the account holder
 */
export type PendingDrip = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Represents the amount of an asset that is subject to a pending outgoing account transfer, but has not completed the bookkeeping phase of that account transfer
 */
export type PendingOutgoingAcat = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Represents the amount of cash that has been requested for withdrawal but has not posted to the Ledger
 */
export type PendingWithdrawal = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * This field refers to the quantity of assets that have completed the entire clearing and settlement cycle, where ownership of the securities has been officially transferred and payment has been fully processed. The settled position includes all transactions that have been recorded in the Ledger with process_date, activity_date, and settle_date on or before the date specified in the response.
 */
export type Settled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * This field represents the total amount of an asset owned by the account including transactions that have been executed but not yet settled, commonly known as the trade date position. It includes all transactions recorded in the Ledger with process_date and activity_date on or before the date in the response, even those with future settle_dates. Unlike the settled position, which only includes completed settlements, the trade position provides a forward-looking view of ownership that accounts for pending settlements
 */
export type PositionTrade = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * This field represents the portion of a settled position that is available for trading or withdrawal without restrictions. It is calculated by subtracting positions with pending restrictions from the total settled amount (currently: settled - (pending_outgoing_acat + pending_drip + pending_withdrawal)). As new memo location categories are added to the API, Apex may update this calculation to incorporate these values. Note that the Cash and Margin systems may place additional restrictions on cash/ assets according to their business logic.
 */
export type Unrestricted = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Position
 */
export type Position = {
    /**
     * A globally unique identifier referencing a single account; this is the main identifier for an account used for machine-to-machine interactions
     */
    accountId?: string | undefined;
    /**
     * This field shows settled positions that have been adjusted to account for as-of transactions (transactions recorded after their actual occurrence). Unlike the settled field, which remains unchanged for historical dates when as-of transactions are recorded, the adjusted_settled field updates to reflect what the position would have been if all transactions had been recorded on their actual dates of occurrence.
     */
    adjustedSettled?: AdjustedSettled | null | undefined;
    /**
     * This value reflects trade positions that have been adjusted due to the recording of transactions after their actual occurrence (as-of transactions). The key difference between this field and the trade field is that when an as-of transaction is recorded to the Ledger, the trade field will not change for historical dates, but the adjusted_trade field will update to reflect what the position would have been if the as-of transaction had been recorded on the date of its occurrence
     */
    adjustedTrade?: AdjustedTrade | null | undefined;
    /**
     * An Apex-provided, global identifier created on a per asset bases which provides connectivity across all areas
     */
    assetId?: string | undefined;
    /**
     * The correspondent id associated with the account for the position
     */
    correspondentId?: string | undefined;
    /**
     * The date for which positions were calculated
     */
    date?: DateT | null | undefined;
    /**
     * Represents the amount of an asset that has been loaned out via the fully paid securities lending program
     */
    fpsl?: PositionFpsl | null | undefined;
    /**
     * Represents the amount of an asset that is available to loan by the fully paid securities lending program.
     */
    free?: Free | null | undefined;
    /**
     * The most recent date a position changed in any way
     */
    lastAdjustedDate?: LastAdjustedDate | null | undefined;
    /**
     * accounts/{account_id}/positions/{position_id}
     */
    name?: string | undefined;
    /**
     * Represents the amount of cash that has been paid to an account due to a dividend or capital gain but is due to be reinvested in the security that paid the account holder
     */
    pendingDrip?: PendingDrip | null | undefined;
    /**
     * Represents the amount of an asset that is subject to a pending outgoing account transfer, but has not completed the bookkeeping phase of that account transfer
     */
    pendingOutgoingAcat?: PendingOutgoingAcat | null | undefined;
    /**
     * Represents the amount of cash that has been requested for withdrawal but has not posted to the Ledger
     */
    pendingWithdrawal?: PendingWithdrawal | null | undefined;
    /**
     * Represents a chronologically-ordered version identifier that enables efficient position state tracking and event ordering. The system guarantees that positions from earlier dates have smaller version numbers than those from later dates
     */
    positionVersion?: string | undefined;
    /**
     * This field refers to the quantity of assets that have completed the entire clearing and settlement cycle, where ownership of the securities has been officially transferred and payment has been fully processed. The settled position includes all transactions that have been recorded in the Ledger with process_date, activity_date, and settle_date on or before the date specified in the response.
     */
    settled?: Settled | null | undefined;
    /**
     * This field represents the total amount of an asset owned by the account including transactions that have been executed but not yet settled, commonly known as the trade date position. It includes all transactions recorded in the Ledger with process_date and activity_date on or before the date in the response, even those with future settle_dates. Unlike the settled position, which only includes completed settlements, the trade position provides a forward-looking view of ownership that accounts for pending settlements
     */
    trade?: PositionTrade | null | undefined;
    /**
     * This field represents the portion of a settled position that is available for trading or withdrawal without restrictions. It is calculated by subtracting positions with pending restrictions from the total settled amount (currently: settled - (pending_outgoing_acat + pending_drip + pending_withdrawal)). As new memo location categories are added to the API, Apex may update this calculation to incorporate these values. Note that the Cash and Margin systems may place additional restrictions on cash/ assets according to their business logic.
     */
    unrestricted?: Unrestricted | null | undefined;
};
/** @internal */
export declare const AdjustedSettled$inboundSchema: z.ZodType<AdjustedSettled, z.ZodTypeDef, unknown>;
/** @internal */
export type AdjustedSettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AdjustedSettled$outboundSchema: z.ZodType<AdjustedSettled$Outbound, z.ZodTypeDef, AdjustedSettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AdjustedSettled$ {
    /** @deprecated use `AdjustedSettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AdjustedSettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `AdjustedSettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AdjustedSettled$Outbound, z.ZodTypeDef, AdjustedSettled>;
    /** @deprecated use `AdjustedSettled$Outbound` instead. */
    type Outbound = AdjustedSettled$Outbound;
}
export declare function adjustedSettledToJSON(adjustedSettled: AdjustedSettled): string;
export declare function adjustedSettledFromJSON(jsonString: string): SafeParseResult<AdjustedSettled, SDKValidationError>;
/** @internal */
export declare const AdjustedTrade$inboundSchema: z.ZodType<AdjustedTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type AdjustedTrade$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AdjustedTrade$outboundSchema: z.ZodType<AdjustedTrade$Outbound, z.ZodTypeDef, AdjustedTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AdjustedTrade$ {
    /** @deprecated use `AdjustedTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AdjustedTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `AdjustedTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AdjustedTrade$Outbound, z.ZodTypeDef, AdjustedTrade>;
    /** @deprecated use `AdjustedTrade$Outbound` instead. */
    type Outbound = AdjustedTrade$Outbound;
}
export declare function adjustedTradeToJSON(adjustedTrade: AdjustedTrade): string;
export declare function adjustedTradeFromJSON(jsonString: string): SafeParseResult<AdjustedTrade, SDKValidationError>;
/** @internal */
export declare const DateT$inboundSchema: z.ZodType<DateT, z.ZodTypeDef, unknown>;
/** @internal */
export type DateT$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const DateT$outboundSchema: z.ZodType<DateT$Outbound, z.ZodTypeDef, DateT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DateT$ {
    /** @deprecated use `DateT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DateT, z.ZodTypeDef, unknown>;
    /** @deprecated use `DateT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DateT$Outbound, z.ZodTypeDef, DateT>;
    /** @deprecated use `DateT$Outbound` instead. */
    type Outbound = DateT$Outbound;
}
export declare function dateToJSON(dateT: DateT): string;
export declare function dateFromJSON(jsonString: string): SafeParseResult<DateT, SDKValidationError>;
/** @internal */
export declare const PositionFpsl$inboundSchema: z.ZodType<PositionFpsl, z.ZodTypeDef, unknown>;
/** @internal */
export type PositionFpsl$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PositionFpsl$outboundSchema: z.ZodType<PositionFpsl$Outbound, z.ZodTypeDef, PositionFpsl>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PositionFpsl$ {
    /** @deprecated use `PositionFpsl$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PositionFpsl, z.ZodTypeDef, unknown>;
    /** @deprecated use `PositionFpsl$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PositionFpsl$Outbound, z.ZodTypeDef, PositionFpsl>;
    /** @deprecated use `PositionFpsl$Outbound` instead. */
    type Outbound = PositionFpsl$Outbound;
}
export declare function positionFpslToJSON(positionFpsl: PositionFpsl): string;
export declare function positionFpslFromJSON(jsonString: string): SafeParseResult<PositionFpsl, SDKValidationError>;
/** @internal */
export declare const Free$inboundSchema: z.ZodType<Free, z.ZodTypeDef, unknown>;
/** @internal */
export type Free$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Free$outboundSchema: z.ZodType<Free$Outbound, z.ZodTypeDef, Free>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Free$ {
    /** @deprecated use `Free$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Free, z.ZodTypeDef, unknown>;
    /** @deprecated use `Free$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Free$Outbound, z.ZodTypeDef, Free>;
    /** @deprecated use `Free$Outbound` instead. */
    type Outbound = Free$Outbound;
}
export declare function freeToJSON(free: Free): string;
export declare function freeFromJSON(jsonString: string): SafeParseResult<Free, SDKValidationError>;
/** @internal */
export declare const LastAdjustedDate$inboundSchema: z.ZodType<LastAdjustedDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LastAdjustedDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LastAdjustedDate$outboundSchema: z.ZodType<LastAdjustedDate$Outbound, z.ZodTypeDef, LastAdjustedDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LastAdjustedDate$ {
    /** @deprecated use `LastAdjustedDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LastAdjustedDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LastAdjustedDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LastAdjustedDate$Outbound, z.ZodTypeDef, LastAdjustedDate>;
    /** @deprecated use `LastAdjustedDate$Outbound` instead. */
    type Outbound = LastAdjustedDate$Outbound;
}
export declare function lastAdjustedDateToJSON(lastAdjustedDate: LastAdjustedDate): string;
export declare function lastAdjustedDateFromJSON(jsonString: string): SafeParseResult<LastAdjustedDate, SDKValidationError>;
/** @internal */
export declare const PendingDrip$inboundSchema: z.ZodType<PendingDrip, z.ZodTypeDef, unknown>;
/** @internal */
export type PendingDrip$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PendingDrip$outboundSchema: z.ZodType<PendingDrip$Outbound, z.ZodTypeDef, PendingDrip>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PendingDrip$ {
    /** @deprecated use `PendingDrip$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PendingDrip, z.ZodTypeDef, unknown>;
    /** @deprecated use `PendingDrip$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PendingDrip$Outbound, z.ZodTypeDef, PendingDrip>;
    /** @deprecated use `PendingDrip$Outbound` instead. */
    type Outbound = PendingDrip$Outbound;
}
export declare function pendingDripToJSON(pendingDrip: PendingDrip): string;
export declare function pendingDripFromJSON(jsonString: string): SafeParseResult<PendingDrip, SDKValidationError>;
/** @internal */
export declare const PendingOutgoingAcat$inboundSchema: z.ZodType<PendingOutgoingAcat, z.ZodTypeDef, unknown>;
/** @internal */
export type PendingOutgoingAcat$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PendingOutgoingAcat$outboundSchema: z.ZodType<PendingOutgoingAcat$Outbound, z.ZodTypeDef, PendingOutgoingAcat>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PendingOutgoingAcat$ {
    /** @deprecated use `PendingOutgoingAcat$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PendingOutgoingAcat, z.ZodTypeDef, unknown>;
    /** @deprecated use `PendingOutgoingAcat$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PendingOutgoingAcat$Outbound, z.ZodTypeDef, PendingOutgoingAcat>;
    /** @deprecated use `PendingOutgoingAcat$Outbound` instead. */
    type Outbound = PendingOutgoingAcat$Outbound;
}
export declare function pendingOutgoingAcatToJSON(pendingOutgoingAcat: PendingOutgoingAcat): string;
export declare function pendingOutgoingAcatFromJSON(jsonString: string): SafeParseResult<PendingOutgoingAcat, SDKValidationError>;
/** @internal */
export declare const PendingWithdrawal$inboundSchema: z.ZodType<PendingWithdrawal, z.ZodTypeDef, unknown>;
/** @internal */
export type PendingWithdrawal$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PendingWithdrawal$outboundSchema: z.ZodType<PendingWithdrawal$Outbound, z.ZodTypeDef, PendingWithdrawal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PendingWithdrawal$ {
    /** @deprecated use `PendingWithdrawal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PendingWithdrawal, z.ZodTypeDef, unknown>;
    /** @deprecated use `PendingWithdrawal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PendingWithdrawal$Outbound, z.ZodTypeDef, PendingWithdrawal>;
    /** @deprecated use `PendingWithdrawal$Outbound` instead. */
    type Outbound = PendingWithdrawal$Outbound;
}
export declare function pendingWithdrawalToJSON(pendingWithdrawal: PendingWithdrawal): string;
export declare function pendingWithdrawalFromJSON(jsonString: string): SafeParseResult<PendingWithdrawal, SDKValidationError>;
/** @internal */
export declare const Settled$inboundSchema: z.ZodType<Settled, z.ZodTypeDef, unknown>;
/** @internal */
export type Settled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Settled$outboundSchema: z.ZodType<Settled$Outbound, z.ZodTypeDef, Settled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Settled$ {
    /** @deprecated use `Settled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Settled, z.ZodTypeDef, unknown>;
    /** @deprecated use `Settled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Settled$Outbound, z.ZodTypeDef, Settled>;
    /** @deprecated use `Settled$Outbound` instead. */
    type Outbound = Settled$Outbound;
}
export declare function settledToJSON(settled: Settled): string;
export declare function settledFromJSON(jsonString: string): SafeParseResult<Settled, SDKValidationError>;
/** @internal */
export declare const PositionTrade$inboundSchema: z.ZodType<PositionTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type PositionTrade$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PositionTrade$outboundSchema: z.ZodType<PositionTrade$Outbound, z.ZodTypeDef, PositionTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PositionTrade$ {
    /** @deprecated use `PositionTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PositionTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `PositionTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PositionTrade$Outbound, z.ZodTypeDef, PositionTrade>;
    /** @deprecated use `PositionTrade$Outbound` instead. */
    type Outbound = PositionTrade$Outbound;
}
export declare function positionTradeToJSON(positionTrade: PositionTrade): string;
export declare function positionTradeFromJSON(jsonString: string): SafeParseResult<PositionTrade, SDKValidationError>;
/** @internal */
export declare const Unrestricted$inboundSchema: z.ZodType<Unrestricted, z.ZodTypeDef, unknown>;
/** @internal */
export type Unrestricted$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Unrestricted$outboundSchema: z.ZodType<Unrestricted$Outbound, z.ZodTypeDef, Unrestricted>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Unrestricted$ {
    /** @deprecated use `Unrestricted$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Unrestricted, z.ZodTypeDef, unknown>;
    /** @deprecated use `Unrestricted$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Unrestricted$Outbound, z.ZodTypeDef, Unrestricted>;
    /** @deprecated use `Unrestricted$Outbound` instead. */
    type Outbound = Unrestricted$Outbound;
}
export declare function unrestrictedToJSON(unrestricted: Unrestricted): string;
export declare function unrestrictedFromJSON(jsonString: string): SafeParseResult<Unrestricted, SDKValidationError>;
/** @internal */
export declare const Position$inboundSchema: z.ZodType<Position, z.ZodTypeDef, unknown>;
/** @internal */
export type Position$Outbound = {
    account_id?: string | undefined;
    adjusted_settled?: AdjustedSettled$Outbound | null | undefined;
    adjusted_trade?: AdjustedTrade$Outbound | null | undefined;
    asset_id?: string | undefined;
    correspondent_id?: string | undefined;
    date?: DateT$Outbound | null | undefined;
    fpsl?: PositionFpsl$Outbound | null | undefined;
    free?: Free$Outbound | null | undefined;
    last_adjusted_date?: LastAdjustedDate$Outbound | null | undefined;
    name?: string | undefined;
    pending_drip?: PendingDrip$Outbound | null | undefined;
    pending_outgoing_acat?: PendingOutgoingAcat$Outbound | null | undefined;
    pending_withdrawal?: PendingWithdrawal$Outbound | null | undefined;
    position_version?: string | undefined;
    settled?: Settled$Outbound | null | undefined;
    trade?: PositionTrade$Outbound | null | undefined;
    unrestricted?: Unrestricted$Outbound | null | undefined;
};
/** @internal */
export declare const Position$outboundSchema: z.ZodType<Position$Outbound, z.ZodTypeDef, Position>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Position$ {
    /** @deprecated use `Position$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Position, z.ZodTypeDef, unknown>;
    /** @deprecated use `Position$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Position$Outbound, z.ZodTypeDef, Position>;
    /** @deprecated use `Position$Outbound` instead. */
    type Outbound = Position$Outbound;
}
export declare function positionToJSON(position: Position): string;
export declare function positionFromJSON(jsonString: string): SafeParseResult<Position, SDKValidationError>;
//# sourceMappingURL=position.d.ts.map