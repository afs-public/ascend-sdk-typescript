import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to determine if a potential cash journal will be considered first party or third party
 */
export type CheckPartyTypeRequestCreate = {
    /**
     * The destination account of the potential cash journal
     */
    destinationAccount: string;
    /**
     * The source account of the potential cash journal
     */
    sourceAccount: string;
};
/** @internal */
export declare const CheckPartyTypeRequestCreate$inboundSchema: z.ZodType<CheckPartyTypeRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckPartyTypeRequestCreate$Outbound = {
    destination_account: string;
    source_account: string;
};
/** @internal */
export declare const CheckPartyTypeRequestCreate$outboundSchema: z.ZodType<CheckPartyTypeRequestCreate$Outbound, z.ZodTypeDef, CheckPartyTypeRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckPartyTypeRequestCreate$ {
    /** @deprecated use `CheckPartyTypeRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckPartyTypeRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckPartyTypeRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckPartyTypeRequestCreate$Outbound, z.ZodTypeDef, CheckPartyTypeRequestCreate>;
    /** @deprecated use `CheckPartyTypeRequestCreate$Outbound` instead. */
    type Outbound = CheckPartyTypeRequestCreate$Outbound;
}
export declare function checkPartyTypeRequestCreateToJSON(checkPartyTypeRequestCreate: CheckPartyTypeRequestCreate): string;
export declare function checkPartyTypeRequestCreateFromJSON(jsonString: string): SafeParseResult<CheckPartyTypeRequestCreate, SDKValidationError>;
//# sourceMappingURL=checkpartytyperequestcreate.d.ts.map