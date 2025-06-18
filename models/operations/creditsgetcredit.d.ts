import * as z from "zod";
import * as components from "../components/index.js";
export type CreditsGetCreditRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The credit id.
     */
    creditId: string;
};
export type CreditsGetCreditResponse = {
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
export declare const CreditsGetCreditRequest$inboundSchema: z.ZodType<CreditsGetCreditRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreditsGetCreditRequest$Outbound = {
    account_id: string;
    credit_id: string;
};
/** @internal */
export declare const CreditsGetCreditRequest$outboundSchema: z.ZodType<CreditsGetCreditRequest$Outbound, z.ZodTypeDef, CreditsGetCreditRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditsGetCreditRequest$ {
    /** @deprecated use `CreditsGetCreditRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditsGetCreditRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditsGetCreditRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditsGetCreditRequest$Outbound, z.ZodTypeDef, CreditsGetCreditRequest>;
    /** @deprecated use `CreditsGetCreditRequest$Outbound` instead. */
    type Outbound = CreditsGetCreditRequest$Outbound;
}
/** @internal */
export declare const CreditsGetCreditResponse$inboundSchema: z.ZodType<CreditsGetCreditResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreditsGetCreditResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TransfersCredit?: components.TransfersCredit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CreditsGetCreditResponse$outboundSchema: z.ZodType<CreditsGetCreditResponse$Outbound, z.ZodTypeDef, CreditsGetCreditResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditsGetCreditResponse$ {
    /** @deprecated use `CreditsGetCreditResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditsGetCreditResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditsGetCreditResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditsGetCreditResponse$Outbound, z.ZodTypeDef, CreditsGetCreditResponse>;
    /** @deprecated use `CreditsGetCreditResponse$Outbound` instead. */
    type Outbound = CreditsGetCreditResponse$Outbound;
}
//# sourceMappingURL=creditsgetcredit.d.ts.map