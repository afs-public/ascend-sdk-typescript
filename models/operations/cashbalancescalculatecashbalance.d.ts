import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The withdraw mechanism to calculate the balance for. The mechanism determines what account activity will affect the balance.
 */
export declare enum Mechanism {
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
export type CashBalancesCalculateCashBalanceRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The withdraw mechanism to calculate the balance for. The mechanism determines what account activity will affect the balance.
     */
    mechanism?: Mechanism | undefined;
};
export type CashBalancesCalculateCashBalanceResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    calculateCashBalanceResponse?: components.CalculateCashBalanceResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const Mechanism$inboundSchema: z.ZodNativeEnum<typeof Mechanism>;
/** @internal */
export declare const Mechanism$outboundSchema: z.ZodNativeEnum<typeof Mechanism>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Mechanism$ {
    /** @deprecated use `Mechanism$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<typeof Mechanism>;
    /** @deprecated use `Mechanism$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<typeof Mechanism>;
}
/** @internal */
export declare const CashBalancesCalculateCashBalanceRequest$inboundSchema: z.ZodType<CashBalancesCalculateCashBalanceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CashBalancesCalculateCashBalanceRequest$Outbound = {
    account_id: string;
    mechanism?: string | undefined;
};
/** @internal */
export declare const CashBalancesCalculateCashBalanceRequest$outboundSchema: z.ZodType<CashBalancesCalculateCashBalanceRequest$Outbound, z.ZodTypeDef, CashBalancesCalculateCashBalanceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashBalancesCalculateCashBalanceRequest$ {
    /** @deprecated use `CashBalancesCalculateCashBalanceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashBalancesCalculateCashBalanceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashBalancesCalculateCashBalanceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashBalancesCalculateCashBalanceRequest$Outbound, z.ZodTypeDef, CashBalancesCalculateCashBalanceRequest>;
    /** @deprecated use `CashBalancesCalculateCashBalanceRequest$Outbound` instead. */
    type Outbound = CashBalancesCalculateCashBalanceRequest$Outbound;
}
export declare function cashBalancesCalculateCashBalanceRequestToJSON(cashBalancesCalculateCashBalanceRequest: CashBalancesCalculateCashBalanceRequest): string;
export declare function cashBalancesCalculateCashBalanceRequestFromJSON(jsonString: string): SafeParseResult<CashBalancesCalculateCashBalanceRequest, SDKValidationError>;
/** @internal */
export declare const CashBalancesCalculateCashBalanceResponse$inboundSchema: z.ZodType<CashBalancesCalculateCashBalanceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashBalancesCalculateCashBalanceResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CalculateCashBalanceResponse?: components.CalculateCashBalanceResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashBalancesCalculateCashBalanceResponse$outboundSchema: z.ZodType<CashBalancesCalculateCashBalanceResponse$Outbound, z.ZodTypeDef, CashBalancesCalculateCashBalanceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashBalancesCalculateCashBalanceResponse$ {
    /** @deprecated use `CashBalancesCalculateCashBalanceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashBalancesCalculateCashBalanceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashBalancesCalculateCashBalanceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashBalancesCalculateCashBalanceResponse$Outbound, z.ZodTypeDef, CashBalancesCalculateCashBalanceResponse>;
    /** @deprecated use `CashBalancesCalculateCashBalanceResponse$Outbound` instead. */
    type Outbound = CashBalancesCalculateCashBalanceResponse$Outbound;
}
export declare function cashBalancesCalculateCashBalanceResponseToJSON(cashBalancesCalculateCashBalanceResponse: CashBalancesCalculateCashBalanceResponse): string;
export declare function cashBalancesCalculateCashBalanceResponseFromJSON(jsonString: string): SafeParseResult<CashBalancesCalculateCashBalanceResponse, SDKValidationError>;
//# sourceMappingURL=cashbalancescalculatecashbalance.d.ts.map