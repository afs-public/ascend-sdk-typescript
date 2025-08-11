import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request for closing an Account.
 */
export type CloseAccountRequestCreate = {
    /**
     * The FDID of a replacement Account, if one exists.
     */
    replacedFdid?: string | undefined;
};
/** @internal */
export declare const CloseAccountRequestCreate$inboundSchema: z.ZodType<CloseAccountRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CloseAccountRequestCreate$Outbound = {
    replaced_fdid?: string | undefined;
};
/** @internal */
export declare const CloseAccountRequestCreate$outboundSchema: z.ZodType<CloseAccountRequestCreate$Outbound, z.ZodTypeDef, CloseAccountRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CloseAccountRequestCreate$ {
    /** @deprecated use `CloseAccountRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CloseAccountRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CloseAccountRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CloseAccountRequestCreate$Outbound, z.ZodTypeDef, CloseAccountRequestCreate>;
    /** @deprecated use `CloseAccountRequestCreate$Outbound` instead. */
    type Outbound = CloseAccountRequestCreate$Outbound;
}
export declare function closeAccountRequestCreateToJSON(closeAccountRequestCreate: CloseAccountRequestCreate): string;
export declare function closeAccountRequestCreateFromJSON(jsonString: string): SafeParseResult<CloseAccountRequestCreate, SDKValidationError>;
//# sourceMappingURL=closeaccountrequestcreate.d.ts.map