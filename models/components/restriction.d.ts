import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * An account restriction.
 */
export type Restriction = {
    /**
     * Indicates whether the restriction is active or not.
     */
    active?: boolean | undefined;
    /**
     * The plain-text reason set by a person or system explaining why the restriction was set
     */
    createReason?: string | undefined;
    /**
     * The datetime of the object's creation
     */
    createTime?: Date | null | undefined;
    /**
     * The user attributed to the restriction's placement on the account; typically expressed as an Auth user ID
     */
    createUserId?: string | undefined;
    /**
     * The plain-text reason set by a person or system explaining why the restriction was removed If the restriction is active, the reason will not be set.
     */
    endedReason?: string | undefined;
    /**
     * The datetime of a restriction's removal from an account If the restriction is active, the ended time will not be set.
     */
    endedTime?: Date | null | undefined;
    /**
     * The user attributed to the restriction's removal from the account; typically expressed as an Auth user ID If the restriction is active, the user will not be set.
     */
    endedUserId?: string | undefined;
    /**
     * A enumerated value indicating the nature of a restriction; prefixed by the concerned department (e.g., `MARGIN_CALL_VIOLATION_REG_T`); suspends related entitlements of the account until it is removed; most codes are administrated by the custodian but some are available for use by the integrator
     */
    restrictionCode?: string | undefined;
};
/** @internal */
export declare const Restriction$inboundSchema: z.ZodType<Restriction, z.ZodTypeDef, unknown>;
/** @internal */
export type Restriction$Outbound = {
    active?: boolean | undefined;
    create_reason?: string | undefined;
    create_time?: string | null | undefined;
    create_user_id?: string | undefined;
    ended_reason?: string | undefined;
    ended_time?: string | null | undefined;
    ended_user_id?: string | undefined;
    restriction_code?: string | undefined;
};
/** @internal */
export declare const Restriction$outboundSchema: z.ZodType<Restriction$Outbound, z.ZodTypeDef, Restriction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Restriction$ {
    /** @deprecated use `Restriction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Restriction, z.ZodTypeDef, unknown>;
    /** @deprecated use `Restriction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Restriction$Outbound, z.ZodTypeDef, Restriction>;
    /** @deprecated use `Restriction$Outbound` instead. */
    type Outbound = Restriction$Outbound;
}
export declare function restrictionToJSON(restriction: Restriction): string;
export declare function restrictionFromJSON(jsonString: string): SafeParseResult<Restriction, SDKValidationError>;
//# sourceMappingURL=restriction.d.ts.map