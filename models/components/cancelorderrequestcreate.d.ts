import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Only relevant for CAT reporting when clients have Apex do CAT reporting on their behalf. A value may be provided for non-Equity orders, and will be remembered, but the value will have no impact on how they are processed. Cancel requests without this field set will default to CLIENT
 */
export declare enum CancelOrderRequestCreateCancelInitiator {
    InitiatorUnspecified = "INITIATOR_UNSPECIFIED",
    Firm = "FIRM",
    Client = "CLIENT"
}
/**
 * Only relevant for CAT reporting when clients have Apex do CAT reporting on their behalf. A value may be provided for non-Equity orders, and will be remembered, but the value will have no impact on how they are processed. Cancel requests without this field set will default to CLIENT
 */
export type CancelOrderRequestCreateCancelInitiatorOpen = OpenEnum<typeof CancelOrderRequestCreateCancelInitiator>;
/**
 * The message to request cancellation of an existing order
 */
export type CancelOrderRequestCreate = {
    /**
     * Only relevant for CAT reporting when clients have Apex do CAT reporting on their behalf. A value may be provided for non-Equity orders, and will be remembered, but the value will have no impact on how they are processed. Cancel requests without this field set will default to CLIENT
     */
    cancelInitiator?: CancelOrderRequestCreateCancelInitiatorOpen | undefined;
    /**
     * Related to CAT reporting when Apex reports for the client. A value may be provided for non-Equity orders, and will be remembered, but valid timestamps will have no impact on how they are processed.
     */
    clientCancelReceivedTime?: Date | null | undefined;
    /**
     * Format: accounts/{account_id}/orders/{order_id}
     */
    name: string;
};
/** @internal */
export declare const CancelOrderRequestCreateCancelInitiator$inboundSchema: z.ZodType<CancelOrderRequestCreateCancelInitiatorOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelOrderRequestCreateCancelInitiator$outboundSchema: z.ZodType<CancelOrderRequestCreateCancelInitiatorOpen, z.ZodTypeDef, CancelOrderRequestCreateCancelInitiatorOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelOrderRequestCreateCancelInitiator$ {
    /** @deprecated use `CancelOrderRequestCreateCancelInitiator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelOrderRequestCreateCancelInitiatorOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelOrderRequestCreateCancelInitiator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelOrderRequestCreateCancelInitiatorOpen, z.ZodTypeDef, CancelOrderRequestCreateCancelInitiatorOpen>;
}
/** @internal */
export declare const CancelOrderRequestCreate$inboundSchema: z.ZodType<CancelOrderRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelOrderRequestCreate$Outbound = {
    cancel_initiator?: string | undefined;
    client_cancel_received_time?: string | null | undefined;
    name: string;
};
/** @internal */
export declare const CancelOrderRequestCreate$outboundSchema: z.ZodType<CancelOrderRequestCreate$Outbound, z.ZodTypeDef, CancelOrderRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelOrderRequestCreate$ {
    /** @deprecated use `CancelOrderRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelOrderRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelOrderRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelOrderRequestCreate$Outbound, z.ZodTypeDef, CancelOrderRequestCreate>;
    /** @deprecated use `CancelOrderRequestCreate$Outbound` instead. */
    type Outbound = CancelOrderRequestCreate$Outbound;
}
export declare function cancelOrderRequestCreateToJSON(cancelOrderRequestCreate: CancelOrderRequestCreate): string;
export declare function cancelOrderRequestCreateFromJSON(jsonString: string): SafeParseResult<CancelOrderRequestCreate, SDKValidationError>;
//# sourceMappingURL=cancelorderrequestcreate.d.ts.map