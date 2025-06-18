import * as z from "zod";
import { BookingFeeCreate, BookingFeeCreate$Outbound } from "./bookingfeecreate.js";
/**
 * A request for completing a trade.
 */
export type CompleteTradeRequestCreate = {
    /**
     * Client calculated fees to use while completing an existing trade.
     */
    fees?: Array<BookingFeeCreate> | undefined;
    /**
     * The name of the trade to complete.
     */
    name: string;
};
/** @internal */
export declare const CompleteTradeRequestCreate$inboundSchema: z.ZodType<CompleteTradeRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteTradeRequestCreate$Outbound = {
    fees?: Array<BookingFeeCreate$Outbound> | undefined;
    name: string;
};
/** @internal */
export declare const CompleteTradeRequestCreate$outboundSchema: z.ZodType<CompleteTradeRequestCreate$Outbound, z.ZodTypeDef, CompleteTradeRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeRequestCreate$ {
    /** @deprecated use `CompleteTradeRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeRequestCreate$Outbound, z.ZodTypeDef, CompleteTradeRequestCreate>;
    /** @deprecated use `CompleteTradeRequestCreate$Outbound` instead. */
    type Outbound = CompleteTradeRequestCreate$Outbound;
}
//# sourceMappingURL=completetraderequestcreate.d.ts.map