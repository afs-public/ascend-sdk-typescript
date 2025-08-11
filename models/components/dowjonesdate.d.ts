import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Custom date object to present related Dow Jones dates because any value can be null, Month is represented randomly like June, Jun, 6 etc. etc.
 */
export type DowJonesDate = {
    /**
     * Day
     */
    day?: string | undefined;
    /**
     * Month
     */
    month?: string | undefined;
    /**
     * Year
     */
    year?: string | undefined;
};
/** @internal */
export declare const DowJonesDate$inboundSchema: z.ZodType<DowJonesDate, z.ZodTypeDef, unknown>;
/** @internal */
export type DowJonesDate$Outbound = {
    day?: string | undefined;
    month?: string | undefined;
    year?: string | undefined;
};
/** @internal */
export declare const DowJonesDate$outboundSchema: z.ZodType<DowJonesDate$Outbound, z.ZodTypeDef, DowJonesDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DowJonesDate$ {
    /** @deprecated use `DowJonesDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DowJonesDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DowJonesDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DowJonesDate$Outbound, z.ZodTypeDef, DowJonesDate>;
    /** @deprecated use `DowJonesDate$Outbound` instead. */
    type Outbound = DowJonesDate$Outbound;
}
export declare function dowJonesDateToJSON(dowJonesDate: DowJonesDate): string;
export declare function dowJonesDateFromJSON(jsonString: string): SafeParseResult<DowJonesDate, SDKValidationError>;
//# sourceMappingURL=dowjonesdate.d.ts.map