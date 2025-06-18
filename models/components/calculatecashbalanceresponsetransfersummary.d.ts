import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The amount of the transfer in USD. The value will be positive for deposits and negative for withdrawals.
 */
export type CalculateCashBalanceResponseTransferSummaryAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The mechanism of the transfer.
 */
export declare enum CalculateCashBalanceResponseTransferSummaryMechanism {
    MechanismUnspecified = "MECHANISM_UNSPECIFIED",
    Acat = "ACAT",
    Ach = "ACH",
    CashJournal = "CASH_JOURNAL",
    Check = "CHECK",
    Credit = "CREDIT",
    Fee = "FEE",
    Ict = "ICT",
    Paypal = "PAYPAL",
    Rtp = "RTP",
    Tpj = "TPJ",
    Wire = "WIRE",
    ExternalAch = "EXTERNAL_ACH"
}
/**
 * The mechanism of the transfer.
 */
export type CalculateCashBalanceResponseTransferSummaryMechanismOpen = OpenEnum<typeof CalculateCashBalanceResponseTransferSummaryMechanism>;
/**
 * A summary of a transfer.
 */
export type CalculateCashBalanceResponseTransferSummary = {
    /**
     * The amount of the transfer in USD. The value will be positive for deposits and negative for withdrawals.
     */
    amount?: CalculateCashBalanceResponseTransferSummaryAmount | null | undefined;
    /**
     * The identifier of the transfer. The value is the last part of the transfer resource name.
     */
    id?: string | undefined;
    /**
     * The mechanism of the transfer.
     */
    mechanism?: CalculateCashBalanceResponseTransferSummaryMechanismOpen | undefined;
};
/** @internal */
export declare const CalculateCashBalanceResponseTransferSummaryAmount$inboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CalculateCashBalanceResponseTransferSummaryAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CalculateCashBalanceResponseTransferSummaryAmount$outboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryAmount$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseTransferSummaryAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CalculateCashBalanceResponseTransferSummaryAmount$ {
    /** @deprecated use `CalculateCashBalanceResponseTransferSummaryAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CalculateCashBalanceResponseTransferSummaryAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryAmount$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseTransferSummaryAmount>;
    /** @deprecated use `CalculateCashBalanceResponseTransferSummaryAmount$Outbound` instead. */
    type Outbound = CalculateCashBalanceResponseTransferSummaryAmount$Outbound;
}
/** @internal */
export declare const CalculateCashBalanceResponseTransferSummaryMechanism$inboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryMechanismOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CalculateCashBalanceResponseTransferSummaryMechanism$outboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryMechanismOpen, z.ZodTypeDef, CalculateCashBalanceResponseTransferSummaryMechanismOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CalculateCashBalanceResponseTransferSummaryMechanism$ {
    /** @deprecated use `CalculateCashBalanceResponseTransferSummaryMechanism$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryMechanismOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CalculateCashBalanceResponseTransferSummaryMechanism$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummaryMechanismOpen, z.ZodTypeDef, CalculateCashBalanceResponseTransferSummaryMechanismOpen>;
}
/** @internal */
export declare const CalculateCashBalanceResponseTransferSummary$inboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type CalculateCashBalanceResponseTransferSummary$Outbound = {
    amount?: CalculateCashBalanceResponseTransferSummaryAmount$Outbound | null | undefined;
    id?: string | undefined;
    mechanism?: string | undefined;
};
/** @internal */
export declare const CalculateCashBalanceResponseTransferSummary$outboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummary$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseTransferSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CalculateCashBalanceResponseTransferSummary$ {
    /** @deprecated use `CalculateCashBalanceResponseTransferSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `CalculateCashBalanceResponseTransferSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CalculateCashBalanceResponseTransferSummary$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseTransferSummary>;
    /** @deprecated use `CalculateCashBalanceResponseTransferSummary$Outbound` instead. */
    type Outbound = CalculateCashBalanceResponseTransferSummary$Outbound;
}
//# sourceMappingURL=calculatecashbalanceresponsetransfersummary.d.ts.map