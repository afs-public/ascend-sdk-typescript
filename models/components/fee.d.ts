import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Monetary amount associated with the fee
 */
export type FeeAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of fee being assessed
 */
export declare enum FeeType {
    FeeTypeUnspecified = "FEE_TYPE_UNSPECIFIED",
    ClientClearing = "CLIENT_CLEARING",
    Liquidity = "LIQUIDITY",
    GeneralPurpose = "GENERAL_PURPOSE",
    Commission = "COMMISSION",
    Taf = "TAF",
    Sec = "SEC",
    AccountClosing = "ACCOUNT_CLOSING",
    AccountIra = "ACCOUNT_IRA",
    AchReturn = "ACH_RETURN",
    Advisory = "ADVISORY",
    CheckFee = "CHECK_FEE",
    Exchange = "EXCHANGE",
    Management = "MANAGEMENT",
    Overnight = "OVERNIGHT",
    Platform = "PLATFORM",
    Statement = "STATEMENT",
    StopPayment = "STOP_PAYMENT",
    WireFee = "WIRE_FEE",
    Inactivity = "INACTIVITY",
    AmaService = "AMA_SERVICE",
    NoticeOfChange = "NOTICE_OF_CHANGE",
    AccountTransfer = "ACCOUNT_TRANSFER",
    AgencyProcessing = "AGENCY_PROCESSING",
    RtpFee = "RTP_FEE",
    DomesticWireDepositFee = "DOMESTIC_WIRE_DEPOSIT_FEE",
    DomesticWireWithdrawalFee = "DOMESTIC_WIRE_WITHDRAWAL_FEE",
    InternationalWireDepositFee = "INTERNATIONAL_WIRE_DEPOSIT_FEE",
    InternationalWireWithdrawalFee = "INTERNATIONAL_WIRE_WITHDRAWAL_FEE",
    BrokerFee = "BROKER_FEE",
    OccFee = "OCC_FEE",
    ContractFee = "CONTRACT_FEE",
    OptionsRegulatory = "OPTIONS_REGULATORY",
    FinancialTransactionTax = "FINANCIAL_TRANSACTION_TAX",
    RegularCheckDelivery = "REGULAR_CHECK_DELIVERY",
    OvernightCheckDelivery = "OVERNIGHT_CHECK_DELIVERY",
    SaturdayCheckDelivery = "SATURDAY_CHECK_DELIVERY",
    OvernightCheckToBroker = "OVERNIGHT_CHECK_TO_BROKER",
    InternationalCheckOvernightDelivery = "INTERNATIONAL_CHECK_OVERNIGHT_DELIVERY",
    InternationalCheckRegularDelivery = "INTERNATIONAL_CHECK_REGULAR_DELIVERY",
    PrintCheckAtFirm = "PRINT_CHECK_AT_FIRM",
    VoidedCheck = "VOIDED_CHECK",
    StopPaymentAfter180Days = "STOP_PAYMENT_AFTER_180_DAYS"
}
/**
 * The type of fee being assessed
 */
export type FeeTypeOpen = OpenEnum<typeof FeeType>;
export type Fee = {
    /**
     * Monetary amount associated with the fee
     */
    amount?: FeeAmount | null | undefined;
    /**
     * The type of fee being assessed
     */
    type?: FeeTypeOpen | undefined;
};
/** @internal */
export declare const FeeAmount$inboundSchema: z.ZodType<FeeAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type FeeAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const FeeAmount$outboundSchema: z.ZodType<FeeAmount$Outbound, z.ZodTypeDef, FeeAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeeAmount$ {
    /** @deprecated use `FeeAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeeAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeeAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeeAmount$Outbound, z.ZodTypeDef, FeeAmount>;
    /** @deprecated use `FeeAmount$Outbound` instead. */
    type Outbound = FeeAmount$Outbound;
}
export declare function feeAmountToJSON(feeAmount: FeeAmount): string;
export declare function feeAmountFromJSON(jsonString: string): SafeParseResult<FeeAmount, SDKValidationError>;
/** @internal */
export declare const FeeType$inboundSchema: z.ZodType<FeeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FeeType$outboundSchema: z.ZodType<FeeTypeOpen, z.ZodTypeDef, FeeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeeType$ {
    /** @deprecated use `FeeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeeTypeOpen, z.ZodTypeDef, FeeTypeOpen>;
}
/** @internal */
export declare const Fee$inboundSchema: z.ZodType<Fee, z.ZodTypeDef, unknown>;
/** @internal */
export type Fee$Outbound = {
    amount?: FeeAmount$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Fee$outboundSchema: z.ZodType<Fee$Outbound, z.ZodTypeDef, Fee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Fee$ {
    /** @deprecated use `Fee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Fee, z.ZodTypeDef, unknown>;
    /** @deprecated use `Fee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Fee$Outbound, z.ZodTypeDef, Fee>;
    /** @deprecated use `Fee$Outbound` instead. */
    type Outbound = Fee$Outbound;
}
export declare function feeToJSON(fee: Fee): string;
export declare function feeFromJSON(jsonString: string): SafeParseResult<Fee, SDKValidationError>;
//# sourceMappingURL=fee.d.ts.map