import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RetrieveFixedIncomeMarksResponseAssetMark, RetrieveFixedIncomeMarksResponseAssetMark$Outbound } from "./retrievefixedincomemarksresponseassetmark.js";
/**
 * List of objects with the most recently observed mark per security
 */
export type RetrieveFixedIncomeMarksResponse = {
    /**
     * The list of mark data for each of the requested assets found. This may not be returned in the same order as the identifiers were provided, and will only return mark data for the distinct set of assets matching the requested identifiers.
     */
    assetMarks?: Array<RetrieveFixedIncomeMarksResponseAssetMark> | undefined;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksResponse$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveFixedIncomeMarksResponse$Outbound = {
    asset_marks?: Array<RetrieveFixedIncomeMarksResponseAssetMark$Outbound> | undefined;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksResponse$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponse$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksResponse$ {
    /** @deprecated use `RetrieveFixedIncomeMarksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponse$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksResponse>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponse$Outbound` instead. */
    type Outbound = RetrieveFixedIncomeMarksResponse$Outbound;
}
export declare function retrieveFixedIncomeMarksResponseToJSON(retrieveFixedIncomeMarksResponse: RetrieveFixedIncomeMarksResponse): string;
export declare function retrieveFixedIncomeMarksResponseFromJSON(jsonString: string): SafeParseResult<RetrieveFixedIncomeMarksResponse, SDKValidationError>;
//# sourceMappingURL=retrievefixedincomemarksresponse.d.ts.map