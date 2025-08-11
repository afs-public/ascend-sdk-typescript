import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to simulate the rejection of an ICT deposit
 */
export type ForceRejectIctDepositRequestCreate = {
    /**
     * Full name of the ICT deposit resource to force a rejection on. Contains account id and ICT deposit id.
     */
    name: string;
    /**
     * Reason why the ICT deposit is being rejected
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectIctDepositRequestCreate$inboundSchema: z.ZodType<ForceRejectIctDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectIctDepositRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectIctDepositRequestCreate$outboundSchema: z.ZodType<ForceRejectIctDepositRequestCreate$Outbound, z.ZodTypeDef, ForceRejectIctDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectIctDepositRequestCreate$ {
    /** @deprecated use `ForceRejectIctDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectIctDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectIctDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectIctDepositRequestCreate$Outbound, z.ZodTypeDef, ForceRejectIctDepositRequestCreate>;
    /** @deprecated use `ForceRejectIctDepositRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectIctDepositRequestCreate$Outbound;
}
export declare function forceRejectIctDepositRequestCreateToJSON(forceRejectIctDepositRequestCreate: ForceRejectIctDepositRequestCreate): string;
export declare function forceRejectIctDepositRequestCreateFromJSON(jsonString: string): SafeParseResult<ForceRejectIctDepositRequestCreate, SDKValidationError>;
//# sourceMappingURL=forcerejectictdepositrequestcreate.d.ts.map