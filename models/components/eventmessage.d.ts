import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Represents an envelope and the data of an event
 */
export type EventMessage = {
    /**
     * The account ID related to the event (if applicable)
     */
    accountId?: string | undefined;
    /**
     * The client ID related to the event
     */
    clientId?: string | undefined;
    /**
     * The correspondent ID related to the event (if applicable)
     */
    correspondentId?: string | undefined;
    /**
     * A data payload containing the fields specific to the type of event being sent
     */
    data?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * Specifies the action that triggered the event as well as what resource changed
     */
    eventType?: string | undefined;
    /**
     * A unique identifier for the event
     */
    messageId?: string | undefined;
    /**
     * The resource name of the event; Format: messages/{message}
     */
    name?: string | undefined;
    /**
     * A value, if present, is used to group related events together. Events with the same partition key are guaranteed to be sent to the consumer in the same order they were published.
     */
    partitionKey?: string | undefined;
    /**
     * The date and time of the event publication (not necessarily the time the event occurred)
     */
    publishTime?: Date | null | undefined;
};
/** @internal */
export declare const EventMessage$inboundSchema: z.ZodType<EventMessage, z.ZodTypeDef, unknown>;
/** @internal */
export type EventMessage$Outbound = {
    account_id?: string | undefined;
    client_id?: string | undefined;
    correspondent_id?: string | undefined;
    data?: {
        [k: string]: any;
    } | null | undefined;
    event_type?: string | undefined;
    message_id?: string | undefined;
    name?: string | undefined;
    partition_key?: string | undefined;
    publish_time?: string | null | undefined;
};
/** @internal */
export declare const EventMessage$outboundSchema: z.ZodType<EventMessage$Outbound, z.ZodTypeDef, EventMessage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EventMessage$ {
    /** @deprecated use `EventMessage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EventMessage, z.ZodTypeDef, unknown>;
    /** @deprecated use `EventMessage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EventMessage$Outbound, z.ZodTypeDef, EventMessage>;
    /** @deprecated use `EventMessage$Outbound` instead. */
    type Outbound = EventMessage$Outbound;
}
export declare function eventMessageToJSON(eventMessage: EventMessage): string;
export declare function eventMessageFromJSON(jsonString: string): SafeParseResult<EventMessage, SDKValidationError>;
//# sourceMappingURL=eventmessage.d.ts.map