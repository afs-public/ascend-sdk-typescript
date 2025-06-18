import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * GRANTED if it was activated via an enrollment, SUSPENDED if a restriction has temporarily disabled it, or DENIED if it has never before been GRANTED
 */
export declare enum EntitlementState {
    EntitlementStateUnspecified = "ENTITLEMENT_STATE_UNSPECIFIED",
    Granted = "GRANTED",
    Suspended = "SUSPENDED",
    Denied = "DENIED"
}
/**
 * GRANTED if it was activated via an enrollment, SUSPENDED if a restriction has temporarily disabled it, or DENIED if it has never before been GRANTED
 */
export type EntitlementStateOpen = OpenEnum<typeof EntitlementState>;
/**
 * An Entitlement for an Account. Defines what the account is allowed to do.
 */
export type Entitlement = {
    /**
     * A friendly name for the entitlement used primarily for UI display
     */
    displayName?: string | undefined;
    /**
     * The enum value of the entitlement being described; e.g., BANKING_CHECK
     */
    entitlementCode?: string | undefined;
    /**
     * A system-generated reason about why the last modification occurred - typically due to an enrollment or restriction event
     */
    lastModifiedReason?: string | undefined;
    /**
     * The last time the underlying entitlement had its status updated
     */
    lastModifiedTime?: Date | null | undefined;
    /**
     * The entitlement above the subject; A model of status inheritance exists which provides context on this value
     */
    parentEntitlements?: Array<string> | undefined;
    /**
     * GRANTED if it was activated via an enrollment, SUSPENDED if a restriction has temporarily disabled it, or DENIED if it has never before been GRANTED
     */
    state?: EntitlementStateOpen | undefined;
};
/** @internal */
export declare const EntitlementState$inboundSchema: z.ZodType<EntitlementStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntitlementState$outboundSchema: z.ZodType<EntitlementStateOpen, z.ZodTypeDef, EntitlementStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntitlementState$ {
    /** @deprecated use `EntitlementState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntitlementStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntitlementState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntitlementStateOpen, z.ZodTypeDef, EntitlementStateOpen>;
}
/** @internal */
export declare const Entitlement$inboundSchema: z.ZodType<Entitlement, z.ZodTypeDef, unknown>;
/** @internal */
export type Entitlement$Outbound = {
    display_name?: string | undefined;
    entitlement_code?: string | undefined;
    last_modified_reason?: string | undefined;
    last_modified_time?: string | null | undefined;
    parent_entitlements?: Array<string> | undefined;
    state?: string | undefined;
};
/** @internal */
export declare const Entitlement$outboundSchema: z.ZodType<Entitlement$Outbound, z.ZodTypeDef, Entitlement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Entitlement$ {
    /** @deprecated use `Entitlement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Entitlement, z.ZodTypeDef, unknown>;
    /** @deprecated use `Entitlement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Entitlement$Outbound, z.ZodTypeDef, Entitlement>;
    /** @deprecated use `Entitlement$Outbound` instead. */
    type Outbound = Entitlement$Outbound;
}
//# sourceMappingURL=entitlement.d.ts.map