import * as z from "zod";
import * as components from "../components/index.js";
export type AchDepositsForceReturnAchDepositRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDeposit id.
     */
    achDepositId: string;
    forceReturnAchDepositRequestCreate: components.ForceReturnAchDepositRequestCreate;
};
export type AchDepositsForceReturnAchDepositResponse = {
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
export declare const AchDepositsForceReturnAchDepositRequest$inboundSchema: z.ZodType<AchDepositsForceReturnAchDepositRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceReturnAchDepositRequest$Outbound = {
    account_id: string;
    achDeposit_id: string;
    ForceReturnAchDepositRequestCreate: components.ForceReturnAchDepositRequestCreate$Outbound;
};
/** @internal */
export declare const AchDepositsForceReturnAchDepositRequest$outboundSchema: z.ZodType<AchDepositsForceReturnAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceReturnAchDepositRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceReturnAchDepositRequest$ {
    /** @deprecated use `AchDepositsForceReturnAchDepositRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceReturnAchDepositRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceReturnAchDepositRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceReturnAchDepositRequest$Outbound, z.ZodTypeDef, AchDepositsForceReturnAchDepositRequest>;
    /** @deprecated use `AchDepositsForceReturnAchDepositRequest$Outbound` instead. */
    type Outbound = AchDepositsForceReturnAchDepositRequest$Outbound;
}
/** @internal */
export declare const AchDepositsForceReturnAchDepositResponse$inboundSchema: z.ZodType<AchDepositsForceReturnAchDepositResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositsForceReturnAchDepositResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDeposit?: components.AchDeposit$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositsForceReturnAchDepositResponse$outboundSchema: z.ZodType<AchDepositsForceReturnAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceReturnAchDepositResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositsForceReturnAchDepositResponse$ {
    /** @deprecated use `AchDepositsForceReturnAchDepositResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositsForceReturnAchDepositResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositsForceReturnAchDepositResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositsForceReturnAchDepositResponse$Outbound, z.ZodTypeDef, AchDepositsForceReturnAchDepositResponse>;
    /** @deprecated use `AchDepositsForceReturnAchDepositResponse$Outbound` instead. */
    type Outbound = AchDepositsForceReturnAchDepositResponse$Outbound;
}
//# sourceMappingURL=achdepositsforcereturnachdeposit.d.ts.map