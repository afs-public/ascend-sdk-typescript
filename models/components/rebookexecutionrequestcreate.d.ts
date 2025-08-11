import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExecutionCreate, ExecutionCreate$Outbound } from "./executioncreate.js";
/**
 * A response for the rebook execution method.
 */
export type RebookExecutionRequestCreate = {
    /**
     * An execution represents a partial-fill or a fill that is part of an order. Executions are children to a Trade, which collectively represents an entire order made by a client.
     */
    execution: ExecutionCreate;
    /**
     * The name of the execution to rebook.
     */
    name: string;
};
/** @internal */
export declare const RebookExecutionRequestCreate$inboundSchema: z.ZodType<RebookExecutionRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionRequestCreate$Outbound = {
    execution: ExecutionCreate$Outbound;
    name: string;
};
/** @internal */
export declare const RebookExecutionRequestCreate$outboundSchema: z.ZodType<RebookExecutionRequestCreate$Outbound, z.ZodTypeDef, RebookExecutionRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionRequestCreate$ {
    /** @deprecated use `RebookExecutionRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionRequestCreate$Outbound, z.ZodTypeDef, RebookExecutionRequestCreate>;
    /** @deprecated use `RebookExecutionRequestCreate$Outbound` instead. */
    type Outbound = RebookExecutionRequestCreate$Outbound;
}
export declare function rebookExecutionRequestCreateToJSON(rebookExecutionRequestCreate: RebookExecutionRequestCreate): string;
export declare function rebookExecutionRequestCreateFromJSON(jsonString: string): SafeParseResult<RebookExecutionRequestCreate, SDKValidationError>;
//# sourceMappingURL=rebookexecutionrequestcreate.d.ts.map