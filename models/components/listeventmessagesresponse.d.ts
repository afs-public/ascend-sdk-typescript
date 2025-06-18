import * as z from "zod";
import { EventMessage, EventMessage$Outbound } from "./eventmessage.js";
/**
 * A response to a list events method
 */
export type ListEventMessagesResponse = {
    /**
     * The returned collection of events
     */
    eventMessages?: Array<EventMessage> | undefined;
    /**
     * Page token used for pagination; Supplying a page token returns the next page of results
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListEventMessagesResponse$inboundSchema: z.ZodType<ListEventMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListEventMessagesResponse$Outbound = {
    event_messages?: Array<EventMessage$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListEventMessagesResponse$outboundSchema: z.ZodType<ListEventMessagesResponse$Outbound, z.ZodTypeDef, ListEventMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListEventMessagesResponse$ {
    /** @deprecated use `ListEventMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListEventMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListEventMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListEventMessagesResponse$Outbound, z.ZodTypeDef, ListEventMessagesResponse>;
    /** @deprecated use `ListEventMessagesResponse$Outbound` instead. */
    type Outbound = ListEventMessagesResponse$Outbound;
}
//# sourceMappingURL=listeventmessagesresponse.d.ts.map