import * as z from "zod";
import * as components from "../components/index.js";
import { ApexascendError } from "./apexascenderror.js";
/**
 * The status message serves as the general-purpose service error message. Each status message includes a gRPC error code, error message, and error details.
 */
export type StatusData = {
    /**
     * The code field contains an enum value of google.rpc.Code.
     */
    code?: number | undefined;
    /**
     * The details field contains one or more technical error details.
     */
    details?: Array<components.Any> | undefined;
    /**
     * The message field contains human-friendly messages about the error.
     */
    message?: string | undefined;
};
/**
 * The status message serves as the general-purpose service error message. Each status message includes a gRPC error code, error message, and error details.
 */
export declare class Status extends ApexascendError {
    /**
     * The code field contains an enum value of google.rpc.Code.
     */
    code?: number | undefined;
    /**
     * The details field contains one or more technical error details.
     */
    details?: Array<components.Any> | undefined;
    /** The original data that was passed to this error instance. */
    data$: StatusData;
    constructor(err: StatusData, httpMeta: {
        response: Response;
        request: Request;
        body: string;
    });
}
/** @internal */
export declare const Status$inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown>;
/** @internal */
export type Status$Outbound = {
    code?: number | undefined;
    details?: Array<components.Any$Outbound> | undefined;
    message?: string | undefined;
};
/** @internal */
export declare const Status$outboundSchema: z.ZodType<Status$Outbound, z.ZodTypeDef, Status>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Status$ {
    /** @deprecated use `Status$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown>;
    /** @deprecated use `Status$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Status$Outbound, z.ZodTypeDef, Status>;
    /** @deprecated use `Status$Outbound` instead. */
    type Outbound = Status$Outbound;
}
//# sourceMappingURL=status.d.ts.map