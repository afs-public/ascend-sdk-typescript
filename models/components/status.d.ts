import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Any, Any$Outbound } from "./any.js";
/**
 * The status message serves as the general-purpose service error message. Each status message includes a gRPC error code, error message, and error details.
 */
export type Status = {
    /**
     * The code field contains an enum value of google.rpc.Code.
     */
    code?: number | undefined;
    /**
     * The details field contains one or more technical error details.
     */
    details?: Array<Any> | undefined;
    /**
     * The message field contains human-friendly messages about the error.
     */
    message?: string | undefined;
};
/** @internal */
export declare const Status$inboundSchema: z.ZodType<Status, z.ZodTypeDef, unknown>;
/** @internal */
export type Status$Outbound = {
    code?: number | undefined;
    details?: Array<Any$Outbound> | undefined;
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
export declare function statusToJSON(status: Status): string;
export declare function statusFromJSON(jsonString: string): SafeParseResult<Status, SDKValidationError>;
//# sourceMappingURL=status.d.ts.map