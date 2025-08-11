import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The rate at which monies were withheld, expressed as a value between 0-1
 */
export type Rate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
export declare enum WithholdingDataState {
    WithholdingStateUnspecified = "WITHHOLDING_STATE_UNSPECIFIED",
    Ca = "CA",
    Me = "ME",
    Vt = "VT",
    Al = "AL",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Co = "CO",
    Ct = "CT",
    De = "DE",
    Fl = "FL",
    Ga = "GA",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ia = "IA",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Mn = "MN",
    Ms = "MS",
    Mo = "MO",
    Mt = "MT",
    Ne = "NE",
    Nv = "NV",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Nd = "ND",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Ut = "UT",
    Va = "VA",
    Wa = "WA",
    Wv = "WV",
    Wi = "WI",
    Wy = "WY"
}
export type WithholdingDataStateOpen = OpenEnum<typeof WithholdingDataState>;
/**
 * Provides more detail on the type of the withholding (Federal, State, etc.)
 */
export declare enum WithholdingDataType {
    WithholdingTypeUnspecified = "WITHHOLDING_TYPE_UNSPECIFIED",
    Federal = "FEDERAL",
    State = "STATE",
    ForeignSecurity = "FOREIGN_SECURITY",
    FederalIra = "FEDERAL_IRA",
    StateIra = "STATE_IRA",
    NonResidentAlien = "NON_RESIDENT_ALIEN"
}
/**
 * Provides more detail on the type of the withholding (Federal, State, etc.)
 */
export type WithholdingDataTypeOpen = OpenEnum<typeof WithholdingDataType>;
export type WithholdingData = {
    /**
     * The rate at which monies were withheld, expressed as a value between 0-1
     */
    rate?: Rate | null | undefined;
    /**
     * 2-Letter alpha code for the names of countries, dependent territories, and special areas of geographical interest. Complies with ISO-3166 Alpha-2 Codes
     */
    regionCode?: string | undefined;
    state?: WithholdingDataStateOpen | undefined;
    /**
     * The tax year associated with the withholding
     */
    taxYear?: number | undefined;
    /**
     * Provides more detail on the type of the withholding (Federal, State, etc.)
     */
    type?: WithholdingDataTypeOpen | undefined;
};
/** @internal */
export declare const Rate$inboundSchema: z.ZodType<Rate, z.ZodTypeDef, unknown>;
/** @internal */
export type Rate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Rate$outboundSchema: z.ZodType<Rate$Outbound, z.ZodTypeDef, Rate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Rate$ {
    /** @deprecated use `Rate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Rate, z.ZodTypeDef, unknown>;
    /** @deprecated use `Rate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Rate$Outbound, z.ZodTypeDef, Rate>;
    /** @deprecated use `Rate$Outbound` instead. */
    type Outbound = Rate$Outbound;
}
export declare function rateToJSON(rate: Rate): string;
export declare function rateFromJSON(jsonString: string): SafeParseResult<Rate, SDKValidationError>;
/** @internal */
export declare const WithholdingDataState$inboundSchema: z.ZodType<WithholdingDataStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WithholdingDataState$outboundSchema: z.ZodType<WithholdingDataStateOpen, z.ZodTypeDef, WithholdingDataStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingDataState$ {
    /** @deprecated use `WithholdingDataState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingDataStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingDataState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingDataStateOpen, z.ZodTypeDef, WithholdingDataStateOpen>;
}
/** @internal */
export declare const WithholdingDataType$inboundSchema: z.ZodType<WithholdingDataTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WithholdingDataType$outboundSchema: z.ZodType<WithholdingDataTypeOpen, z.ZodTypeDef, WithholdingDataTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingDataType$ {
    /** @deprecated use `WithholdingDataType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingDataTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingDataType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingDataTypeOpen, z.ZodTypeDef, WithholdingDataTypeOpen>;
}
/** @internal */
export declare const WithholdingData$inboundSchema: z.ZodType<WithholdingData, z.ZodTypeDef, unknown>;
/** @internal */
export type WithholdingData$Outbound = {
    rate?: Rate$Outbound | null | undefined;
    region_code?: string | undefined;
    state?: string | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const WithholdingData$outboundSchema: z.ZodType<WithholdingData$Outbound, z.ZodTypeDef, WithholdingData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingData$ {
    /** @deprecated use `WithholdingData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingData, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingData$Outbound, z.ZodTypeDef, WithholdingData>;
    /** @deprecated use `WithholdingData$Outbound` instead. */
    type Outbound = WithholdingData$Outbound;
}
export declare function withholdingDataToJSON(withholdingData: WithholdingData): string;
export declare function withholdingDataFromJSON(jsonString: string): SafeParseResult<WithholdingData, SDKValidationError>;
//# sourceMappingURL=withholdingdata.d.ts.map