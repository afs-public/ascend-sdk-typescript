import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * `settled` + any as of settled amounts for the date
 */
export type AdjustedSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * `trade` + any as of trade amounts for the date
 */
export type AdjustedTrade = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date for which the positions were calculated
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
 * Quantity of asset in use by the FPSL program. Should not be used by currency assets
 */
export type PositionFpsl = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Quantity of asset available for allocation for use by the FPSL program. Raw bucket values. These denote that a position is allocated to this purpose. Values may be negative
 */
export type Free = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The most recent date an adjustment occurred
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
 * Quantity of currency from a dividend being reserved for reinvestment. should not be used by non-currency assets
 */
export type PendingDrip = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Quantity/ amount of asset restricted due to an outgoing acat request
 */
export type PendingOutgoingAcat = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Quantity of currency being reserved for withdrawal. should not be used by non-currency assets
 */
export type PendingWithdrawal = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Computed fieldsOriginal Settled Position before and as-of changesComputed based on the bucket values to represet the total settled position in an account  Currently defined as `free` + `fpsl` + `pending_outgoing_acat` + `drip` + `pending_withdrawal`, but if/when new buckets are added this value will need to change to reflect them
 */
export type Settled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * original trade position
 */
export type PositionTrade = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Computed based on the bucket values to represent the total unrestricted position in an account. Will always be less than or equal to `settled`  settled - (pending_outgoing_acat + pending_drip + pending_withdrawal) ; however, if/when the API adds new buckets, Apex may adjust this to either incorporate the new value or not
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
     * `settled` + any as of settled amounts for the date
     */
    adjustedSettled?: AdjustedSettled | null | undefined;
    /**
     * `trade` + any as of trade amounts for the date
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
     * The date for which the positions were calculated
     */
    date?: DateT | null | undefined;
    /**
     * Quantity of asset in use by the FPSL program. Should not be used by currency assets
     */
    fpsl?: PositionFpsl | null | undefined;
    /**
     * Quantity of asset available for allocation for use by the FPSL program. Raw bucket values. These denote that a position is allocated to this purpose. Values may be negative
     */
    free?: Free | null | undefined;
    /**
     * The most recent date an adjustment occurred
     */
    lastAdjustedDate?: LastAdjustedDate | null | undefined;
    /**
     * accounts/{account_id}/positions/{position_id}
     */
    name?: string | undefined;
    /**
     * Quantity of currency from a dividend being reserved for reinvestment. should not be used by non-currency assets
     */
    pendingDrip?: PendingDrip | null | undefined;
    /**
     * Quantity/ amount of asset restricted due to an outgoing acat request
     */
    pendingOutgoingAcat?: PendingOutgoingAcat | null | undefined;
    /**
     * Quantity of currency being reserved for withdrawal. should not be used by non-currency assets
     */
    pendingWithdrawal?: PendingWithdrawal | null | undefined;
    /**
     * The position version for an asset/account combo. This number only increases, such that larger `position_version`s are newer than lower ones.
     */
    positionVersion?: string | undefined;
    /**
     * Computed fieldsOriginal Settled Position before and as-of changesComputed based on the bucket values to represet the total settled position in an account  Currently defined as `free` + `fpsl` + `pending_outgoing_acat` + `drip` + `pending_withdrawal`, but if/when new buckets are added this value will need to change to reflect them
     */
    settled?: Settled | null | undefined;
    /**
     * original trade position
     */
    trade?: PositionTrade | null | undefined;
    /**
     * Computed based on the bucket values to represent the total unrestricted position in an account. Will always be less than or equal to `settled`  settled - (pending_outgoing_acat + pending_drip + pending_withdrawal) ; however, if/when the API adds new buckets, Apex may adjust this to either incorporate the new value or not
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