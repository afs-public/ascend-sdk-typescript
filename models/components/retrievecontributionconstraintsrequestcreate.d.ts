import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Cash transfer mechanism to search constraints for
 */
export declare enum Mechanism {
    Ach = "ACH",
    Ict = "ICT"
}
/**
 * Cash transfer mechanism to search constraints for
 */
export type MechanismOpen = OpenEnum<typeof Mechanism>;
/**
 * Request to retrieve retirement contribution constraints
 */
export type RetrieveContributionConstraintsRequestCreate = {
    /**
     * Cash transfer mechanism to search constraints for
     */
    mechanism: MechanismOpen;
    /**
     * Name of the account being queried, for retirement contribution constraints Format: accounts/{account}
     */
    name: string;
};
/** @internal */
export declare const Mechanism$inboundSchema: z.ZodType<MechanismOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Mechanism$outboundSchema: z.ZodType<MechanismOpen, z.ZodTypeDef, MechanismOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Mechanism$ {
    /** @deprecated use `Mechanism$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MechanismOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Mechanism$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MechanismOpen, z.ZodTypeDef, MechanismOpen>;
}
/** @internal */
export declare const RetrieveContributionConstraintsRequestCreate$inboundSchema: z.ZodType<RetrieveContributionConstraintsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveContributionConstraintsRequestCreate$Outbound = {
    mechanism: string;
    name: string;
};
/** @internal */
export declare const RetrieveContributionConstraintsRequestCreate$outboundSchema: z.ZodType<RetrieveContributionConstraintsRequestCreate$Outbound, z.ZodTypeDef, RetrieveContributionConstraintsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveContributionConstraintsRequestCreate$ {
    /** @deprecated use `RetrieveContributionConstraintsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveContributionConstraintsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveContributionConstraintsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveContributionConstraintsRequestCreate$Outbound, z.ZodTypeDef, RetrieveContributionConstraintsRequestCreate>;
    /** @deprecated use `RetrieveContributionConstraintsRequestCreate$Outbound` instead. */
    type Outbound = RetrieveContributionConstraintsRequestCreate$Outbound;
}
//# sourceMappingURL=retrievecontributionconstraintsrequestcreate.d.ts.map