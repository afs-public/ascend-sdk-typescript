import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to retrieve retirement constraints for two accounts in a cash journal transfer
 */
export type RetrieveCashJournalConstraintsRequestCreate = {
    /**
     * Destination account name for a cash journal transfer
     */
    destinationAccount: string;
    /**
     * Source account name for a cash journal transfer
     */
    sourceAccount: string;
};
/** @internal */
export declare const RetrieveCashJournalConstraintsRequestCreate$inboundSchema: z.ZodType<RetrieveCashJournalConstraintsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveCashJournalConstraintsRequestCreate$Outbound = {
    destination_account: string;
    source_account: string;
};
/** @internal */
export declare const RetrieveCashJournalConstraintsRequestCreate$outboundSchema: z.ZodType<RetrieveCashJournalConstraintsRequestCreate$Outbound, z.ZodTypeDef, RetrieveCashJournalConstraintsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveCashJournalConstraintsRequestCreate$ {
    /** @deprecated use `RetrieveCashJournalConstraintsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveCashJournalConstraintsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveCashJournalConstraintsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveCashJournalConstraintsRequestCreate$Outbound, z.ZodTypeDef, RetrieveCashJournalConstraintsRequestCreate>;
    /** @deprecated use `RetrieveCashJournalConstraintsRequestCreate$Outbound` instead. */
    type Outbound = RetrieveCashJournalConstraintsRequestCreate$Outbound;
}
export declare function retrieveCashJournalConstraintsRequestCreateToJSON(retrieveCashJournalConstraintsRequestCreate: RetrieveCashJournalConstraintsRequestCreate): string;
export declare function retrieveCashJournalConstraintsRequestCreateFromJSON(jsonString: string): SafeParseResult<RetrieveCashJournalConstraintsRequestCreate, SDKValidationError>;
//# sourceMappingURL=retrievecashjournalconstraintsrequestcreate.d.ts.map