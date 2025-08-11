import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaxWithholdingMetadataCreate, TaxWithholdingMetadataCreate$Outbound } from "./taxwithholdingmetadatacreate.js";
/**
 * The purpose of the operating account.
 */
export declare enum OperatingPurpose {
    OperatingPurposeUnspecified = "OPERATING_PURPOSE_UNSPECIFIED",
    Custody = "CUSTODY",
    SecFee = "SEC_FEE",
    TafFee = "TAF_FEE",
    TefraWithholding = "TEFRA_WITHHOLDING",
    Suspense = "SUSPENSE",
    Allocation = "ALLOCATION",
    Error = "ERROR",
    Deposit = "DEPOSIT",
    WriteOff = "WRITE_OFF",
    UnsecuredReserve = "UNSECURED_RESERVE",
    Payable = "PAYABLE",
    Commission = "COMMISSION",
    Escheatment = "ESCHEATMENT",
    InterestRevenue = "INTEREST_REVENUE",
    StreetDepository = "STREET_DEPOSITORY",
    Inventory = "INVENTORY",
    TaxWithholding = "TAX_WITHHOLDING",
    Fee = "FEE",
    PrincipalTrading = "PRINCIPAL_TRADING",
    SafekeepingBookEntityDomestic = "SAFEKEEPING_BOOK_ENTITY_DOMESTIC",
    Fail = "FAIL"
}
/**
 * The purpose of the operating account.
 */
export type OperatingPurposeOpen = OpenEnum<typeof OperatingPurpose>;
/**
 * Enrollment metadata for the REGISTRATION_OPERATING enrollment type.
 */
export type OperatingEnrollmentMetadataCreate = {
    /**
     * The purpose of the operating account.
     */
    operatingPurpose: OperatingPurposeOpen;
    /**
     * Optional subtitle for the operating purpose
     */
    subtitle?: string | undefined;
    /**
     * Enrollment metadata for TAX_WITHHOLDING operating purpose
     */
    taxWithholdingMetadata?: TaxWithholdingMetadataCreate | undefined;
};
/** @internal */
export declare const OperatingPurpose$inboundSchema: z.ZodType<OperatingPurposeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OperatingPurpose$outboundSchema: z.ZodType<OperatingPurposeOpen, z.ZodTypeDef, OperatingPurposeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OperatingPurpose$ {
    /** @deprecated use `OperatingPurpose$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OperatingPurposeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OperatingPurpose$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OperatingPurposeOpen, z.ZodTypeDef, OperatingPurposeOpen>;
}
/** @internal */
export declare const OperatingEnrollmentMetadataCreate$inboundSchema: z.ZodType<OperatingEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type OperatingEnrollmentMetadataCreate$Outbound = {
    operating_purpose: string;
    subtitle?: string | undefined;
    tax_withholding_metadata?: TaxWithholdingMetadataCreate$Outbound | undefined;
};
/** @internal */
export declare const OperatingEnrollmentMetadataCreate$outboundSchema: z.ZodType<OperatingEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, OperatingEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OperatingEnrollmentMetadataCreate$ {
    /** @deprecated use `OperatingEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OperatingEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OperatingEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OperatingEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, OperatingEnrollmentMetadataCreate>;
    /** @deprecated use `OperatingEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = OperatingEnrollmentMetadataCreate$Outbound;
}
export declare function operatingEnrollmentMetadataCreateToJSON(operatingEnrollmentMetadataCreate: OperatingEnrollmentMetadataCreate): string;
export declare function operatingEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<OperatingEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=operatingenrollmentmetadatacreate.d.ts.map