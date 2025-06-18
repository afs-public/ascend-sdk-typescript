import * as z from "zod";
import { AccountGoalsCreate, AccountGoalsCreate$Outbound } from "./accountgoalscreate.js";
import { CustomerProfileCreate, CustomerProfileCreate$Outbound } from "./customerprofilecreate.js";
/**
 * Investor profile.
 */
export type InvestmentProfileCreate = {
    /**
     * The account goals on an investor profile.
     */
    accountGoals?: AccountGoalsCreate | undefined;
    /**
     * A detailed summary of financial and personal details of an investor, to help understand the investor's financial standing, investment experience and risk tolerance.
     */
    customerProfile?: CustomerProfileCreate | undefined;
};
/** @internal */
export declare const InvestmentProfileCreate$inboundSchema: z.ZodType<InvestmentProfileCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestmentProfileCreate$Outbound = {
    account_goals?: AccountGoalsCreate$Outbound | undefined;
    customer_profile?: CustomerProfileCreate$Outbound | undefined;
};
/** @internal */
export declare const InvestmentProfileCreate$outboundSchema: z.ZodType<InvestmentProfileCreate$Outbound, z.ZodTypeDef, InvestmentProfileCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentProfileCreate$ {
    /** @deprecated use `InvestmentProfileCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentProfileCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentProfileCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentProfileCreate$Outbound, z.ZodTypeDef, InvestmentProfileCreate>;
    /** @deprecated use `InvestmentProfileCreate$Outbound` instead. */
    type Outbound = InvestmentProfileCreate$Outbound;
}
//# sourceMappingURL=investmentprofilecreate.d.ts.map