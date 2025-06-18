import * as z from "zod";
import * as components from "../components/index.js";
export type CreditsCancelCreditRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The credit id.
     */
    creditId: string;
    cancelCreditRequestCreate: components.CancelCreditRequestCreate;
};
export type CreditsCancelCreditResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    transfersCredit?: components.TransfersCredit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const CreditsCancelCreditRequest$inboundSchema: z.ZodType<CreditsCancelCreditRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreditsCancelCreditRequest$Outbound = {
    account_id: string;
    credit_id: string;
    CancelCreditRequestCreate: components.CancelCreditRequestCreate$Outbound;
};
/** @internal */
export declare const CreditsCancelCreditRequest$outboundSchema: z.ZodType<CreditsCancelCreditRequest$Outbound, z.ZodTypeDef, CreditsCancelCreditRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditsCancelCreditRequest$ {
    /** @deprecated use `CreditsCancelCreditRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditsCancelCreditRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditsCancelCreditRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditsCancelCreditRequest$Outbound, z.ZodTypeDef, CreditsCancelCreditRequest>;
    /** @deprecated use `CreditsCancelCreditRequest$Outbound` instead. */
    type Outbound = CreditsCancelCreditRequest$Outbound;
}
/** @internal */
export declare const CreditsCancelCreditResponse$inboundSchema: z.ZodType<CreditsCancelCreditResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreditsCancelCreditResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TransfersCredit?: components.TransfersCredit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CreditsCancelCreditResponse$outboundSchema: z.ZodType<CreditsCancelCreditResponse$Outbound, z.ZodTypeDef, CreditsCancelCreditResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditsCancelCreditResponse$ {
    /** @deprecated use `CreditsCancelCreditResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditsCancelCreditResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditsCancelCreditResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditsCancelCreditResponse$Outbound, z.ZodTypeDef, CreditsCancelCreditResponse>;
    /** @deprecated use `CreditsCancelCreditResponse$Outbound` instead. */
    type Outbound = CreditsCancelCreditResponse$Outbound;
}
//# sourceMappingURL=creditscancelcredit.d.ts.map