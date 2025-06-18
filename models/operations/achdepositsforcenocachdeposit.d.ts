import * as z from "zod";
import * as components from "../components/index.js";
export type AchDepositsForceNocAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDeposit id.
     */
    achDepositId: string;
    forceNocAchDepositRequestCreate: components.ForceNocAchDepositRequestCreate;
};
export type AchDepositsForceNocAchDepositResponse = {
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
export declare const AchDepositsForceNocAchDepositRequest$inboundSchema: z.ZodType<AchDepositsForceNocAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceNocAchDepositRequest$Outbound = {
    account_id: string;
    achDeposit_id: string;
    ForceNocAchDepositRequestCreate: components.ForceNocAchDepositRequestCreate$Outbound;
};
/** @internal */
export declare const AchDepositsForceNocAchDepositRequest$outboundSchema: z.ZodType<AchDepositsForceNocAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceNocAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceNocAchDepositRequest$ {
    /** @deprecated use `AchDepositsForceNocAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceNocAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceNocAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceNocAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceNocAchDepositRequest>;
    /** @deprecated use `AchDepositsForceNocAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsForceNocAchDepositRequest$Outbound;
}
/** @internal */
export declare const AchDepositsForceNocAchDepositResponse$inboundSchema: z.ZodType<AchDepositsForceNocAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceNocAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsForceNocAchDepositResponse$outboundSchema: z.ZodType<AchDepositsForceNocAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceNocAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceNocAchDepositResponse$ {
    /** @deprecated use `AchDepositsForceNocAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceNocAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceNocAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceNocAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceNocAchDepositResponse>;
    /** @deprecated use `AchDepositsForceNocAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsForceNocAchDepositResponse$Outbound;
}
//# sourceMappingURL=achdepositsforcenocachdeposit.d.ts.map