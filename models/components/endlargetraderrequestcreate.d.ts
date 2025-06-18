import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The end reason of the LTID.
 */
export declare enum EndReason {
    ReportableAccountEventReasonUnspecified = "REPORTABLE_ACCOUNT_EVENT_REASON_UNSPECIFIED",
    EventReasonCreated = "EVENT_REASON_CREATED",
    EventReasonCorrection = "EVENT_REASON_CORRECTION",
    EventReasonEnded = "EVENT_REASON_ENDED",
    EventReasonReplaced = "EVENT_REASON_REPLACED",
    EventReasonTransfer = "EVENT_REASON_TRANSFER",
    EventReasonOther = "EVENT_REASON_OTHER"
}
/**
 * The end reason of the LTID.
 */
export type EndReasonOpen = OpenEnum<typeof EndReason>;
/**
 * The request to end a Large Trader on a Legal Natural Person/Legal Entity.
 */
export type EndLargeTraderRequestCreate = {
    /**
     * The end reason of the LTID.
     */
    endReason: EndReasonOpen;
};
/** @internal */
export declare const EndReason$inboundSchema: z.ZodType<EndReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EndReason$outboundSchema: z.ZodType<EndReasonOpen, z.ZodTypeDef, EndReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EndReason$ {
    /** @deprecated use `EndReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EndReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EndReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EndReasonOpen, z.ZodTypeDef, EndReasonOpen>;
}
/** @internal */
export declare const EndLargeTraderRequestCreate$inboundSchema: z.ZodType<EndLargeTraderRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EndLargeTraderRequestCreate$Outbound = {
    end_reason: string;
};
/** @internal */
export declare const EndLargeTraderRequestCreate$outboundSchema: z.ZodType<EndLargeTraderRequestCreate$Outbound, z.ZodTypeDef, EndLargeTraderRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EndLargeTraderRequestCreate$ {
    /** @deprecated use `EndLargeTraderRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EndLargeTraderRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EndLargeTraderRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EndLargeTraderRequestCreate$Outbound, z.ZodTypeDef, EndLargeTraderRequestCreate>;
    /** @deprecated use `EndLargeTraderRequestCreate$Outbound` instead. */
    type Outbound = EndLargeTraderRequestCreate$Outbound;
}
//# sourceMappingURL=endlargetraderrequestcreate.d.ts.map