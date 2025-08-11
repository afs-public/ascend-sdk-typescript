import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { NegativeNewsUpdate, NegativeNewsUpdate$Outbound } from "./negativenewsupdate.js";
/**
 * Due Diligence for Legal Entities required when a Legal Entity is the Primary Owner on an Account.
 */
export type EntityDueDiligenceUpdate = {
    /**
     * Indicates whether the entity issues bearer shares
     */
    entityIssuesBearerShares?: boolean | undefined;
    /**
     * Negative News detail.
     */
    negativeNews?: NegativeNewsUpdate | undefined;
};
/** @internal */
export declare const EntityDueDiligenceUpdate$inboundSchema: z.ZodType<EntityDueDiligenceUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntityDueDiligenceUpdate$Outbound = {
    entity_issues_bearer_shares?: boolean | undefined;
    negative_news?: NegativeNewsUpdate$Outbound | undefined;
};
/** @internal */
export declare const EntityDueDiligenceUpdate$outboundSchema: z.ZodType<EntityDueDiligenceUpdate$Outbound, z.ZodTypeDef, EntityDueDiligenceUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityDueDiligenceUpdate$ {
    /** @deprecated use `EntityDueDiligenceUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityDueDiligenceUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityDueDiligenceUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityDueDiligenceUpdate$Outbound, z.ZodTypeDef, EntityDueDiligenceUpdate>;
    /** @deprecated use `EntityDueDiligenceUpdate$Outbound` instead. */
    type Outbound = EntityDueDiligenceUpdate$Outbound;
}
export declare function entityDueDiligenceUpdateToJSON(entityDueDiligenceUpdate: EntityDueDiligenceUpdate): string;
export declare function entityDueDiligenceUpdateFromJSON(jsonString: string): SafeParseResult<EntityDueDiligenceUpdate, SDKValidationError>;
//# sourceMappingURL=entityduediligenceupdate.d.ts.map