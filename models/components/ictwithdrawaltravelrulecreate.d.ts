import * as z from "zod";
import { InstitutionCreate, InstitutionCreate$Outbound } from "./institutioncreate.js";
/**
 * The travel rules associated with an ICT withdrawal
 */
export type IctWithdrawalTravelRuleCreate = {
    /**
     * Institution representing originator or recipient of funds from an Instant Cash Transfer
     */
    recipientInstitution: InstitutionCreate;
};
/** @internal */
export declare const IctWithdrawalTravelRuleCreate$inboundSchema: z.ZodType<IctWithdrawalTravelRuleCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalTravelRuleCreate$Outbound = {
    recipient_institution: InstitutionCreate$Outbound;
};
/** @internal */
export declare const IctWithdrawalTravelRuleCreate$outboundSchema: z.ZodType<IctWithdrawalTravelRuleCreate$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTravelRuleCreate$ {
    /** @deprecated use `IctWithdrawalTravelRuleCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTravelRuleCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTravelRuleCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTravelRuleCreate$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleCreate>;
    /** @deprecated use `IctWithdrawalTravelRuleCreate$Outbound` instead. */
    type Outbound = IctWithdrawalTravelRuleCreate$Outbound;
}
//# sourceMappingURL=ictwithdrawaltravelrulecreate.d.ts.map