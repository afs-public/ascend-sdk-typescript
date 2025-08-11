import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to reissue micro deposits for bank relationship verification.
 */
export type ReissueMicroDepositsRequestCreate = {
    /**
     * The name of the relationship to reissue micro deposits on.
     */
    name: string;
};
/** @internal */
export declare const ReissueMicroDepositsRequestCreate$inboundSchema: z.ZodType<ReissueMicroDepositsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ReissueMicroDepositsRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ReissueMicroDepositsRequestCreate$outboundSchema: z.ZodType<ReissueMicroDepositsRequestCreate$Outbound, z.ZodTypeDef, ReissueMicroDepositsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReissueMicroDepositsRequestCreate$ {
    /** @deprecated use `ReissueMicroDepositsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReissueMicroDepositsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReissueMicroDepositsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReissueMicroDepositsRequestCreate$Outbound, z.ZodTypeDef, ReissueMicroDepositsRequestCreate>;
    /** @deprecated use `ReissueMicroDepositsRequestCreate$Outbound` instead. */
    type Outbound = ReissueMicroDepositsRequestCreate$Outbound;
}
export declare function reissueMicroDepositsRequestCreateToJSON(reissueMicroDepositsRequestCreate: ReissueMicroDepositsRequestCreate): string;
export declare function reissueMicroDepositsRequestCreateFromJSON(jsonString: string): SafeParseResult<ReissueMicroDepositsRequestCreate, SDKValidationError>;
//# sourceMappingURL=reissuemicrodepositsrequestcreate.d.ts.map