import * as z from "zod";
import * as components from "../components/index.js";
export type CreditsCreateCreditRequest = {
    /**
     * The account id.
     */
    accountId: string;
    transfersCreditCreate: components.TransfersCreditCreate;
};
export type CreditsCreateCreditResponse = {
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
export declare const CreditsCreateCreditRequest$inboundSchema: z.ZodType<CreditsCreateCreditRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreditsCreateCreditRequest$Outbound = {
    account_id: string;
    TransfersCreditCreate: components.TransfersCreditCreate$Outbound;
};
/** @internal */
export declare const CreditsCreateCreditRequest$outboundSchema: z.ZodType<CreditsCreateCreditRequest$Outbound, z.ZodTypeDef, CreditsCreateCreditRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditsCreateCreditRequest$ {
    /** @deprecated use `CreditsCreateCreditRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditsCreateCreditRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditsCreateCreditRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditsCreateCreditRequest$Outbound, z.ZodTypeDef, CreditsCreateCreditRequest>;
    /** @deprecated use `CreditsCreateCreditRequest$Outbound` instead. */
    type Outbound = CreditsCreateCreditRequest$Outbound;
}
/** @internal */
export declare const CreditsCreateCreditResponse$inboundSchema: z.ZodType<CreditsCreateCreditResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreditsCreateCreditResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TransfersCredit?: components.TransfersCredit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CreditsCreateCreditResponse$outboundSchema: z.ZodType<CreditsCreateCreditResponse$Outbound, z.ZodTypeDef, CreditsCreateCreditResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditsCreateCreditResponse$ {
    /** @deprecated use `CreditsCreateCreditResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditsCreateCreditResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditsCreateCreditResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditsCreateCreditResponse$Outbound, z.ZodTypeDef, CreditsCreateCreditResponse>;
    /** @deprecated use `CreditsCreateCreditResponse$Outbound` instead. */
    type Outbound = CreditsCreateCreditResponse$Outbound;
}
//# sourceMappingURL=creditscreatecredit.d.ts.map