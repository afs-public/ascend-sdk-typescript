import * as z from "zod";
import * as components from "../components/index.js";
export type RetirementConstraintsRetrieveCashJournalConstraintsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    cashJournalConstraints?: components.CashJournalConstraints | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const RetirementConstraintsRetrieveCashJournalConstraintsResponse$inboundSchema: z.ZodType<RetirementConstraintsRetrieveCashJournalConstraintsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsRetrieveCashJournalConstraintsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CashJournalConstraints?: components.CashJournalConstraints$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const RetirementConstraintsRetrieveCashJournalConstraintsResponse$outboundSchema: z.ZodType<RetirementConstraintsRetrieveCashJournalConstraintsResponse$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveCashJournalConstraintsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsRetrieveCashJournalConstraintsResponse$ {
    /** @deprecated use `RetirementConstraintsRetrieveCashJournalConstraintsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsRetrieveCashJournalConstraintsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsRetrieveCashJournalConstraintsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsRetrieveCashJournalConstraintsResponse$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveCashJournalConstraintsResponse>;
    /** @deprecated use `RetirementConstraintsRetrieveCashJournalConstraintsResponse$Outbound` instead. */
    type Outbound = RetirementConstraintsRetrieveCashJournalConstraintsResponse$Outbound;
}
//# sourceMappingURL=retirementconstraintsretrievecashjournalconstraints.d.ts.map