import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { InstitutionCreate, InstitutionCreate$Outbound } from "./institutioncreate.js";
import { TravelRuleEntityPartyCreate, TravelRuleEntityPartyCreate$Outbound } from "./travelruleentitypartycreate.js";
import { TravelRulePartyCreate, TravelRulePartyCreate$Outbound } from "./travelrulepartycreate.js";
/**
 * The travel rules associated with an ICT deposit
 */
export type IctDepositTravelRuleCreate = {
    /**
     * Travel rule entity party
     */
    entityOriginatingParty?: TravelRuleEntityPartyCreate | undefined;
    /**
     * Travel rule entity party
     */
    entityRecipientParty?: TravelRuleEntityPartyCreate | undefined;
    /**
     * Travel rule party
     */
    individualOriginatingParty?: TravelRulePartyCreate | undefined;
    /**
     * Travel rule party
     */
    individualRecipientParty?: TravelRulePartyCreate | undefined;
    /**
     * Institution representing originator or recipient of funds from an Instant Cash Transfer
     */
    originatingInstitution: InstitutionCreate;
};
/** @internal */
export declare const IctDepositTravelRuleCreate$inboundSchema: z.ZodType<IctDepositTravelRuleCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositTravelRuleCreate$Outbound = {
    entity_originating_party?: TravelRuleEntityPartyCreate$Outbound | undefined;
    entity_recipient_party?: TravelRuleEntityPartyCreate$Outbound | undefined;
    individual_originating_party?: TravelRulePartyCreate$Outbound | undefined;
    individual_recipient_party?: TravelRulePartyCreate$Outbound | undefined;
    originating_institution: InstitutionCreate$Outbound;
};
/** @internal */
export declare const IctDepositTravelRuleCreate$outboundSchema: z.ZodType<IctDepositTravelRuleCreate$Outbound, z.ZodTypeDef, IctDepositTravelRuleCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositTravelRuleCreate$ {
    /** @deprecated use `IctDepositTravelRuleCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositTravelRuleCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositTravelRuleCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositTravelRuleCreate$Outbound, z.ZodTypeDef, IctDepositTravelRuleCreate>;
    /** @deprecated use `IctDepositTravelRuleCreate$Outbound` instead. */
    type Outbound = IctDepositTravelRuleCreate$Outbound;
}
export declare function ictDepositTravelRuleCreateToJSON(ictDepositTravelRuleCreate: IctDepositTravelRuleCreate): string;
export declare function ictDepositTravelRuleCreateFromJSON(jsonString: string): SafeParseResult<IctDepositTravelRuleCreate, SDKValidationError>;
//# sourceMappingURL=ictdeposittravelrulecreate.d.ts.map