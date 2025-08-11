import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PushSubscription, PushSubscription$Outbound } from "./pushsubscription.js";
/**
 * A response to a list push subscriptions method
 */
export type ListPushSubscriptionsResponse = {
    /**
     * Page token used for pagination; Supplying a page token returns the next page of results
     */
    nextPageToken?: string | undefined;
    /**
     * The returned collection of subscriptions
     */
    pushSubscriptions?: Array<PushSubscription> | undefined;
};
/** @internal */
export declare const ListPushSubscriptionsResponse$inboundSchema: z.ZodType<ListPushSubscriptionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPushSubscriptionsResponse$Outbound = {
    next_page_token?: string | undefined;
    push_subscriptions?: Array<PushSubscription$Outbound> | undefined;
};
/** @internal */
export declare const ListPushSubscriptionsResponse$outboundSchema: z.ZodType<ListPushSubscriptionsResponse$Outbound, z.ZodTypeDef, ListPushSubscriptionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListPushSubscriptionsResponse$ {
    /** @deprecated use `ListPushSubscriptionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListPushSubscriptionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListPushSubscriptionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListPushSubscriptionsResponse$Outbound, z.ZodTypeDef, ListPushSubscriptionsResponse>;
    /** @deprecated use `ListPushSubscriptionsResponse$Outbound` instead. */
    type Outbound = ListPushSubscriptionsResponse$Outbound;
}
export declare function listPushSubscriptionsResponseToJSON(listPushSubscriptionsResponse: ListPushSubscriptionsResponse): string;
export declare function listPushSubscriptionsResponseFromJSON(jsonString: string): SafeParseResult<ListPushSubscriptionsResponse, SDKValidationError>;
//# sourceMappingURL=listpushsubscriptionsresponse.d.ts.map