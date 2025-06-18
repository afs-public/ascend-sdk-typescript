import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { WatchlistMatchUpdate, WatchlistMatchUpdate$Outbound } from "./watchlistmatchupdate.js";
/**
 * Indicates the current state of identity verification
 */
export declare enum InvestigationUpdateIdentityVerification {
    ScreenStateUnspecified = "SCREEN_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Passed = "PASSED",
    Failed = "FAILED",
    NeedsReview = "NEEDS_REVIEW",
    DeferredReview = "DEFERRED_REVIEW",
    OutOfScope = "OUT_OF_SCOPE"
}
/**
 * Indicates the current state of identity verification
 */
export type InvestigationUpdateIdentityVerificationOpen = OpenEnum<typeof InvestigationUpdateIdentityVerification>;
/**
 * Current state of investigation request
 */
export declare enum InvestigationUpdateInvestigationRequestState {
    InvestigationRequestStateUnspecified = "INVESTIGATION_REQUEST_STATE_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED"
}
/**
 * Current state of investigation request
 */
export type InvestigationUpdateInvestigationRequestStateOpen = OpenEnum<typeof InvestigationUpdateInvestigationRequestState>;
/**
 * Contains investigation details of corresponding investigation
 */
export type InvestigationUpdate = {
    /**
     * Comment relating to why the investigation state was updated
     */
    comment?: string | undefined;
    /**
     * Indicates the current state of identity verification
     */
    identityVerification?: InvestigationUpdateIdentityVerificationOpen | undefined;
    /**
     * Current state of investigation request
     */
    investigationRequestState?: InvestigationUpdateInvestigationRequestStateOpen | undefined;
    /**
     * A list of watchlist entries matched against the investigation
     */
    watchlistMatches?: Array<WatchlistMatchUpdate> | undefined;
};
/** @internal */
export declare const InvestigationUpdateIdentityVerification$inboundSchema: z.ZodType<InvestigationUpdateIdentityVerificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InvestigationUpdateIdentityVerification$outboundSchema: z.ZodType<InvestigationUpdateIdentityVerificationOpen, z.ZodTypeDef, InvestigationUpdateIdentityVerificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationUpdateIdentityVerification$ {
    /** @deprecated use `InvestigationUpdateIdentityVerification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationUpdateIdentityVerificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationUpdateIdentityVerification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationUpdateIdentityVerificationOpen, z.ZodTypeDef, InvestigationUpdateIdentityVerificationOpen>;
}
/** @internal */
export declare const InvestigationUpdateInvestigationRequestState$inboundSchema: z.ZodType<InvestigationUpdateInvestigationRequestStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InvestigationUpdateInvestigationRequestState$outboundSchema: z.ZodType<InvestigationUpdateInvestigationRequestStateOpen, z.ZodTypeDef, InvestigationUpdateInvestigationRequestStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationUpdateInvestigationRequestState$ {
    /** @deprecated use `InvestigationUpdateInvestigationRequestState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationUpdateInvestigationRequestStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationUpdateInvestigationRequestState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationUpdateInvestigationRequestStateOpen, z.ZodTypeDef, InvestigationUpdateInvestigationRequestStateOpen>;
}
/** @internal */
export declare const InvestigationUpdate$inboundSchema: z.ZodType<InvestigationUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationUpdate$Outbound = {
    comment?: string | undefined;
    identity_verification?: string | undefined;
    investigation_request_state?: string | undefined;
    watchlist_matches?: Array<WatchlistMatchUpdate$Outbound> | undefined;
};
/** @internal */
export declare const InvestigationUpdate$outboundSchema: z.ZodType<InvestigationUpdate$Outbound, z.ZodTypeDef, InvestigationUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationUpdate$ {
    /** @deprecated use `InvestigationUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationUpdate$Outbound, z.ZodTypeDef, InvestigationUpdate>;
    /** @deprecated use `InvestigationUpdate$Outbound` instead. */
    type Outbound = InvestigationUpdate$Outbound;
}
//# sourceMappingURL=investigationupdate.d.ts.map