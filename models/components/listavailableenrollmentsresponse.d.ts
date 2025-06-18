import * as z from "zod";
import { AvailableEnrollment, AvailableEnrollment$Outbound } from "./availableenrollment.js";
/**
 * The response to list Enrollments available for an Account.
 */
export type ListAvailableEnrollmentsResponse = {
    /**
     * The available enrollments for a response
     */
    availableEnrollments?: Array<AvailableEnrollment> | undefined;
};
/** @internal */
export declare const ListAvailableEnrollmentsResponse$inboundSchema: z.ZodType<ListAvailableEnrollmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAvailableEnrollmentsResponse$Outbound = {
    available_enrollments?: Array<AvailableEnrollment$Outbound> | undefined;
};
/** @internal */
export declare const ListAvailableEnrollmentsResponse$outboundSchema: z.ZodType<ListAvailableEnrollmentsResponse$Outbound, z.ZodTypeDef, ListAvailableEnrollmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAvailableEnrollmentsResponse$ {
    /** @deprecated use `ListAvailableEnrollmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAvailableEnrollmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAvailableEnrollmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAvailableEnrollmentsResponse$Outbound, z.ZodTypeDef, ListAvailableEnrollmentsResponse>;
    /** @deprecated use `ListAvailableEnrollmentsResponse$Outbound` instead. */
    type Outbound = ListAvailableEnrollmentsResponse$Outbound;
}
//# sourceMappingURL=listavailableenrollmentsresponse.d.ts.map