import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DistributionConstraintsDistributionTypeInfo, DistributionConstraintsDistributionTypeInfo$Outbound } from "./distributionconstraintsdistributiontypeinfo.js";
/**
 * Retirement distribution constraints when withdrawing money from an Apex account
 */
export type DistributionConstraints = {
    /**
     * Whether a full distribution withdrawal is allowed
     */
    fullDistributionAllowed?: boolean | undefined;
    /**
     * Valid distribution types
     */
    validTypes?: Array<DistributionConstraintsDistributionTypeInfo> | undefined;
};
/** @internal */
export declare const DistributionConstraints$inboundSchema: z.ZodType<DistributionConstraints, z.ZodTypeDef, unknown>;
/** @internal */
export type DistributionConstraints$Outbound = {
    full_distribution_allowed?: boolean | undefined;
    valid_types?: Array<DistributionConstraintsDistributionTypeInfo$Outbound> | undefined;
};
/** @internal */
export declare const DistributionConstraints$outboundSchema: z.ZodType<DistributionConstraints$Outbound, z.ZodTypeDef, DistributionConstraints>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionConstraints$ {
    /** @deprecated use `DistributionConstraints$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionConstraints, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionConstraints$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionConstraints$Outbound, z.ZodTypeDef, DistributionConstraints>;
    /** @deprecated use `DistributionConstraints$Outbound` instead. */
    type Outbound = DistributionConstraints$Outbound;
}
export declare function distributionConstraintsToJSON(distributionConstraints: DistributionConstraints): string;
export declare function distributionConstraintsFromJSON(jsonString: string): SafeParseResult<DistributionConstraints, SDKValidationError>;
//# sourceMappingURL=distributionconstraints.d.ts.map