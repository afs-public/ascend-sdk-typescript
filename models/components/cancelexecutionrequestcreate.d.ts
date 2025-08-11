import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A request for canceling a single execution.
 */
export type CancelExecutionRequestCreate = {
    /**
     * The name of the execution to cancel.
     */
    name: string;
};
/** @internal */
export declare const CancelExecutionRequestCreate$inboundSchema: z.ZodType<CancelExecutionRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const CancelExecutionRequestCreate$outboundSchema: z.ZodType<CancelExecutionRequestCreate$Outbound, z.ZodTypeDef, CancelExecutionRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionRequestCreate$ {
    /** @deprecated use `CancelExecutionRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionRequestCreate$Outbound, z.ZodTypeDef, CancelExecutionRequestCreate>;
    /** @deprecated use `CancelExecutionRequestCreate$Outbound` instead. */
    type Outbound = CancelExecutionRequestCreate$Outbound;
}
export declare function cancelExecutionRequestCreateToJSON(cancelExecutionRequestCreate: CancelExecutionRequestCreate): string;
export declare function cancelExecutionRequestCreateFromJSON(jsonString: string): SafeParseResult<CancelExecutionRequestCreate, SDKValidationError>;
//# sourceMappingURL=cancelexecutionrequestcreate.d.ts.map