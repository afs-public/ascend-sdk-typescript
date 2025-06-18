import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Tax Authority for Enrollment
 */
export declare enum TaxAuthority {
    TaxAuthorityUnspecified = "TAX_AUTHORITY_UNSPECIFIED",
    Al = "AL",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
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
    Me = "ME",
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
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wv = "WV",
    Wi = "WI",
    Wy = "WY",
    Irs = "IRS"
}
/**
 * Tax Authority for Enrollment
 */
export type TaxAuthorityOpen = OpenEnum<typeof TaxAuthority>;
/**
 * A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale
 */
export declare enum WithholdingType {
    WithholdingTypeUnspecified = "WITHHOLDING_TYPE_UNSPECIFIED",
    Backup = "BACKUP",
    BackupProceeds = "BACKUP_PROCEEDS",
    BackupDividendsAndInterest = "BACKUP_DIVIDENDS_AND_INTEREST",
    Ira = "IRA"
}
/**
 * A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale
 */
export type WithholdingTypeOpen = OpenEnum<typeof WithholdingType>;
/**
 * Enrollment metadata for TAX_WITHHOLDING operating purpose
 */
export type TaxWithholdingMetadataCreate = {
    /**
     * Tax Authority for Enrollment
     */
    taxAuthority: TaxAuthorityOpen;
    /**
     * A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale
     */
    withholdingType: WithholdingTypeOpen;
};
/** @internal */
export declare const TaxAuthority$inboundSchema: z.ZodType<TaxAuthorityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaxAuthority$outboundSchema: z.ZodType<TaxAuthorityOpen, z.ZodTypeDef, TaxAuthorityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxAuthority$ {
    /** @deprecated use `TaxAuthority$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxAuthorityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxAuthority$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxAuthorityOpen, z.ZodTypeDef, TaxAuthorityOpen>;
}
/** @internal */
export declare const WithholdingType$inboundSchema: z.ZodType<WithholdingTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WithholdingType$outboundSchema: z.ZodType<WithholdingTypeOpen, z.ZodTypeDef, WithholdingTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithholdingType$ {
    /** @deprecated use `WithholdingType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithholdingTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithholdingType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithholdingTypeOpen, z.ZodTypeDef, WithholdingTypeOpen>;
}
/** @internal */
export declare const TaxWithholdingMetadataCreate$inboundSchema: z.ZodType<TaxWithholdingMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxWithholdingMetadataCreate$Outbound = {
    tax_authority: string;
    withholding_type: string;
};
/** @internal */
export declare const TaxWithholdingMetadataCreate$outboundSchema: z.ZodType<TaxWithholdingMetadataCreate$Outbound, z.ZodTypeDef, TaxWithholdingMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxWithholdingMetadataCreate$ {
    /** @deprecated use `TaxWithholdingMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxWithholdingMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxWithholdingMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxWithholdingMetadataCreate$Outbound, z.ZodTypeDef, TaxWithholdingMetadataCreate>;
    /** @deprecated use `TaxWithholdingMetadataCreate$Outbound` instead. */
    type Outbound = TaxWithholdingMetadataCreate$Outbound;
}
//# sourceMappingURL=taxwithholdingmetadatacreate.d.ts.map