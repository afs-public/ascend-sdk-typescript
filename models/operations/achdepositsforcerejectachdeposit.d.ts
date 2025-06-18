import * as z from "zod";
import * as components from "../components/index.js";
export type AchDepositsForceRejectAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDeposit id.
     */
    achDepositId: string;
    forceRejectAchDepositRequestCreate: components.ForceRejectAchDepositRequestCreate;
};
export type AchDepositsForceRejectAchDepositResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achDeposit?: components.AchDeposit | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchDepositsForceRejectAchDepositRequest$inboundSchema: z.ZodType<AchDepositsForceRejectAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceRejectAchDepositRequest$Outbound = {
    account_id: string;
    achDeposit_id: string;
    ForceRejectAchDepositRequestCreate: components.ForceRejectAchDepositRequestCreate$Outbound;
};
/** @internal */
export declare const AchDepositsForceRejectAchDepositRequest$outboundSchema: z.ZodType<AchDepositsForceRejectAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceRejectAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceRejectAchDepositRequest$ {
    /** @deprecated use `AchDepositsForceRejectAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceRejectAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceRejectAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceRejectAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceRejectAchDepositRequest>;
    /** @deprecated use `AchDepositsForceRejectAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsForceRejectAchDepositRequest$Outbound;
}
/** @internal */
export declare const AchDepositsForceRejectAchDepositResponse$inboundSchema: z.ZodType<AchDepositsForceRejectAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceRejectAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsForceRejectAchDepositResponse$outboundSchema: z.ZodType<AchDepositsForceRejectAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceRejectAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceRejectAchDepositResponse$ {
    /** @deprecated use `AchDepositsForceRejectAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceRejectAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceRejectAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceRejectAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceRejectAchDepositResponse>;
    /** @deprecated use `AchDepositsForceRejectAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsForceRejectAchDepositResponse$Outbound;
}
//# sourceMappingURL=achdepositsforcerejectachdeposit.d.ts.map