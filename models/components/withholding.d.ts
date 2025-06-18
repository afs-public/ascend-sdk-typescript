import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Monetary amount associated with the withholding
 */
export type WithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate at which monies were withheld
 */
export type WithholdingRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
export declare enum WithholdingState {
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
export type WithholdingStateOpen = OpenEnum<typeof WithholdingState>;
/**
 * Describes the type of the withholding (Federal, State, etc.)
 */
export declare enum WithholdingType1 {
    WithholdingTypeUnspecified = "WITHHOLDING_TYPE_UNSPECIFIED",
    Federal = "FEDERAL",
    State = "STATE",
    ForeignSecurity = "FOREIGN_SECURITY",
    FederalIra = "FEDERAL_IRA",
    StateIra = "STATE_IRA",
    NonResidentAlien = "NON_RESIDENT_ALIEN"
}
/**
 * Describes the type of the withholding (Federal, State, etc.)
 */
export type WithholdingType1Open = OpenEnum<typeof WithholdingType1>;
export type Withholding = {
    /**
     * Monetary amount associated with the withholding
     */
    amount?: WithholdingAmount | null | undefined;
    /**
     * The rate at which monies were withheld
     */
    rate?: WithholdingRate | null | undefined;
    state?: WithholdingStateOpen | undefined;
    /**
     * The tax year associated with the withholding
     */
    taxYear?: number | undefined;
    /**
     * Describes the type of the withholding (Federal, State, etc.)
     */
    type?: WithholdingType1Open | undefined;
};
/** @internal */
export declare const WithholdingAmount$inboundSchema: z.ZodType<WithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WithholdingAmount$outboundSchema: z.ZodType<WithholdingAmount$Outbound, z.ZodTypeDef, WithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingAmount$ {
    /** @deprecated use `WithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingAmount$Outbound, z.ZodTypeDef, WithholdingAmount>;
    /** @deprecated use `WithholdingAmount$Outbound` instead. */
    type Outbound = WithholdingAmount$Outbound;
}
/** @internal */
export declare const WithholdingRate$inboundSchema: z.ZodType<WithholdingRate, z.ZodTypeDef, unknown>;
/** @internal */
export type WithholdingRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WithholdingRate$outboundSchema: z.ZodType<WithholdingRate$Outbound, z.ZodTypeDef, WithholdingRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingRate$ {
    /** @deprecated use `WithholdingRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingRate$Outbound, z.ZodTypeDef, WithholdingRate>;
    /** @deprecated use `WithholdingRate$Outbound` instead. */
    type Outbound = WithholdingRate$Outbound;
}
/** @internal */
export declare const WithholdingState$inboundSchema: z.ZodType<WithholdingStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WithholdingState$outboundSchema: z.ZodType<WithholdingStateOpen, z.ZodTypeDef, WithholdingStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingState$ {
    /** @deprecated use `WithholdingState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingStateOpen, z.ZodTypeDef, WithholdingStateOpen>;
}
/** @internal */
export declare const WithholdingType1$inboundSchema: z.ZodType<WithholdingType1Open, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WithholdingType1$outboundSchema: z.ZodType<WithholdingType1Open, z.ZodTypeDef, WithholdingType1Open>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingType1$ {
    /** @deprecated use `WithholdingType1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingType1Open, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingType1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingType1Open, z.ZodTypeDef, WithholdingType1Open>;
}
/** @internal */
export declare const Withholding$inboundSchema: z.ZodType<Withholding, z.ZodTypeDef, unknown>;
/** @internal */
export type Withholding$Outbound = {
    amount?: WithholdingAmount$Outbound | null | undefined;
    rate?: WithholdingRate$Outbound | null | undefined;
    state?: string | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Withholding$outboundSchema: z.ZodType<Withholding$Outbound, z.ZodTypeDef, Withholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Withholding$ {
    /** @deprecated use `Withholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Withholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `Withholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Withholding$Outbound, z.ZodTypeDef, Withholding>;
    /** @deprecated use `Withholding$Outbound` instead. */
    type Outbound = Withholding$Outbound;
}
//# sourceMappingURL=withholding.d.ts.map