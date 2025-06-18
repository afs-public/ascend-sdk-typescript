import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Cash transfer mechanism to search constraints for
 */
export declare enum RetrieveDistributionConstraintsRequestCreateMechanism {
    Ach = "ACH",
    Ict = "ICT"
}
/**
 * Cash transfer mechanism to search constraints for
 */
export type RetrieveDistributionConstraintsRequestCreateMechanismOpen = OpenEnum<typeof RetrieveDistributionConstraintsRequestCreateMechanism>;
/**
 * Request to retrieve retirement distribution constraints
 */
export type RetrieveDistributionConstraintsRequestCreate = {
    /**
     * Cash transfer mechanism to search constraints for
     */
    mechanism: RetrieveDistributionConstraintsRequestCreateMechanismOpen;
    /**
     * Name of the account being queried, for retirement distribution constraints Format: accounts/{account}
     */
    name: string;
};
/** @internal */
export declare const RetrieveDistributionConstraintsRequestCreateMechanism$inboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreateMechanismOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveDistributionConstraintsRequestCreateMechanism$outboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreateMechanismOpen, z.ZodTypeDef, RetrieveDistributionConstraintsRequestCreateMechanismOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveDistributionConstraintsRequestCreateMechanism$ {
    /** @deprecated use `RetrieveDistributionConstraintsRequestCreateMechanism$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreateMechanismOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveDistributionConstraintsRequestCreateMechanism$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreateMechanismOpen, z.ZodTypeDef, RetrieveDistributionConstraintsRequestCreateMechanismOpen>;
}
/** @internal */
export declare const RetrieveDistributionConstraintsRequestCreate$inboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveDistributionConstraintsRequestCreate$Outbound = {
    mechanism: string;
    name: string;
};
/** @internal */
export declare const RetrieveDistributionConstraintsRequestCreate$outboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreate$Outbound, z.ZodTypeDef, RetrieveDistributionConstraintsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveDistributionConstraintsRequestCreate$ {
    /** @deprecated use `RetrieveDistributionConstraintsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveDistributionConstraintsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveDistributionConstraintsRequestCreate$Outbound, z.ZodTypeDef, RetrieveDistributionConstraintsRequestCreate>;
    /** @deprecated use `RetrieveDistributionConstraintsRequestCreate$Outbound` instead. */
    type Outbound = RetrieveDistributionConstraintsRequestCreate$Outbound;
}
//# sourceMappingURL=retrievedistributionconstraintsrequestcreate.d.ts.map