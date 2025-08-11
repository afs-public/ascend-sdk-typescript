import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WatchlistMatchUpdate, WatchlistMatchUpdate$Outbound } from "./watchlistmatchupdate.js";
/**
 * The screen state of one screening within an investigation, one of:
 *
 * @remarks
 * - `SCREEN_STATE_UNSPECIFIED` - Default/Null value.
 * - `PENDING` - Screen result is pending.
 * - `PASSED` - Screen result has passed.
 * - `FAILED` - Screen result has failed.
 * - `NEEDS_REVIEW` - Screen result needs manual review.
 * - `DEFERRED_REVIEW` - Screen result is deferred for review at a later date.
 * - `OUT_OF_SCOPE` - Screen state is out of scope for this investigation type.
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
 * The screen state of one screening within an investigation, one of:
 *
 * @remarks
 * - `SCREEN_STATE_UNSPECIFIED` - Default/Null value.
 * - `PENDING` - Screen result is pending.
 * - `PASSED` - Screen result has passed.
 * - `FAILED` - Screen result has failed.
 * - `NEEDS_REVIEW` - Screen result needs manual review.
 * - `DEFERRED_REVIEW` - Screen result is deferred for review at a later date.
 * - `OUT_OF_SCOPE` - Screen state is out of scope for this investigation type.
 */
export type InvestigationUpdateIdentityVerificationOpen = OpenEnum<typeof InvestigationUpdateIdentityVerification>;
/**
 * The state of an investigation request, one of:
 *
 * @remarks
 * - `INVESTIGATION_REQUEST_STATE_UNSPECIFIED` - Default/Null value.
 * - `OPEN` - The investigation request is open.
 * - `CLOSED` - The investigation request is closed.
 */
export declare enum InvestigationUpdateInvestigationRequestState {
    InvestigationRequestStateUnspecified = "INVESTIGATION_REQUEST_STATE_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED"
}
/**
 * The state of an investigation request, one of:
 *
 * @remarks
 * - `INVESTIGATION_REQUEST_STATE_UNSPECIFIED` - Default/Null value.
 * - `OPEN` - The investigation request is open.
 * - `CLOSED` - The investigation request is closed.
 */
export type InvestigationUpdateInvestigationRequestStateOpen = OpenEnum<typeof InvestigationUpdateInvestigationRequestState>;
/**
 * Contains investigation details of corresponding investigation
 */
export type InvestigationUpdate = {
    /**
     * A unique identifier referencing a client The client ID serves as the unique identifier for the apex client positioned above the correspondent within the apex client configurator hierarchy. Moving forward, the account service will internally assign the client ID for all investigations.
     */
    clientId?: string | undefined;
    /**
     * Comment relating to why the investigation state was updated
     */
    comment?: string | undefined;
    /**
     * The screen state of one screening within an investigation, one of:
     *
     * @remarks
     * - `SCREEN_STATE_UNSPECIFIED` - Default/Null value.
     * - `PENDING` - Screen result is pending.
     * - `PASSED` - Screen result has passed.
     * - `FAILED` - Screen result has failed.
     * - `NEEDS_REVIEW` - Screen result needs manual review.
     * - `DEFERRED_REVIEW` - Screen result is deferred for review at a later date.
     * - `OUT_OF_SCOPE` - Screen state is out of scope for this investigation type.
     */
    identityVerification?: InvestigationUpdateIdentityVerificationOpen | undefined;
    /**
     * The state of an investigation request, one of:
     *
     * @remarks
     * - `INVESTIGATION_REQUEST_STATE_UNSPECIFIED` - Default/Null value.
     * - `OPEN` - The investigation request is open.
     * - `CLOSED` - The investigation request is closed.
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
    client_id?: string | undefined;
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
export declare function investigationUpdateToJSON(investigationUpdate: InvestigationUpdate): string;
export declare function investigationUpdateFromJSON(jsonString: string): SafeParseResult<InvestigationUpdate, SDKValidationError>;
//# sourceMappingURL=investigationupdate.d.ts.map