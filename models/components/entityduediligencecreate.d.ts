import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { NegativeNewsCreate, NegativeNewsCreate$Outbound } from "./negativenewscreate.js";
/**
 * Due Diligence for Legal Entities required when a Legal Entity is the Primary Owner on an Account.
 */
export type EntityDueDiligenceCreate = {
    /**
     * Indicates whether the entity issues bearer shares
     */
    entityIssuesBearerShares: boolean;
    /**
     * Negative News detail.
     */
    negativeNews: NegativeNewsCreate;
};
/** @internal */
export declare const EntityDueDiligenceCreate$inboundSchema: z.ZodType<EntityDueDiligenceCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntityDueDiligenceCreate$Outbound = {
    entity_issues_bearer_shares: boolean;
    negative_news: NegativeNewsCreate$Outbound;
};
/** @internal */
export declare const EntityDueDiligenceCreate$outboundSchema: z.ZodType<EntityDueDiligenceCreate$Outbound, z.ZodTypeDef, EntityDueDiligenceCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityDueDiligenceCreate$ {
    /** @deprecated use `EntityDueDiligenceCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityDueDiligenceCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityDueDiligenceCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityDueDiligenceCreate$Outbound, z.ZodTypeDef, EntityDueDiligenceCreate>;
    /** @deprecated use `EntityDueDiligenceCreate$Outbound` instead. */
    type Outbound = EntityDueDiligenceCreate$Outbound;
}
export declare function entityDueDiligenceCreateToJSON(entityDueDiligenceCreate: EntityDueDiligenceCreate): string;
export declare function entityDueDiligenceCreateFromJSON(jsonString: string): SafeParseResult<EntityDueDiligenceCreate, SDKValidationError>;
//# sourceMappingURL=entityduediligencecreate.d.ts.map