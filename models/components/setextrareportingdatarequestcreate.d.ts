import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SetExtraReportingDataRequestCreate = {
    cancelConfirmedTime: Date | null;
    /**
     * Format: accounts/{account_id}/orders/{order_id}
     */
    name: string;
};
/** @internal */
export declare const SetExtraReportingDataRequestCreate$inboundSchema: z.ZodType<SetExtraReportingDataRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type SetExtraReportingDataRequestCreate$Outbound = {
    cancel_confirmed_time: string | null;
    name: string;
};
/** @internal */
export declare const SetExtraReportingDataRequestCreate$outboundSchema: z.ZodType<SetExtraReportingDataRequestCreate$Outbound, z.ZodTypeDef, SetExtraReportingDataRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SetExtraReportingDataRequestCreate$ {
    /** @deprecated use `SetExtraReportingDataRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SetExtraReportingDataRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SetExtraReportingDataRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SetExtraReportingDataRequestCreate$Outbound, z.ZodTypeDef, SetExtraReportingDataRequestCreate>;
    /** @deprecated use `SetExtraReportingDataRequestCreate$Outbound` instead. */
    type Outbound = SetExtraReportingDataRequestCreate$Outbound;
}
export declare function setExtraReportingDataRequestCreateToJSON(setExtraReportingDataRequestCreate: SetExtraReportingDataRequestCreate): string;
export declare function setExtraReportingDataRequestCreateFromJSON(jsonString: string): SafeParseResult<SetExtraReportingDataRequestCreate, SDKValidationError>;
//# sourceMappingURL=setextrareportingdatarequestcreate.d.ts.map