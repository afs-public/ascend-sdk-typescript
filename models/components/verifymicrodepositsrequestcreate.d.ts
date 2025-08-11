import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { MicroDepositAmountsCreate, MicroDepositAmountsCreate$Outbound } from "./microdepositamountscreate.js";
/**
 * Verifies micro deposits for a pending relationship.
 */
export type VerifyMicroDepositsRequestCreate = {
    /**
     * The micro deposits sent to verify a pending bank relationship. FOR TESTING ONLY!
     */
    amounts: MicroDepositAmountsCreate;
    /**
     * The name of the relationship to verify.
     */
    name: string;
};
/** @internal */
export declare const VerifyMicroDepositsRequestCreate$inboundSchema: z.ZodType<VerifyMicroDepositsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type VerifyMicroDepositsRequestCreate$Outbound = {
    amounts: MicroDepositAmountsCreate$Outbound;
    name: string;
};
/** @internal */
export declare const VerifyMicroDepositsRequestCreate$outboundSchema: z.ZodType<VerifyMicroDepositsRequestCreate$Outbound, z.ZodTypeDef, VerifyMicroDepositsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VerifyMicroDepositsRequestCreate$ {
    /** @deprecated use `VerifyMicroDepositsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VerifyMicroDepositsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `VerifyMicroDepositsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VerifyMicroDepositsRequestCreate$Outbound, z.ZodTypeDef, VerifyMicroDepositsRequestCreate>;
    /** @deprecated use `VerifyMicroDepositsRequestCreate$Outbound` instead. */
    type Outbound = VerifyMicroDepositsRequestCreate$Outbound;
}
export declare function verifyMicroDepositsRequestCreateToJSON(verifyMicroDepositsRequestCreate: VerifyMicroDepositsRequestCreate): string;
export declare function verifyMicroDepositsRequestCreateFromJSON(jsonString: string): SafeParseResult<VerifyMicroDepositsRequestCreate, SDKValidationError>;
//# sourceMappingURL=verifymicrodepositsrequestcreate.d.ts.map