import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to accept internal Ascend transfers.
 */
export type AcceptTransferRequestCreate = {
    /**
     * Comment to add to the transfer record's audit trail.
     */
    comment?: string | undefined;
    /**
     * The name of the transfer to accept. Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}
     */
    name: string;
};
/** @internal */
export declare const AcceptTransferRequestCreate$inboundSchema: z.ZodType<AcceptTransferRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptTransferRequestCreate$Outbound = {
    comment?: string | undefined;
    name: string;
};
/** @internal */
export declare const AcceptTransferRequestCreate$outboundSchema: z.ZodType<AcceptTransferRequestCreate$Outbound, z.ZodTypeDef, AcceptTransferRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferRequestCreate$ {
    /** @deprecated use `AcceptTransferRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferRequestCreate$Outbound, z.ZodTypeDef, AcceptTransferRequestCreate>;
    /** @deprecated use `AcceptTransferRequestCreate$Outbound` instead. */
    type Outbound = AcceptTransferRequestCreate$Outbound;
}
export declare function acceptTransferRequestCreateToJSON(acceptTransferRequestCreate: AcceptTransferRequestCreate): string;
export declare function acceptTransferRequestCreateFromJSON(jsonString: string): SafeParseResult<AcceptTransferRequestCreate, SDKValidationError>;
//# sourceMappingURL=accepttransferrequestcreate.d.ts.map