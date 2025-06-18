import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Whether the cash journal is considered first party or third party
 */
export declare enum CheckPartyTypeResponsePartyType {
    PartyTypeUnspecified = "PARTY_TYPE_UNSPECIFIED",
    FirstParty = "FIRST_PARTY",
    ThirdParty = "THIRD_PARTY"
}
/**
 * Whether the cash journal is considered first party or third party
 */
export type CheckPartyTypeResponsePartyTypeOpen = OpenEnum<typeof CheckPartyTypeResponsePartyType>;
/**
 * Returns whether a potential cash journal will be considered first party or third party
 */
export type CheckPartyTypeResponse = {
    /**
     * Whether the cash journal is considered first party or third party
     */
    partyType?: CheckPartyTypeResponsePartyTypeOpen | undefined;
    /**
     * If cash journal is considered third party, reason for why it is considered third party
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CheckPartyTypeResponsePartyType$inboundSchema: z.ZodType<CheckPartyTypeResponsePartyTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CheckPartyTypeResponsePartyType$outboundSchema: z.ZodType<CheckPartyTypeResponsePartyTypeOpen, z.ZodTypeDef, CheckPartyTypeResponsePartyTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckPartyTypeResponsePartyType$ {
    /** @deprecated use `CheckPartyTypeResponsePartyType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckPartyTypeResponsePartyTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckPartyTypeResponsePartyType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckPartyTypeResponsePartyTypeOpen, z.ZodTypeDef, CheckPartyTypeResponsePartyTypeOpen>;
}
/** @internal */
export declare const CheckPartyTypeResponse$inboundSchema: z.ZodType<CheckPartyTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckPartyTypeResponse$Outbound = {
    party_type?: string | undefined;
    reason?: string | undefined;
};
/** @internal */
export declare const CheckPartyTypeResponse$outboundSchema: z.ZodType<CheckPartyTypeResponse$Outbound, z.ZodTypeDef, CheckPartyTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckPartyTypeResponse$ {
    /** @deprecated use `CheckPartyTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckPartyTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckPartyTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckPartyTypeResponse$Outbound, z.ZodTypeDef, CheckPartyTypeResponse>;
    /** @deprecated use `CheckPartyTypeResponse$Outbound` instead. */
    type Outbound = CheckPartyTypeResponse$Outbound;
}
//# sourceMappingURL=checkpartytyperesponse.d.ts.map