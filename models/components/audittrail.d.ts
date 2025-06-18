import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The type of audit that was performed on the investigation
 */
export declare enum AuditType {
    AuditTypeUnspecified = "AUDIT_TYPE_UNSPECIFIED",
    InvestigationRequestUpdate = "INVESTIGATION_REQUEST_UPDATE",
    InvestigationState = "INVESTIGATION_STATE",
    Comment = "COMMENT"
}
/**
 * The type of audit that was performed on the investigation
 */
export type AuditTypeOpen = OpenEnum<typeof AuditType>;
/**
 * Audit trail details
 */
export type AuditTrail = {
    /**
     * The type of audit that was performed on the investigation
     */
    auditType?: AuditTypeOpen | undefined;
    /**
     * Comment relating to why the audit was saved
     */
    comment?: string | undefined;
    /**
     * The name of the field that has been updated
     */
    field?: string | undefined;
    /**
     * The new value for the field that was updated
     */
    newValue?: string | undefined;
    /**
     * The prior value for the field that was updated
     */
    oldValue?: string | undefined;
    /**
     * The date the user updated the investigation
     */
    updateTime?: Date | null | undefined;
    /**
     * The user that made the update to the investigation
     */
    updateUser?: string | undefined;
};
/** @internal */
export declare const AuditType$inboundSchema: z.ZodType<AuditTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AuditType$outboundSchema: z.ZodType<AuditTypeOpen, z.ZodTypeDef, AuditTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuditType$ {
    /** @deprecated use `AuditType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuditTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuditType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuditTypeOpen, z.ZodTypeDef, AuditTypeOpen>;
}
/** @internal */
export declare const AuditTrail$inboundSchema: z.ZodType<AuditTrail, z.ZodTypeDef, unknown>;
/** @internal */
export type AuditTrail$Outbound = {
    audit_type?: string | undefined;
    comment?: string | undefined;
    field?: string | undefined;
    new_value?: string | undefined;
    old_value?: string | undefined;
    update_time?: string | null | undefined;
    update_user?: string | undefined;
};
/** @internal */
export declare const AuditTrail$outboundSchema: z.ZodType<AuditTrail$Outbound, z.ZodTypeDef, AuditTrail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuditTrail$ {
    /** @deprecated use `AuditTrail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuditTrail, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuditTrail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuditTrail$Outbound, z.ZodTypeDef, AuditTrail>;
    /** @deprecated use `AuditTrail$Outbound` instead. */
    type Outbound = AuditTrail$Outbound;
}
//# sourceMappingURL=audittrail.d.ts.map