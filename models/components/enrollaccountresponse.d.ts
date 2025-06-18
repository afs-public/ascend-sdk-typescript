import * as z from "zod";
import { Agreement, Agreement$Outbound } from "./agreement.js";
/**
 * The response for enrolling an account.
 */
export type EnrollAccountResponse = {
    /**
     * The collection of legal agreements that require affirmation to enroll the account in a program.
     */
    agreements?: Array<Agreement> | undefined;
};
/** @internal */
export declare const EnrollAccountResponse$inboundSchema: z.ZodType<EnrollAccountResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollAccountResponse$Outbound = {
    agreements?: Array<Agreement$Outbound> | undefined;
};
/** @internal */
export declare const EnrollAccountResponse$outboundSchema: z.ZodType<EnrollAccountResponse$Outbound, z.ZodTypeDef, EnrollAccountResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollAccountResponse$ {
    /** @deprecated use `EnrollAccountResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollAccountResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollAccountResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollAccountResponse$Outbound, z.ZodTypeDef, EnrollAccountResponse>;
    /** @deprecated use `EnrollAccountResponse$Outbound` instead. */
    type Outbound = EnrollAccountResponse$Outbound;
}
//# sourceMappingURL=enrollaccountresponse.d.ts.map