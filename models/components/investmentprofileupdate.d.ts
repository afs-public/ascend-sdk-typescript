import * as z from "zod";
import { AccountGoalsUpdate, AccountGoalsUpdate$Outbound } from "./accountgoalsupdate.js";
import { CustomerProfileUpdate, CustomerProfileUpdate$Outbound } from "./customerprofileupdate.js";
/**
 * Investor profile.
 */
export type InvestmentProfileUpdate = {
    /**
     * The account goals on an investor profile.
     */
    accountGoals?: AccountGoalsUpdate | undefined;
    /**
     * A detailed summary of financial and personal details of an investor, to help understand the investor's financial standing, investment experience and risk tolerance.
     */
    customerProfile?: CustomerProfileUpdate | undefined;
};
/** @internal */
export declare const InvestmentProfileUpdate$inboundSchema: z.ZodType<InvestmentProfileUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestmentProfileUpdate$Outbound = {
    account_goals?: AccountGoalsUpdate$Outbound | undefined;
    customer_profile?: CustomerProfileUpdate$Outbound | undefined;
};
/** @internal */
export declare const InvestmentProfileUpdate$outboundSchema: z.ZodType<InvestmentProfileUpdate$Outbound, z.ZodTypeDef, InvestmentProfileUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentProfileUpdate$ {
    /** @deprecated use `InvestmentProfileUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentProfileUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentProfileUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentProfileUpdate$Outbound, z.ZodTypeDef, InvestmentProfileUpdate>;
    /** @deprecated use `InvestmentProfileUpdate$Outbound` instead. */
    type Outbound = InvestmentProfileUpdate$Outbound;
}
//# sourceMappingURL=investmentprofileupdate.d.ts.map